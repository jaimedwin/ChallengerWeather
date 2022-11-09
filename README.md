# ChallengerWeather

Nombre: Jaime Edwin Arciniegas García

Celular: (+57) 322-2709293

Email: (jaimedwin@gmail.com)[jaimedwin@gmail.com]

## Información general

Este reto se compone de dos carpetas

* ApiWeather: Contiene una API Restfull desarrollado en c# usando web api y mvc e implementa el ASP .Net (con .Net Framework 4.8), el proyecto fue realizado en el IDE de Visual Basic 2022 y Windows 11, la conexión  a la base de datos se realizó con el ORM de Entity Framework. La Api incluye un módulo de auth token jwt.

* AngularWeather: Este proyecto se realizó con la versión de angular 14 y se conecta a la API Restful(carpeta ApiWeather) y el IDE de Visual Studio Code, como framework de frontend se desarrolló con Bootstrap 5.

## Ejecusio y Test

### Paso 1: Ejecutar el proyecto de la API Restfull

Para ejecutar la API se debe ingresar al directorio ApiWeather y abrir el proyecto dando doble clic en el archivo ApiWeather.sln

### Paso 2: Ejecutar el FrontEnd

Para ejecutar el FrontEnd y consumir la API ingrese dentro de la AngularWeather y ejecute la terminal el comando:

```bash
ng serve
```
para compilar el SPA usé el comando

```bash
ng build
```

### Nota: 
Al ejecutar la api se carga la plantilla de documentación con la información de los endpoins de la Api.

## Consideraciones

En este proyecto se desarrolló los requisitos establecidos en el documento guía. Este proyecto no está contenerizado y se ejecuta en local.