/// <reference types="cypress" />
import CommonKeyword from '../cypress/home-page/commonKeyword'

class OnlineBankingPage {
  expectCorrectUrl() {
    CommonKeyword.verifyContainRedirectUrl('http://zero.webappsecurity.com/online-banking.html');
  }

  expectContainPageTitle() {
    CommonKeyword.verifyElementContainText(
      "",
      "Zero Bank"
    );
    CommonKeyword.verifyElementContainText(
      '',
      "List of all proposals"
    );
  }
}

export default OnlineBankingPage;