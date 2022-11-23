/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import FeedbackPage from "../../../e2e/support/feedback";
import HomePage from "../../support/home-page";
import OnlineBankingPage from "../../support/online-banking";

let homePage = new HomePage();
let onlineBankingPage = new OnlineBankingPage();
let feedbackPage = new FeedbackPage()

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
    onlineBankingPage.expectContainPageTitle()
})
When("User select feedback menu", () => {
     homePage.chooseFeedback()
     feedbackPage.expectCorrectUrl()
})
Then("The system able to show feedback page", () => {

})