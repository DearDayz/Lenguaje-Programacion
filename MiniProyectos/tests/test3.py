import sys
import os

# Agregar la ruta del directorio principal a sys.path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from gestor_tareas import modificar_tarea

def test_modificar_tarea():
    bd_tareas = {"1": {"descripcion": "Tarea original", "estado": "pendiente", "creada": "2025-01-30", "actualizada": "2025-01-30"}}
    
    # Modificar la tarea con ID 1
    modificar_tarea(bd_tareas, "1", "Tarea modificada")
    
    # Verificamos que la descripción de la tarea haya cambiado
    tarea = bd_tareas["1"]
    assert tarea["descripcion"] == "Tarea modificada"
    
    # Verificamos que la fecha de actualización haya cambiado
    assert tarea["actualizada"] != tarea["creada"]
