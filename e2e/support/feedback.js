/// <reference types="cypress" />
import CommonKeyword from '../cypress/home-page/commonKeyword'

class FeedbackPage {
  expectCorrectUrl() {
    CommonKeyword.verifyContainRedirectUrl('http://zero.webappsecurity.com/index.html');
  }

  expectContainPageTitle() {
    CommonKeyword.verifyElementContainText(
      "",
      ""
    );
  }
  chooseOnlineBanking() {
    CommonKeyword.verifyElementIsVisible('');
    CommonKeyword.clickText();
  }
}

export default FeedbackPage;