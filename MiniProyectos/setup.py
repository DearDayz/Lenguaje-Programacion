from setuptools import setup, find_packages

setup(
    name="gestor_tareas",
    version="2.0.0",
    description="Gestor de tareas desde la terminal",
    author="Cristian",  
    author_email="cristianguevara0331@gmail.com",
    url="https://github.com/DearDayz/Lenguaje-Programacion.git",
    packages=find_packages(),  # Encuentra automáticamente los paquetes
    entry_points={
        "console_scripts": [
            "tarea=gestor_tareas.gestor_tareas:iniciar_programa",  
        ],
    },
    install_requires=[],  # Puedes agregar dependencias aquí si es necesario
    tests_require=["pytest"],
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires=">=3.11.2",
)
