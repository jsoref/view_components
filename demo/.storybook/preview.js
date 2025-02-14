import '@primer/css/dist/primer.css'
import '../app/assets/stylesheets/primer_view_components.css'

const isProd = process.env.NODE_ENV == 'production';

const serverHost = isProd ? `https://view-components-storybook.eastus.cloudapp.azure.com` : 'http://localhost:4000';

export const parameters = {
  server: {
    url: `${serverHost}/rails/stories`,
  },
  options: {
    storySort: {
      method: 'alphabetical',
    }
  }
};
