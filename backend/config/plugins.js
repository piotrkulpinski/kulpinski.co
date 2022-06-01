module.exports = ({ env }) => ({
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

  sentry: {
    enabled: true,

    config: {
      dsn: env('SENTRY_DSN'),
    },
  },
});
