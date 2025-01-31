import sys
import os

# Agregar la ruta del directorio principal a sys.path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from MiniProyectos.gestor_tareas.gestor_tareas import eliminar_tarea

def test_eliminar_tarea():
    bd_tareas = {"1": {"descripcion": "Tarea a eliminar", "estado": "pendiente", "creada": "2025-01-30", "actualizada": "2025-01-30"}}
    
    # Eliminar la tarea con ID 1
    eliminar_tarea(bd_tareas, "1")
    
    # Verificamos que la base de datos esté vacía
    assert len(bd_tareas) == 0
