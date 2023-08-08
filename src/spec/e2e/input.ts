import{FLUrl, DenleyUrl} from "../../lib/pages";
import{searchPhrase} from "../../lib/wordData";
import denleyPage from "../../pages/denleyPage";

describe("lesson1 - Input",async () => {
  
   it("Should open automationpractice page", async () => {
       /* before(() => {
            browser.maximizeWindow();
       }) 

       afterEach( () => {

       })    

        await browser.url(FLUrl);
        //asercja
        await expect(browser).toHaveUrl(FLUrl + "/"); // sprawdzenie URLa
        await expect(browser).toHaveTitleContaining("RODO") // sprawdzenie tytułu */
    })

    it("Should type value to search input", async () => {
       /*
        await browser.url(FLUrl);
        const input: WebdriverIO.Element = await $("form.et-search-form > input.et-search-field");
        await input.setValue(searchPhrase);
        expect(await input.getValue()).toContain(searchPhrase); 
        await browser.pause(5000);
        */
    }) 

    it("Should type value to search input Denley", async () => {
       /* 
        await browser.url(DenleyUrl);
        const input: WebdriverIO.Element = await $("#menu_search_text");
        await input.setValue(searchPhrase);
        await browser.pause(5000);
        expect(await input.getValue()).toContain(searchPhrase);
        await input.clearValue();
        await browser.pause(5000);
        expect (await input.getValue()).toContain("");

        */
        await denleyPage.openDenleyPage();
        await denleyPage.enterValue("Dwa słonie");
        await denleyPage.midPause();
    

    }) 
})