Proyecto de prueba técnica desarrollador Full-Stack

En este repositorio tenemos un proyecto de React (Vite) con una trabajo de backend realizado en Node js (express) para el manejo bases de datos sql de Postgres

Para la correcta instalación del proyecto se deben seguir los siguientes pasos:

- Se debe tener docker instalado en el computador
- Tener conexion a internet
- Al menos 3 Gygas de memoria RAM
- Navegador de internet

Los pasos para instalar e iniciar el proyecto son:

1) Ingresando con algún terminal a la carpeta KonectaPruebaTecnica
2) Ya dentro de la carpeta abrir el programa Docker Desktop
3) Habiendo cargado el programa, en la consola escribir el comando "docker compose up --build"
4) Se comenzarán a instalar las diferentes tecnologías en el contenedor de docker y la copia de los archivos, esto puede tardar unos minutos
5) En el momento de terminada la instalaciín e iniciación del contenedor, abrimos el navegador de internet e ingresamos a http://localhost:3000

*IMPORTANTE*: Nunca cerrar la ventana de la terminal donde se escribió el comando "docker compose up --build"

*POSTDATA*: El parametro "--build" en el comando "docker compose up" solo es necesario agregarlo la primera vez que se vaya a levantar el contenedor, después de la primera vez ya no es necesario agregarlo. Esto ayuda a que sea un poco más rápido y eficiente las siguientes veces que se vaya a levantar el contenedor.


--- Entrar al modo desarrollo de la aplicación
Para entrar al modo desarrollo de la aplicación es necesario tener instalado Node js, React, Vite y PostgresSQL en nuestro computador.

Para desplegar en modo desarrollador se debe tener una terminal de powershell en la carpeta del proyecto y se escribe el comando ". .\script\powershell\setup.ps1". Esto abrirá dos terminales las cuales desplegarán los dos componentes de nuestro proyecto (front-end y back-end).

--- Seguridad
El proyecto como seguridad tiene varios parametros, entre ellos: uso de JWT (JSON Web Token) para la autenticación del usuario al ingresar a la página. Se tiene un código de Encriptado de la contraseña para la cuenta, también todos los procesos usan middlewares de autenticación con JWT.
Manejo de archivo .env para el uso de las variables de seguridad, como por ejemplo: DB_HOST, SECRET (firma oculta para el JWT), DB_USERNAME, entre otras ...

--- Mejores prácticas
La página en React se componetiso para tener más claro que sección está creando cada parte del proyecto.
Se usó tecnologías como Tailwind CSS para el uso de estilos en el fron-end
El backend tiene un framework de NodeJs llamado Express, el cual genera una mejora en el manejo de las urls y los servicios, además de dar seguridad al proyecto
Con el docker-compose, se depliega el proyecto en producción de forma facil y eficiente y con los scripts de powershell en modo desarrollador