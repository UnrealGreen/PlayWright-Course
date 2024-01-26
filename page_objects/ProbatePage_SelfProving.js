export class ProbatePage_SelfProving{
    constructor(page) {
        this.page=page

    }
    vistAndLogIn = async () => {
        
        await this.page.goto('https://olis-az-testprobate-efile.azurewebsites.net/Account/RecurringParties');
        await this.page.getByRole('link', { name: 'Log In' }).click();
        await this.page.locator('input[type="text"]').click();
        await this.page.locator('input[type="text"]').fill('kgreen@i3verticals.com');
        await this.page.locator('input[type="text"]').press('Tab');
        await this.page.locator('input[type="password"]').fill('123');
        await this.page.locator('input[type="password"]').press('Enter');
    }

}