/// <reference types="cypress" />
import CommonKeyword from '../cypress/home-page/commonKeyword'

class HomePage {
  visitToWebsite() {
    CommonKeyword.visitToWebsite('http://zero.webappsecurity.com/index.html');
  }
  
  expectCorrectUrl() {
    CommonKeyword.verifyContainRedirectUrl("index.html",'http://zero.webappsecurity.com/index.html');
  }

  expectContainPageTitle() {
    CommonKeyword.verifyElementContainText(
      ".brand",
      "Zero Bank"
    );
  }
  chooseOnlineBanking() {
    CommonKeyword.click('#onlineBankingMenu')
  }
  chooseFeedback() {
    CommonKeyword.click('#feedback');
  }
}

export default HomePage;
