# Portafolio — Josué Martínez

Sitio personal hecho con **React 18 + Ant Design 6 + Vite**. Se publica en
GitHub Pages desde la carpeta `/docs` del repositorio.

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # servidor local en http://localhost:5173
npm run lint     # revisar el código
npm run build    # generar el sitio en ../docs (lo que publica GitHub Pages)
```

## Cómo agregar un proyecto

Edita **`src/data/projects.js`** y agrega un objeto al arreglo:

```js
{
  title: 'Mi proyecto',
  description: 'Qué hace y qué problema resuelve.',
  year: '2026',
  tags: ['React', 'Node.js'],     // tecnologías usadas
  image: '/projects/mi-proyecto.png', // opcional, en public/projects/
  demo: 'https://...',            // opcional
  repo: 'https://github.com/...', // opcional
  featured: true,                 // opcional: tarjeta grande
}
```

Tu información personal (nombre, bio, enlaces, experiencia) está en
**`src/data/profile.js`**. No hace falta tocar componentes para cambiar contenido.

## Estructura

```
src/
├── data/            Contenido (proyectos, perfil, experiencia)
├── config/          Configuración de navegación/secciones
├── theme/           Tokens de antd, proveedor de tema claro/oscuro
├── hooks/           Lógica reutilizable (tema, scroll, in-view, portapapeles…)
├── utils/           Funciones puras (storage seguro, iniciales)
├── components/
│   ├── common/      Piezas genéricas: Section, Container, Reveal, TagList…
│   ├── layout/      AppHeader, AppFooter, ThemeToggle
│   ├── projects/    ProjectCard, ProjectCover, ProjectGrid
│   └── experience/  ExperienceItem
├── sections/        Secciones de la página que componen las piezas anteriores
└── App.jsx          Ensambla el layout y las secciones
```

### Principios aplicados

- **Responsabilidad única:** cada componente hace una sola cosa (p. ej.
  `ProjectCover` solo pinta la portada; `useThemeMode` solo maneja el tema).
- **Abierto/cerrado:** agregar proyectos, enlaces o secciones es editar datos,
  no modificar componentes.
- **Inversión de dependencias:** los componentes reciben datos por props;
  solo las `sections/` conocen la capa de datos.
- **Reutilización:** `Section`, `Reveal`, `TagList`, `ExpandableList` y
  `ExternalLink` sirven en cualquier parte del sitio.
- **Un solo origen de estilo:** los colores salen de los tokens de antd y se
  exponen como variables CSS (`theme/CssVariables.jsx`) para los CSS Modules.
