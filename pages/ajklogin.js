/*export class Ajklogin{
    constructor(page){
        this.page=page;
        this.usernamee='#login'
        this.passworde='#password'
        this.login='//button[normalize-space()="Login"]'
    }
    async gotologinpage(){
        await this.page.goto('https://bas.ajk.gov.pk/login');

    }
    async welcome(username,password){
        await this.page.fill(this.usernamee,username);
        await this.page.fill(this.passworde,password);
        await this.page.click(this.login);
    }
}*/

export class AjkLogin {
    constructor(page) {
        this.page = page;
        this.usernamee = '#login';
        this.passworde = '#password';
        this.login = '//button[normalize-space()="Login"]'
        this.searche='#ai_query'
        //this.clickb='#submit'
    }

    async gotoLoginPage() {
        await this.page.goto('https://bas.ajk.gov.pk/login');
    }

    async logee(username, password,search) {
        await this.page.fill(this.usernamee, username);
        await this.page.fill(this.passworde, password);
        await this.page.click(this.login);
       await this.page.fill(this.searche='#ai_query',search) 
       await this.page.waitForTimeout(10000); // 3 seconds
       await this.page.getByRole('link', { name: 'ihtisham' }).click()
    }
}