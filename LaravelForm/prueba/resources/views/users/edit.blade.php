<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editar Usuario</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100">
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Editar Usuario</h1>
        <form action="{{ route('users.update', $user['id']) }}" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PUT')
            <div class="mb-4">
                <label for="name" class="block text-sm font-medium text-gray-700">Nombre</label>
                <input type="text" name="name" id="name" value="{{ $user['name'] }}" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required>
            </div>
            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" id="email" value="{{ $user['email'] }}" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required>
            </div>
            <div class="mb-4">
                <label for="profile_image" class="block text-sm font-medium text-gray-700">Imagen de Perfil</label>
                <input type="file" name="profile_image" id="profile_image" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                <img src="{{ asset('storage/' . $user['profile_image']) }}" alt="Profile Image" class="w-16 h-16 mt-2">
            </div>
            <div class="mb-4">
                <label for="file" class="block text-sm font-medium text-gray-700">Archivo</label>
                <input type="file" name="file" id="file" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                <a href="{{ asset('storage/' . $user['file']) }}" target="_blank" class="text-blue-500">Ver Archivo Actual</a>
            </div>
            <div class="mb-4">
                <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Actualizar</button>
            </div>
        </form>
    </div>
</body>
</html>