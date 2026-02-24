import { defineConfig } from 'vitepress'
import { configureDiagramsPlugin } from 'vitepress-plugin-diagrams'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/os2skole-PoC/',
  title: "OS2Skole",
  description: "Architecture, Design and Technical Decisions regarding the OS2Skole project",
  rewrites: {
    '{-:path}*/README.md': '{-:path}*/index.md'
  },
  markdown: {
    config: (md) => {
      configureDiagramsPlugin(md, {
        diagramsDir: "public/diagrams",
        publicPath: "/os2skole-PoC/diagrams",
        krokiServerUrl: "https://kroki.io",
      });
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    sidebar: [
      {
        text: 'Top Level Design',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/top_level_design/' },
          { text: 'Architecture', link: '/top_level_design/architecture.md' },
          { text: 'Architecture Communication Canvas', link: '/top_level_design/architecture_communication_canvas.md' },
          { text: 'System Landscape', link: '/top_level_design/system_landscape.md' },
          { text: 'Solution Landscape', link: '/top_level_design/solution_landscape.md' },
          { text: 'Rammearkitektur Læringsplatform', link: '/top_level_design/rammearkitektur_læringsplatform.md' },
          { 
            text: 'FDA Perspective',
            collapsed: true,
            items: [
              { text: 'Arkitektur Compliance', link: '/top_level_design/fda_perspective/arkitektur_compliance.md' },
              { text: 'FDA Arkitekturproduktreol', link: '/top_level_design/fda_perspective/FDAarkitekturproduktreol.md' }
            ]
          },
          { 
            text: 'External Supplier Perspective',
            collapsed: true,
            items: [
              { text: 'Executive Summary', link: '/top_level_design/external_supplier_perspective/externalsuppliers_executive_summary.md' }
            ]
          }
        ]
      },
      {
        text: 'Quality & Requirements',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/quality_and_requirements/' },
          { text: 'Initial Envisioning NFR', link: '/quality_and_requirements/initial_envisioning_nfr.md' },
          { text: 'Accessibility', link: '/quality_and_requirements/accessibility/' },
          { text: 'Composability', link: '/quality_and_requirements/composability/' },
          { text: 'Ease of Use', link: '/quality_and_requirements/ease_of_use/' },
          { text: 'Operability', link: '/quality_and_requirements/operability/' },
          { text: 'Security', link: '/quality_and_requirements/security/' }
        ]
      },
      {
        text: 'Managing Risk',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/managing_risk/' },
          { 
            text: 'Delivery',
            collapsed: true,
            items: [
              { text: 'Pipeline Diagram', link: '/managing_risk/delivery/pipeline_diagram.md' }
            ]
          },
          { 
            text: 'IAM',
            collapsed: true,
            items: [
              { text: 'Epics and User Stories', link: '/managing_risk/iam/epics_and_user_stories.md' },
              { text: 'System Context C4', link: '/managing_risk/iam/system_context_c4.md' }
            ]
          }
        ]
      },
      {
        text: 'People & Processes',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/people_and_processes/' },
          { text: 'Iterative Development', link: '/people_and_processes/iterative_development.md' },
          { text: 'Udviklings Manual (DK)', link: '/people_and_processes/udviklings_manual_dk.md' }
        ]
      },
      {
        text: 'Component Development',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/component_development/' },
          { text: 'IAM', link: '/component_development/iam/' }
        ]
      },
      {
        text: 'Global Decisions',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/global_decisions/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
