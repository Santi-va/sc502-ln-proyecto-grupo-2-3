# Parkeate

## Docker, PHP y MySQL

El entorno base está listo para iniciarse con:

```bash
docker compose up --build
```

La aplicación quedará en `http://localhost:8080` y MySQL estará disponible en el puerto `3307`. El esquema inicial vive en `database/schema.sql`; los endpoints PHP se implementan en `api/public/index.php`.

> Las contraseñas de `docker-compose.yml` son solo para desarrollo. Use variables de entorno o secretos fuera de local.
