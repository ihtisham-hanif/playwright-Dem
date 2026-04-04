import { test, expect } from '@playwright/test';
import{loginPage,Homepage } from '../pages/loginpage';
//import {Homepage} from '../pages/Homepage';

test('test', async ({ page }) => {

//login usepage object class
const login= new loginPage(page)
await login.gotoLoginPage();
await login.loginn('shamkhansham','shamkhansham')

//home
 const home= new Homepage(page)
 await home.AddProductTocart('ac')


});