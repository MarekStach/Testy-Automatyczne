import { homeUrl } from "../lib/pages";
import Global from "./Global";


class homePage extends Global {

    get fbIcon() {

        return $("#social_block a");
    }

    async openHomePage() {
   
        await browser.url(homeUrl);
        await expect(browser).toHaveUrl(homePage + "index.php");
    }

    async moveToFbIcon() {
        const icon:WebdriverIO.Element = await this.fbIcon;
        await icon.waitForDisplayed();
        await icon.moveTo();
        await browser.pause(5000);
    }

    async scrollToFbIcon() {
        const icon:WebdriverIO.Element = await this.fbIcon;
        //await icon.waitForDisplayed();
        await icon.scrollIntoView();
        await browser.pause(3000);
    }
}
export default new homePage();