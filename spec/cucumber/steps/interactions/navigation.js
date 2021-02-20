import { Given, When, Then } from 'cucumber';

const SERVER_PORT_TEST=8200
const SERVER_HOST_TEST=localhost

When(/^user navigates to ([\w-_\/?=:#]+)$/, function (location) {
    return this.driver.get(`http://${SERVER_HOST_TEST}:${SERVER_PORT_TEST}${location}`);
});
