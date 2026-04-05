
/*import { test,expect } from "@playwright/test";
import{Ajklogin} from '../pages/loginpage';

test('testabc', async ({ page }) => {

const tom =new Ajklogin(page)
await tom.gotologinpage();
await tom.welcome('superadmin@gmail.com','AcmRad@2026@AJK!')

})*/

import { test, expect } from "@playwright/test";
import { AjkLogin } from "../pages/ajklogin";
import { asyncWrapProviders } from "async_hooks";

test('testabc', async ({ page }) => {
    const tom = new AjkLogin(page);   // ✅ same class name
    await tom.gotoLoginPage();
    await tom.logee('superadmin@gmail.com','AcmRad@2026@AJK!','ihtisham');

});

