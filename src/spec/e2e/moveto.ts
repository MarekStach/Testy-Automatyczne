import { homeUrl } from "../../lib/pages";
import homePage from "../../pages/homePage";

describe("Lekcja7 - moveTo",async () => {

    it("otwórz automationpractice page",async () => {
        homePage.openHomePage();
        homePage.midPause();
    })

//#block_top_menu li a[title='Women']

    it("Przeskroluj do ikony facebook",async () => {

        //const fbIcon:WebdriverIO.Element = await $("#social_block a");
        //fbIcon.scrollIntoView();
        //await browser.pause(5000);
        homePage.scrollToFbIcon();
        
    })


    it("Najedź kursorem na ikonę FB",async () => {
        await browser.pause(5000);
        // const fbIcon:WebdriverIO.Element = await $("#social_block a");
        // await fbIcon.moveTo();
        // await browser.pause(5000);
        await homePage.moveToFbIcon();


    })

})