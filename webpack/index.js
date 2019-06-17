const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  generateWebpackConfig() {
    this.fs.copyTpl(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );
  }
};
