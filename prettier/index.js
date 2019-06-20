const Grenerator = require("yeoman-generator");

module.exports = class extends Grenerator {
  prettierConfig() {
    this.fs.copyTpl(
      this.templatePath(".prettierignore"),
      this.destinationPath(".prettierignore")
    );

    this.fs.copyTpl(
      this.templatePath(".prettierrc"),
      this.destinationPath(".prettierrc")
    );

    this.npmInstall(["prettier"], {
      "save-dev": true
    });
  }
};
