/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import FeedbackPage from "../../support/feedback-page";
import HomePage from "../../support/home-page";
import OnlineBankingPage from "../../support/online-banking-page";

let homePage = new HomePage();
let onlineBankingPage = new OnlineBankingPage();
let feedbackPage = new FeedbackPage()

Given("User open website", () => {
    homePage.visitToWebsite();
    homePage.expectCorrectUrl();
})
Then("The system able to show the home page", () => {
    homePage.expectContainPageTitle('')
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
    feedbackPage.expectContainPageTitle()
})