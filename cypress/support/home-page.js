/// <reference types="cypress" />
import env from "../../configs/env-dev.config.json";
import CommonKeyword from "../../integration/keyword/CommonKeyword";
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
}

export default HomePage;
