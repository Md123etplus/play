exports.LoginPage=
class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = '#user-name';
    this.passwordField = '#password';
    this.loginButton = '#login-button';
  }

  async goToLoginPage(){
    await this.page.goto('https://www.saucedemo.com/');
  }
  async login(usename,password){
    await this.page.locator(this.usernameField).fill(usename);
    await this.page.locator(this.passwordField).fill(password);
    await this.page.locator(this.loginButton).click();
  }
}