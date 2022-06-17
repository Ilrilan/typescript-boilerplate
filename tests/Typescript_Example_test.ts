import { homePage, loginPage } from '../fixtures'

Feature('Typescript Example');

Scenario('test something', async () => {
  homePage.goToHome()
  console.log(`opened home`)
  loginPage.testMethod('Login Page')
  await loginPage.link()
});
