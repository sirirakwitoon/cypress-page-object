/// <reference types="cypress" />
import CommonKeyword from '../cypress/home-page/commonKeyword'

class HomePage {
  expectCorrectUrl() {
    CommonKeyword.verifyContainRedirectUrl('http://zero.webappsecurity.com/index.html');
  }

  expectContainPageTitle() {
    CommonKeyword.verifyElementContainText(
      "",
      "Zero Bank"
    );
  }
  chooseOnlineBanking() {
    CommonKeyword.verifyElementIsVisible('');
    CommonKeyword.clickText();
  }
  chooseFeedback() {
    CommonKeyword.verifyElementIsVisible('');
    CommonKeyword.clickText();
  }
}

export default HomePage;
