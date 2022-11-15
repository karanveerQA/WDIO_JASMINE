class ProfilePage {
  get postedImages() {
    return $$(`img[alt^="Photo by Karanveer Singh"]`);
  }

  get likeBtn() {
    return $('span>button[type="button"]');
  }

  get unlikeBtn() {
    return $('svg[aria-label="Unlike"]');
  }

  get closeBtn() {
    return $('svg[aria-label="Close"]');
  }
}
export default new ProfilePage();
