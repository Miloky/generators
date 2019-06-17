const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  installWebpackNpmDependencies() {
    let isPkgJsonExist;
    try {
      isPkgJsonExist = this.fs.exists('package.json');
    } catch (e) {
      isPkgJsonExist = false;
      console.log(e);
    }

    if (!isPkgJsonExist) {
      console.log(
        "package.json wasn't found or was empty. Please create package.json"
      );
      return;
    }

    this.npmInstall(
      [
        'webpack',
        'webpack-cli',
        'webpack-dev-server',
        'webpackbar',
        'clean-webpack-plugin',
        'html-webpack-plugin',
        'babel-loader',
        '@babel/core',
        '@babel/preset-env',
        'typescript',
        'ts-loader'
      ],
      {
        'save-dev': true
      }
    );
  }
};
