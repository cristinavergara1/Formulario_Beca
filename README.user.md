# Formulario_Beca

## Endpoint de prueba (laboratorio)

Este proyecto expone un endpoint HTTP simple para verificar que la app está corriendo.

- URL: `http://localhost:3000/api/mensaje`
- Método: `GET`
- Respuesta: JSON con un mensaje

Ejemplo (PowerShell):

```powershell
Invoke-RestMethod http://localhost:3000/api/mensaje
```

Ejemplo (curl):

```bash
curl http://localhost:3000/api/mensaje
```

## Ejecutar con Docker

Esto evita problemas de versión de Node (este proyecto usa `next@16`, que requiere Node >= 20.9).

Construir imagen:

```bash
docker build -t formulario-beca .
```

Ejecutar contenedor:

```bash
docker run --rm -p 3000:3000 formulario-beca
```

Probar endpoint:

```bash
curl http://localhost:3000/api/mensaje
```