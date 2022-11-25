/// <reference types="cypress" />
import CommonKeyword from '../cypress/home-page/commonKeyword'

class FeedbackPage {
  expectCorrectUrl() {
    CommonKeyword.verifyContainRedirectUrl('feedback.html','http://zero.webappsecurity.com/feedback.html');
  }

  expectContainPageTitle() {
    CommonKeyword.verifyElementContainText(
      "#feedback-title",
      "Feedback"
    );
  }
  chooseOnlineBanking() {
    CommonKeyword.verifyElementIsVisible('');
    CommonKeyword.clickText();
  }
}

export default FeedbackPage;