# Lenguaje-Programacion
## 📘 Documentación de Rustup, C#, PHP y Go en Jupyter Notebook

Este repositorio contiene documentación y ejemplos sobre Rustup, C#, PHP y Go utilizando Jupyter Notebook. La finalidad es proporcionar una referencia clara y práctica para el aprendizaje y uso de estos lenguajes y herramientas.

### 📂 Contenido

- **Rustup**: Instalación, configuración y uso de Rust en Jupyter Notebook.
- **C#**: Integración de C# en Jupyter Notebook, ejemplos y ejecución de código.
- **PHP**: Configuración y ejecución de scripts PHP dentro de Jupyter Notebook.
- **Go**: Uso del lenguaje Go en Jupyter Notebook, incluyendo configuración y ejemplos prácticos.

### 🚀 Instalación y Uso

#### 1️⃣ Requisitos Previos
Asegúrate de tener instalado:
- [Jupyter Notebook](https://jupyter.org/install)
- [Rust y Rustup](https://rustup.rs/)
- [Dotnet para C#](https://dotnet.microsoft.com/en-us/download)
- [PHP](https://www.php.net/downloads)
- [Go](https://go.dev/dl/)

#### 2️⃣ Instalación de los Kernels
Para ejecutar cada lenguaje en Jupyter Notebook, sigue estos pasos:

##### Rust (evcxr)
```sh
cargo install evcxr_jupyter
evcxr_jupyter --install
```

##### C# (.NET Interactive)
```sh
dotnet tool install --global Microsoft.dotnet-interactive
```
```sh
dotnet interactive jupyter install
```

##### PHP (IJavascript Kernel para PHP)
```sh
npm install -g ijavascript
ijsinstall
```

##### Go (gophernotes)
```sh
go install github.com/gopherdata/gophernotes@latest
```
```sh
mkdir -p ~/.local/share/jupyter/kernels/gophernotes
cp -r $GOPATH/bin/gophernotes ~/.local/share/jupyter/kernels/
```

#### 3️⃣ Ejecución
Ejecuta Jupyter Notebook con el siguiente comando:
```sh
jupyter notebook
```
Luego, selecciona el kernel correspondiente a cada lenguaje en Jupyter Notebook.

### 📜 Ejemplos
Cada carpeta dentro del repositorio contiene notebooks con ejemplos detallados sobre cada lenguaje:
- `notebooks/rustup/`
- `notebooks/csharp/`
- `notebooks/php/`
- `notebooks/go/`

### 🤝 Contribuciones
Si deseas contribuir, sigue estos pasos:
1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature-nueva`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Sube tus cambios (`git push origin feature-nueva`).
5. Abre un Pull Request.

### 📄 Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

