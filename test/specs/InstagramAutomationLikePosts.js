import InstagramPage from "./../pages/Instagram-Page";
import ProfilePage from "./../pages/ProfilePage";
import ReelsPage from "./../pages/ReelsPage";
describe("like posts", () => {
  beforeAll(async () => {
    await browser.maximizeWindow();
    await InstagramPage.loginToInstagram();
  });

  it("should like post", async () => {
    await browser.maximizeWindow();
    await InstagramPage.loginToInstagram();
    await browser.url("https://www.instagram.com/karanveersingh_thakur/");

    await InstagramPage.usernameh2.waitForDisplayed();

    const postedImages = await ProfilePage.postedImages;

    for (let img of postedImages) {
      await img.click({ x: 50, y: 0 });
      await ProfilePage.likeBtn.click();
      await ProfilePage.unlikeBtn.waitForDisplayed({ timeout: 60000 });
      await ProfilePage.closeBtn.click();
    }
  });

  it("should like reel", async () => {
    await browser.url("https://www.instagram.com/chaklo_rakhlo/reels/");
    await browser.waitUntil(
      () => {
        return $("div._aajy").waitForDisplayed();
      },
      {
        timeout: 60000,
        timeoutMsg: "Reels not found",
      }
    );
    const reels = await ReelsPage.reelsImg;

    for (let reel of reels) {
      await reel.click({ x: 50, y: 0 });
      await ReelsPage.likeBtn.waitForDisplayed({ timeout: 60000 });
      await ReelsPage.likeBtn.click();
      await ReelsPage.closeBtn.click();
    }
  });
});
