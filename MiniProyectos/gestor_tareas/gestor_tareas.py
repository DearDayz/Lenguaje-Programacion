import argparse
import json
import os
import sys
from datetime import datetime

def iniciar_programa():
    comandos_disponibles = obtener_comandos()
    comando, argumentos = procesar_entrada(comandos_disponibles)
    RUTA_BD = os.path.join(os.path.dirname(os.path.abspath(__file__)), "tareas.json")
    bd_tareas = cargar_base_datos(RUTA_BD)
    
    try:
        comando(bd_tareas, **argumentos)
    except KeyError:
        sys.exit("Error: No existe una tarea con el ID proporcionado.")
    
    guardar_base_datos(bd_tareas, RUTA_BD)

def cargar_base_datos(ruta):
    try:
        with open(ruta, "r") as archivo:
            return json.load(archivo)
    except (FileNotFoundError, json.JSONDecodeError):
        return {}

def guardar_base_datos(bd_tareas, ruta):
    with open(ruta, "w") as archivo:
        json.dump(bd_tareas, archivo, indent=4)

def obtener_comandos():
    return {
        "agregar": {"accion": agregar_tarea, "descripcion": "Añadir una nueva tarea", "args": ["descripcion"]},
        "eliminar": {"accion": eliminar_tarea, "descripcion": "Eliminar una tarea", "args": ["id"]},
        "modificar": {"accion": modificar_tarea, "descripcion": "Actualizar una tarea", "args": ["id", "descripcion"]},
        "mostrar": {"accion": mostrar_tareas, "descripcion": "Listar todas las tareas", "args": ["--estado"]},
        "progreso": {"accion": marcar_en_progreso, "descripcion": "Marcar tarea en progreso", "args": ["id"]},
        "completar": {"accion": marcar_completada, "descripcion": "Marcar tarea como completada", "args": ["id"]},
    }

def procesar_entrada(comandos_disponibles):
    parser = argparse.ArgumentParser(description="Gestor de tareas desde la terminal")
    subparsers = parser.add_subparsers(dest="accion", required=True)
    
    for nombre, detalles in comandos_disponibles.items():
        subparser = subparsers.add_parser(nombre, help=detalles["descripcion"])
        for arg in detalles["args"]:
            if arg == "--estado":
                subparser.add_argument(arg, default="todas", help="Filtrar tareas por estado (todas, pendiente, progreso, completada)")
            else:
                subparser.add_argument(arg)
    
    args = vars(parser.parse_args())
    accion = comandos_disponibles[args.pop("accion")]["accion"]
    return accion, args

def agregar_tarea(bd_tareas, descripcion):
    id_nueva = str(int(max(bd_tareas.keys(), default="0")) + 1)
    fecha_actual = datetime.today().isoformat()
    bd_tareas[id_nueva] = {"descripcion": descripcion, "estado": "pendiente", "creada": fecha_actual, "actualizada": fecha_actual}
    mostrar_tareas(bd_tareas)

def eliminar_tarea(bd_tareas, id):
    if id in bd_tareas:
        mostrar_tareas({id: bd_tareas[id]})
        del bd_tareas[id]
    else:
        print("Error: ID no encontrado.")

def modificar_tarea(bd_tareas, id, descripcion):
    if id in bd_tareas:
        bd_tareas[id]["descripcion"] = descripcion
        bd_tareas[id]["actualizada"] = datetime.today().isoformat()
        mostrar_tareas(bd_tareas)
    else:
        print("Error: ID no encontrado.")

def mostrar_tareas(bd_tareas, estado="todas"):
    formato_fecha = "%d/%m/%Y %H:%M:%S"
    print("\nListado de tareas:")
    print("=" * 50)
    for id, datos in sorted(bd_tareas.items()):
        if estado == "todas" or datos["estado"] == estado:
            print(f"ID: {id}")
            print(f"Descripción: {datos['descripcion']}")
            print(f"Estado: {datos['estado']}")
            print(f"Creada: {datetime.fromisoformat(datos['creada']).strftime(formato_fecha)}")
            print(f"Actualizada: {datetime.fromisoformat(datos['actualizada']).strftime(formato_fecha)}")
            print("-" * 50)
    if not bd_tareas:
        print("No hay tareas registradas.")

def marcar_en_progreso(bd_tareas, id):
    if id in bd_tareas:
        bd_tareas[id]["estado"] = "progreso"
        bd_tareas[id]["actualizada"] = datetime.today().isoformat()
        mostrar_tareas(bd_tareas)
    else:
        print("Error: ID no encontrado.")

def marcar_completada(bd_tareas, id):
    if id in bd_tareas:
        bd_tareas[id]["estado"] = "completada"
        bd_tareas[id]["actualizada"] = datetime.today().isoformat()
        mostrar_tareas(bd_tareas)
    else:
        print("Error: ID no encontrado.")

if __name__ == "__main__":
    iniciar_programa()