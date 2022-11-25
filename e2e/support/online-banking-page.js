/// <reference types="cypress" />
import CommonKeyword from '../cypress/home-page/commonKeyword'

class OnlineBankingPage {
  expectCorrectUrl() {
    CommonKeyword.verifyContainRedirectUrl('online-banking.html','http://zero.webappsecurity.com/online-banking.html');
  }

  expectContainPageTitle() {
    CommonKeyword.verifyElementText(
      "h1",
      "Online Banking"
    );
  }
}

export default OnlineBankingPage;