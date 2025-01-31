import sys
import os

# Agregar la ruta del directorio principal a sys.path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from MiniProyectos.gestor_tareas.gestor_tareas import mostrar_tareas

def test_mostrar_tareas():
    bd_tareas = {
        "1": {"descripcion": "Tarea pendiente", "estado": "pendiente", "creada": "2025-01-30", "actualizada": "2025-01-30"},
        "2": {"descripcion": "Tarea en progreso", "estado": "progreso", "creada": "2025-01-30", "actualizada": "2025-01-30"},
        "3": {"descripcion": "Tarea completada", "estado": "completada", "creada": "2025-01-30", "actualizada": "2025-01-30"}
    }
    
    # Mostrar solo tareas con estado 'pendiente'
    mostrar_tareas(bd_tareas, "pendiente")
    
    # Aquí, puedes verificar que solo se imprime la tarea pendiente.
    # Puedes hacerlo capturando la salida y verificando la presencia de la tarea correcta (en este caso, tarea con ID 1).
