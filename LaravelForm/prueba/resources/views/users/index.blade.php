<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Usuarios</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100">
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Lista de Usuarios</h1>
        <a href="{{ route('users.create') }}" class="bg-blue-500 text-white px-4 py-2 rounded">Crear Usuario</a>
        <div class="mt-4">
            @foreach ($users as $user)
                <div class="bg-white p-4 rounded shadow mb-4">
                    <p><strong>Nombre:</strong> {{ $user['name'] }}</p>
                    <p><strong>Email:</strong> {{ $user['email'] }}</p>
                    <p><strong>Imagen de Perfil:</strong> <img src="{{ asset('storage/' . $user['profile_image']) }}" alt="Profile Image" class="w-16 h-16"></p>
                    <p><strong>Archivo:</strong> <a href="{{ asset('storage/' . $user['file']) }}" target="_blank">Ver Archivo</a></p>
                    <div class="mt-2">
                        <a href="{{ route('users.edit', $user['id']) }}" class="bg-yellow-500 text-white px-4 py-2 rounded">Editar</a>
                        <form action="{{ route('users.destroy', $user['id']) }}" method="POST" class="inline">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="bg-red-500 text-white px-4 py-2 rounded">Eliminar</button>
                        </form>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</body>
</html>