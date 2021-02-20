import { Given, When, Then } from 'cucumber';
import { By } from 'selenium-webdriver';

//When('user types in {string} in the {string} element', async function (text, selector) {
When(/^user types in (?:"|')(.+)(?:"|') in the (?:"|')([\.#\w]+)(?:"|') element$/, async function (text, selector) {
    this.element = await this.driver.findElement(By.css(selector));
    return this.element.sendKeys(text);
});
