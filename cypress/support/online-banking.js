/// <reference types="cypress" />
import env from "../../configs/env-dev.config.json";
import CommonKeyword from "../../integration/keyword/CommonKeyword";
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