import { writeFile } from 'fs/promises';
import path from 'path';

import { EXPERIENCE_BUILDER, LOCAL_DIRECTORIES } from './config.mjs';

(async () => {
  // Export index page to build directory
  await writeFile(
    path.join(
      EXPERIENCE_BUILDER.DIRECTORY,
      'client',
      'webpack',
      'widget-webpack-override.js',
    ),
    `
  const path = require('path');

  module.exports = function (webpackConfig) {
    /**
     * If you need to change the widget webpack config, you can change the webpack config here and return the changed config.
     *
     */
    webpackConfig.resolve.alias['lit-components'] = path.resolve(
      __dirname,
      '../../../${LOCAL_DIRECTORIES.LIT}',
    );

    return webpackConfig;
  };
    `,
  );
})();
