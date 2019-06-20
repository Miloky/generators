const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  generateESLint() {
    //TODO: Ask about prettier
    //TODO: Ask about vscode

    this.npmInstall(
      ["eslint-plugin-prettier", "eslint-config-prettier", "eslint"],
      {
        "save-dev": true
      }
    );

    this.fs.copyTpl(
      this.templatePath(".eslintrc.json"),
      this.destinationPath(".eslintrc.json")
    );

    this.fs.copyTpl(
        this.templatePath(".eslintignore"),
        this.destinationPath(".eslintignore")
      );
  }
};
