# EcoTrack Backend

## Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Crear archivo .env basado en .env.example

3. Ejecutar en desarrollo:
```bash
npm run dev
```

## Endpoints

### Auth
- POST /api/auth/register
- POST /api/auth/login

### Waste
- POST /api/waste/records
- GET /api/waste/records
- GET /api/waste/stats
- GET /api/waste/categories

### Tips
- GET /api/tips
- GET /api/tips/random
