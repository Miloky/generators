const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  generateEditorConfig() {
    this.fs.copyTpl(
      this.templatePath(".editorconfig"),
      this.destinationPath(".editorconfig")
    );
  }
};
