import sys
import os

# Agregar la ruta del directorio principal a sys.path
sys.path.insert(0, "../MiniProyectos")

from gestor_tareas.gestor_tareas import marcar_en_progreso

def test_marcar_en_progreso():
    bd_tareas = {"1": {"descripcion": "Tarea pendiente", "estado": "pendiente", "creada": "2025-01-30", "actualizada": "2025-01-30"}}
    
    # Marcar la tarea con ID 1 como en progreso
    marcar_en_progreso(bd_tareas, "1")
    
    # Verificamos que el estado haya cambiado a 'progreso'
    tarea = bd_tareas["1"]
    assert tarea["estado"] == "progreso"
