from setuptools import setup, find_packages

setup(
    name="Gestor de Tareas",
    version="2.0.0",
    description="Gestor de tareas desde la terminal",
    author="Cristian", 
    author_email="cristianguevara0331@gmail.com",
    url="https://github.com/DearDayz/Lenguaje-Programacion.git",
    packages=find_packages(),
    entry_points={
        "console_scripts": [
            "tarea=gestor_tareas:iniciar_programa",  # Usar la función de inicio en gestor_tareas.py
        ],
    },
    
    tests_require=[
        "pytest",
    ],
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires=">=3.11.2",
)