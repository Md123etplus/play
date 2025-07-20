import { LoginPage } from "../pages/loginPage";
import { test, expect } from '@playwright/test';
import { InventoryPage } from "../pages/inventoryPage";
import { CartPage } from "../pages/cartPage";

test('Test', async ({ page }) => {
    //Login
    const loginPage= new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');
    await page.waitForTimeout(3000);
    //Homepage
    const inventoryPage= new InventoryPage(page);
    await inventoryPage.goToInventoryPage();
    await inventoryPage.addProductToCart('Sauce Labs Backpack');//Sauce Labs Bike Light
    // await page.waitForTimeout(2000);
    await inventoryPage.goToCart();
    // await page.waitForTimeout(3000);

    //Cart
    const cartPage = new CartPage(page);
    await cartPage.goToCartPage();
    await cartPage.proceedToCheckout();
    await cartPage.enterCheckoutInformation('John', 'Doe', '12345');
    await cartPage.completePurchase();
    // await page.waitForTimeout(3000);
    await cartPage.backHome();
    // await page.waitForTimeout(2000);
})









// test.describe('Login Tests', () => {
//   let loginPage;

//   test.beforeEach(async ({ page }) => {
//     loginPage = new LoginPage(page);
//     await loginPage.goToLoginPage();
//   });

//   test('Successful login with valid credentials', async () => {
//     await loginPage.login('standard_user', 'secret_sauce');
//     await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
//   });

//   test('Unsuccessful login with invalid credentials', async () => {
//     await loginPage.login('invalid_user', 'invalid_password');
//     const errorMessage = await page.locator('.error-message-container').textContent();
//     expect(errorMessage).toContain('Username and password do not match any user in this service');
//   });

//   test('Unsuccessful login with empty fields', async () => {
//     await loginPage.login('', '');
//     const errorMessage = await page.locator('.error-message-container').textContent();
//     expect(errorMessage).toContain('Username is required');
//   });
// });