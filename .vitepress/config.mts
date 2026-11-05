import { defineConfig } from 'vitepress'

// GitHub Pages publica los repositorios de proyecto en /nombre-del-repo/.
// En local usamos /; en GitHub Actions detectamos el repo automaticamente.
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = repo && !repo.endsWith('.github.io') ? `/${repo}/` : '/'

export default defineConfig({
  title: 'Trading Bot · Wiki',
  description: 'Wiki del proyecto de trading algorítmico: investigación, arquitectura y roadmap',
  lang: 'es-CL',
  base,
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'Trading Bot',
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Documentación', link: '/README' },
      { text: 'Roadmap', link: '/roadmap/README' },
      { text: 'Decisiones', link: '/decisiones/README' },
      { text: 'Experimentos', link: '/experimentos/README' }
    ],
    sidebar: [
      {
        text: 'Introducción',
        collapsed: false,
        items: [
          { text: 'Índice general', link: '/README' },
          { text: 'Visión y objetivos', link: '/docs/01-vision-objetivos' },
          { text: 'Viabilidad', link: '/docs/02-viabilidad' }
        ]
      },
      {
        text: 'Investigación financiera',
        collapsed: false,
        items: [
          { text: 'Mercados', link: '/docs/03-mercados' },
          { text: 'Plataformas', link: '/docs/04-plataformas' },
          { text: 'Estrategias', link: '/docs/05-estrategias' },
          { text: 'Plan de inversión', link: '/docs/06-plan-inversion' },
          { text: 'Backtesting', link: '/docs/10-backtesting' },
          { text: 'Paper trading', link: '/docs/11-paper-trading' }
        ]
      },
      {
        text: 'Tecnología y desarrollo',
        collapsed: false,
        items: [
          { text: 'Evaluación de tecnologías', link: '/docs/07-evaluacion-tecnologias' },
          { text: 'Arquitectura', link: '/docs/08-arquitectura' },
          { text: 'Desarrollo', link: '/docs/09-desarrollo' },
          { text: 'Dashboard', link: '/docs/12-dashboard' },
          { text: 'Diagramas', link: '/arquitectura/diagramas' }
        ]
      },
      {
        text: 'Operación y costos',
        collapsed: true,
        items: [
          { text: 'Infraestructura', link: '/docs/13-infraestructura' },
          { text: 'Seguridad', link: '/docs/14-seguridad' },
          { text: 'Impuestos en Chile', link: '/docs/15-impuestos-chile' },
          { text: 'Presupuesto', link: '/docs/16-presupuesto' },
          { text: 'Mejoras futuras', link: '/docs/17-mejoras-futuras' }
        ]
      },
      {
        text: 'Plan de trabajo',
        collapsed: false,
        items: [
          { text: 'Roadmap', link: '/roadmap/README' },
          { text: 'Cronograma general', link: '/roadmap/cronograma-general' },
          { text: 'Semana 1', link: '/roadmap/semana-01' },
          { text: 'Semana 2', link: '/roadmap/semana-02' },
          { text: 'Semana 3', link: '/roadmap/semana-03' },
          { text: 'Semana 4', link: '/roadmap/semana-04' }
        ]
      },
      {
        text: 'Seguimiento y recursos',
        collapsed: true,
        items: [
          { text: 'Decisiones ADR', link: '/decisiones/README' },
          { text: 'Experimentos', link: '/experimentos/README' },
          { text: 'Reportes', link: '/reportes/README' },
          { text: 'Glosario', link: '/docs/glosario' },
          { text: 'Cómo publicar la wiki', link: '/GUIA-PUBLICACION' }
        ]
      }
    ],
    search: {
      provider: 'local',
      options: { locales: { es: { translations: {
        button: { buttonText: 'Buscar', buttonAriaLabel: 'Buscar' },
        modal: {
          noResultsText: 'Sin resultados',
          resetButtonTitle: 'Restablecer búsqueda',
          footer: { selectText: 'Seleccionar', navigateText: 'Navegar', closeText: 'Cerrar' }
        }
      } } } }
    },
    outline: { level: [2, 3], label: 'En esta página' },
    docFooter: { prev: 'Anterior', next: 'Siguiente' },
    lastUpdated: { text: 'Última actualización' },
    footer: { message: 'Documentación técnica y educativa. No garantiza rentabilidad.' }
  }
})
