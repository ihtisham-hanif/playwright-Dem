import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginpage';
import { Homepage } from '../pages/Homepage';

test('Add product to cart', async ({ page }) => {

    // // login
    // const login = new loginPage(page);
    // await login.gotoLoginPage();
    // await login.loginn('shamkhansham', 'shamkhansham');

    // home
    const home = new Homepage(page);

    // exact product name (must match UI)
    await home.AddProductTocart('Samsung galaxy s6');
});