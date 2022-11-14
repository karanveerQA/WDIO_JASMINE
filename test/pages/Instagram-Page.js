class InstagramPage {
  openInstagram() {
    return browser.url("https://www.instagram.com/");
  }

  get emailInput() {
    return $('input[aria-label^="Phone number"]');
  }

  get passwordInput() {
    return $('input[aria-label="Password"]');
  }

  get loginBtn() {
    return $('button[type="submit"]');
  }

  get NotNowBtn() {
    return $("//button[text()='Not Now']");
  }

  get profileImage() {
    return $(`img[alt="thakurr1234r444's profile picture"]`);
  }

  get searchInput() {
    return $('input[aria-label="Search input"]');
  }

  get usernameDiv() {
    return $('//div[text()="karanveersingh_thakur"]');
  }

  get followBtn() {
    return $('//div[text()="Follow"]');
  }

  get usernameh2() {
    return $('//h2[text()="karanveersingh_thakur"]');
  }

  get ProfileBtn() {
    return $('svg[aria-label="Following"]');
  }

  get unfollowBtn() {
    return $('button[tabindex="0"]');
  }

  get followBtnText() {
    return this.followBtn.$("div>div").getText();
  }

  get chatBtn() {
    return $('a[aria-label^="Direct messaging"]');
  }

  async loginToInstagram() {
    await this.openInstagram();
    await this.emailInput.setValue("thakurr1234r444");
    await this.passwordInput.setValue("Shinchan@125");
    await this.loginBtn.click();
    await (await this.NotNowBtn).click();
    await (await this.NotNowBtn).click();
    await expect(this.profileImage).toBeDisplayed();
  }
}

export default new InstagramPage();
