# Guía de Contribución

## Pasos para contribuir

### 1. Clonar el repositorio

```bash
git clone https://github.com/usuario/aprendiendo-a-los-palazos.git
cd aprendiendo-a-los-palazos
```

### 2. Crear rama de trabajo (opcional)

```bash
git checkout -b tu-nombre/semana-01
```

### 3. Crear tu carpeta personal en la semana

```bash
mkdir semana-01/tu-nombre
```

### 4. Agregar ejercicios y notas

```
semana-01/tu-nombre/
├── ejercicios/
│   └── ej1_solucion.py
└── notas.md
```

### 5. Hacer commit

```bash
git add .
git commit -m "feat: semana-01 ejercicios y notas"
```

### 6. Push

```bash
git push origin main
# O tu rama
git push origin tu-nombre/semana-01
```

## Convenciones de Commit

- `feat:` - Nueva funcionalidad/ejercicio
- `docs:` - Cambios en documentación
- `fix:` - Corrección de errores

Ejemplo:

```bash
git commit -m "feat: semana-01 - ejercicios variables y tipos"
git commit -m "docs: agregar notas semana-02"
```

## Buenas prácticas

✅ Sube código limpio y comentado  
✅ Incluye un README.md en tu carpeta explicando qué hiciste  
✅ Organiza los ejercicios numerados (ej1, ej2, ej3...)  
✅ Comparte recursos útiles en notas.md  
✅ Haz push regularmente para compartir tu progreso

❌ No subas archivos basura o temporales  
❌ No sobrescribas el trabajo de otros  
❌ Respeta la estructura del proyecto
