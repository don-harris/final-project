
Feature('html');

Scenario('test something', (I) => {
    I.amOnPage("/");
    I.see("Spoken,");
});
