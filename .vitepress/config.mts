import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OS2Skole",
  description: "Architecture, Design and Technical Decisions regarding the OS2Skole project",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Top Level Design', link: '/top_level_design/README.md' },
      { text: 'Quality & Requirements', link: '/quality_and_requirements/README.md' },
      { text: 'Managing Risk', link: '/managing_risk/README.md' },
      { text: 'People & Processes', link: '/people_and_processes/README.md' },
      { text: 'Component Development', link: '/component_development/README.md' },
      { text: 'Global Decisions', link: '/global_decisions/README.md' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'README', link: '/README.md' },
          { text: 'SUPPORT', link: '/SUPPORT.md' }
        ]
      },
      {
        text: 'Top Level Design',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/top_level_design/README.md' },
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
          { text: 'Overview', link: '/quality_and_requirements/README.md' },
          { text: 'Initial Envisioning NFR', link: '/quality_and_requirements/initial_envisioning_nfr.md' },
          { text: 'Accessibility', link: '/quality_and_requirements/accessibility/README.md' },
          { text: 'Composability', link: '/quality_and_requirements/composability/README.md' },
          { text: 'Ease of Use', link: '/quality_and_requirements/ease_of_use/README.md' },
          { text: 'Operability', link: '/quality_and_requirements/operability/README.md' },
          { text: 'Security', link: '/quality_and_requirements/security/README.md' }
        ]
      },
      {
        text: 'Managing Risk',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/managing_risk/README.md' },
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
          { text: 'Overview', link: '/people_and_processes/README.md' },
          { text: 'Iterative Development', link: '/people_and_processes/iterative_development.md' },
          { text: 'Udviklings Manual (DK)', link: '/people_and_processes/udviklings_manual_dk.md' }
        ]
      },
      {
        text: 'Component Development',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/component_development/README.md' },
          { text: 'IAM', link: '/component_development/iam/README.md' }
        ]
      },
      {
        text: 'Global Decisions',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/global_decisions/README.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
