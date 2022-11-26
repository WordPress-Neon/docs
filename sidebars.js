module.exports = {
  sidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        {
          type: 'autogenerated',
          dirName: 'getting-started'
        },
      ],
    },
    {
      type:'category',
      label:'WPN Plugins',
      items:[{type:'autogenerated', dirName: 'plugins'}]
    },
    {
      type:'category',
      label:'AJAX',
      items:[{type:'autogenerated', dirName: 'ajax'}]
    },
    {
      type:'category',
      label:'REST API',
      items:[{type:'autogenerated', dirName: 'rest-api'}]
    },
    'using-docker'
  ],
};