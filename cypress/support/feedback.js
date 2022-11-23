/// <reference types="cypress" />
import env from "../../configs/env-dev.config.json";
import CommonKeyword from "../../integration/keyword/CommonKeyword";
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