import { After, Before } from 'cucumber';
import webdriver from 'selenium-webdriver';


import '@babel/polyfill';
import assert from 'assert';
import { Given, When, Then } from 'cucumber';
import { By } from 'selenium-webdriver';

Before(function () {
    this.driver = new webdriver.Builder()
    //.forBrowser("chrome")
    .forBrowser("firefox")
    .build();
    return this.driver;
});




const SERVER_PORT_TEST='8200'
const SERVER_HOST_TEST='localhost'

When(/^user navigates to ([\w-_\/?=:#]+)$/, function (location) {
    return this.driver.get(`http://${SERVER_HOST_TEST}:${SERVER_PORT_TEST}${location}`);
});



//When('user types in {string} in the {string} element', async function (text, selector) {
When(/^user types in (?:"|')(.+)(?:"|') in the (?:"|')([\.#\w]+)(?:"|') element$/, async function (text, selector) {
    this.driver.get(`http://localhost:8200`)
    .then(function() {
        return this.driver.wait(until.elementLocated(By.name(selector)), 1)
        .then(function(){
            this.driver.sleep(1)
            .then(function(){
                        return this.driver.findElement(By.name(selector)).sendKeys(text);
                    })
        })
    });
    //return this.element.sendKeys(text);
});


Then(/^the (?:"|')([\.#\w-]+)(?:"|') element should have a (?:"|')([\w_-]+)(?:"|') attribute$/, async function (selector, attributeName) {
    const element = await this.driver.findElement(By.name(selector));
    const attributeValue = await element.getAttribute(attributeName);

    assert.equal(attributeValue, 'true');
});

After(function () {
    this.driver.quit();
});


