import InstagramPage from "./../pages/Instagram-Page";
import ChatPage from "./../pages/Chat-Page";
describe("Instagram", () => {
  it("should login the user with the given credentials", async () => {
    await InstagramPage.loginToInstagram();
  });

  it("should send request to given user", async () => {
    await browser.setWindowSize(631, 577);
    await InstagramPage.searchInput.setValue("karanveersingh_thakur");
    await InstagramPage.usernameDiv.click();
    await expect(browser).toHaveUrl(
      "https://www.instagram.com/karanveersingh_thakur/"
    );
    await InstagramPage.followBtn.click();
    await expect(InstagramPage.usernameh2).toBeDisplayed();

    const usernameh2Text = await InstagramPage.usernameh2.getText();

    await expect(usernameh2Text).toEqual("karanveersingh_thakur");
  });

  it("should unsend the request sent to the user", async () => {
    await InstagramPage.ProfileBtn.click();
    await InstagramPage.unfollowBtn.click();
    await expect(InstagramPage.followBtn).toBeDisplayed();
  });

  it("should send message to the user", async () => {
    for (let i = 0; i < 5; i++) {
      await (await InstagramPage.chatBtn).click();
      await (await ChatPage.personToChat).click();
      await (await ChatPage.chatInput).setValue("Hi");
      await (await ChatPage.sendBtn).click();
    }
  });
});
