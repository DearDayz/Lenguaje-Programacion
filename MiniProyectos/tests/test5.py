import sys
import os

# Agregar la ruta del directorio principal a sys.path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from gestor_tareas import marcar_completada

def test_marcar_completada():
    bd_tareas = {"1": {"descripcion": "Tarea pendiente", "estado": "pendiente", "creada": "2025-01-30", "actualizada": "2025-01-30"}}
    
    # Marcar la tarea con ID 1 como completada
    marcar_completada(bd_tareas, "1")
    
    # Verificamos que el estado haya cambiado a 'completada'
    tarea = bd_tareas["1"]
    assert tarea["estado"] == "completada"
