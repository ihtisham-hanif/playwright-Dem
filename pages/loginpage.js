export class loginPage 
{
constructor(page){

    this.page=page;
    this.loignlink='#login2';
    this.usernameinput='#loginusername';
    this .passwordinput='#loginpassword';
    this.loginButton =page.getByRole('button', { name: 'Log in' });


}
async gotoLoginPage(){
    await this.page.goto('https://www.demoblaze.com/');

}
async loginn(username, password){

await this.page.click(this.loignlink);
await this.page.waitForSelector(this.usernameinput);
await this.page.fill(this.usernameinput,username);
await this.page.fill(this.passwordinput,password);
}
}
/*export class loginPage {
  constructor(page) {
    this.page = page;
    this.loginLink = '#login2';
    this.usernameInput = '#loginusername';
    this.passwordInput = '#loginpassword';
    this.loginButton = page.getByRole('button', { name: 'Log in' });
  }

  async gotoLoginPage() {
    await this.page.goto('https://www.demoblaze.com/');
  }

  async loginn(username, password) {
    await this.page.click(this.loginLink);

    // wait for modal
    await this.page.waitForSelector(this.usernameInput);

    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);

    // direct click (NO locator again)
    await this.loginButton.click();
  }
}*/
