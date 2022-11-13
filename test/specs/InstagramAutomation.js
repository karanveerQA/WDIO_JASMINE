import InstagramPage from "./../pages/Instagram-Page";

describe("Instagram", () => {
  it("should login the user with the given credentials", async () => {
    await InstagramPage.loginToInstagram();
  });
});
