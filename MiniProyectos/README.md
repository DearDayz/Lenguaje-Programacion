# 📝 Gestor de Tareas

Un gestor de tareas basado en la terminal, desarrollado en Python. Permite agregar, listar y gestionar tareas con diferentes estados.

## 🚀 Instalación

1. Clonar el repositorio:

   ```sh
   git clone https://github.com/DearDayz/Lenguaje-Programacion.git
   cd Lenguaje-Programacion/MiniProyectos

## Instalar dependencias:

pip install -r requirements.txt

## Instalar el paquete en modo editable:

pip install -e .

# 🛠 Uso

Ejecutar los siguientes comandos desde la terminal:

## Agregar una tarea
tarea agregar "Comprar leche"

## Mostrar todas las tareas
tarea mostrar

## Actualizar una tarea
tarea actualizar 1 "Estado: completada"

## Eliminar una tarea
tarea eliminar 1


## También puedes ejecutar el script directamente:
python gestor_tareas.py mostrar


# 📋 Estructura del Proyecto

MiniProyectos/
│── tests/               # Pruebas unitarias
│   ├── test1.py
│   ├── test2.py
│   ├── test3.py
│   ├── test4.py
│   ├── test5.py
│   ├── test6.py
│── gestor_tareas.py     # Código principal
│── setup.py             # Configuración del paquete
│── tareas.json          # Almacenamiento de tareas
│── requirements.txt     # Dependencias
│── README.md            # Documentación

# 🧪 Pruebas Unitarias

Las pruebas unitarias están en la carpeta tests/. Para ejecutarlas:

pytest tests/