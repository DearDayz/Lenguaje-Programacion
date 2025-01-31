import sys
import os

# Agregar la ruta del directorio principal a sys.path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from MiniProyectos.gestor_tareas.gestor_tareas import agregar_tarea

def test_agregar_tarea():
    bd_tareas = {}  # Base de datos vacía

    # Llamamos a la función con una descripción
    agregar_tarea(bd_tareas, "Tarea de prueba")
    
    # Verificamos que la base de datos contiene una tarea
    assert len(bd_tareas) == 1
    
    # Verificamos que la tarea tiene el estado 'pendiente'
    tarea = bd_tareas["1"]
    assert tarea["descripcion"] == "Tarea de prueba"
    assert tarea["estado"] == "pendiente"


