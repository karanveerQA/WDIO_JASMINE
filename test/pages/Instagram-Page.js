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
  async loginToInstagram() {
    await this.openInstagram();
    await this.emailInput.setValue("thakurr1234r444");
    await this.passwordInput.setValue("Shinchan@125");
    await this.loginBtn.click();
    await this.NotNowBtn.click();
    await (await this.NotNowBtn).click();
    await expect(this.profileImage).toBeDisplayed();
  }
}

export default new InstagramPage();
