/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../support/home-page";
import OnlineBankingPage from "../../support/online-banking";

let homePage = new HomePage();
let onlineBankingPage = new OnlineBankingPage();

Given("User open website", () => {
    homePage.expectCorrectUrl();
})
Then("The system able to show the home page", () => {
    homePage.expectContainPageTitle('Zero Bank')
})
When("User select online banking menu", () => {
    homePage.chooseOnlineBanking()
    onlineBankingPage.expectCorrectUrl()
})
Then("The system able to show online banking page", () => {

})
When("User select feedback menu", () => {

})
Then("The system able to show feedback page", () => {

})