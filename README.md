# Favam

Aplicacion Web, registro de usuarios y dashboard para ver los
datos usuarios registrados con Next.js y Prisma.

- Home ✅
- Registro ✅
- Login ⚠️
- Account ⚠️
- Dashboard ✅

## Registro con prisma
Para el registor de los usuarios en la base de datos he creado el siguiente model:
```
model User {
  id        Int @id @default(autoincrement())
  username  String
  fullName  String
  email     String @unique
  age       Int
  password  String
  dni       String @unique
  birthDate DateTime
  createAt  DateTime @default(now())
  role      String   @default("user")
}
```
En la carpeta ``/app/api/signup/`` esta el archivo que recibe la peticion POST para el registro de un nuevo usuario desde la pagina ``/app/login/``

## Inicio de seccion

No he logrado implementar un inicio de sección usando next-auth. Puedes revisarlo dentro de la carpeta ``/app/api``, el login iba a ser necesario para poder acceder a ``/app/account`` y poder ver tus datos.

> Note: ``account`` funciona como un perfil de cuenta simple

Tambien ``/app/account/[id]`` iba a servir para poder ver otros perfiles de otros usuarios. Esto iba a funcionar con peticiones `POST` y `GET` desde ``/app/api/account`` y ``/app/api/account/[id]`` para obtener la informacion de la `session` y de otros usuarios. Sin olvidarme que ``/app/api/account`` incluye una peticion ``DElETE`` para que requiere como parametros el `id` y el `username` de lo usuario que quiera borrar su cuenta.

## Dashboard

El dashboard para visualizar los datos de todos los usuarios es `/dashboard/users` y `/dashboard` sirve como pagina de inicio de el dashboard.
Dentro de `/dashboard/users` podras visualizar una tabla de todos los usuarios registrados con todos sus datos ordenados. Tambien podras ver el promedio de edad de estos, redondeado a numeros enteros.
> Note: Solamente iban a poder ingresar al dashboard los que tuvieran `role "Admin"` y los `user` tendrian bloqueado el acceso a la visualizacion de todo lo que este dentro de la ruta `/dashboard`.

## License
MIT