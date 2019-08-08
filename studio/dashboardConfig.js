export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d4c52a68186effe8ae13cf0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-8ay2gh4z',
                  apiId: 'a2b58147-8067-4377-b9b3-f931b161e56c'
                },
                {
                  buildHookId: '5d4c52a6ef95d1dca10575fc',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-dkgzozaz',
                  apiId: '55c62ad7-cb08-4c4b-b08d-bc3ce64aed9d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nik-lampe/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-dkgzozaz.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
