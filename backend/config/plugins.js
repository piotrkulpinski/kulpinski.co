module.exports = {
  menus: {
    config: {
      layouts: {
        menuItem: { // This is the menu item edit panel.
          link: [ // This is the "link" tab in the menu item edit panel.
            {
              input: {
                label: 'Custom Field Label',
                name: 'custom_field',
                type: 'text',
              },
              grid: {
                col: 6,
              },
            },
          ],
        },
      },
    },
  },
};
