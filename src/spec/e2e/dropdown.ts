import { productUrl} from "../../lib/pages";
import Global from "../../pages/Global";
import productPage from "../../pages/productPage";


describe("Lekcja3- dropdown", async () => {
    it("powinien otworzyć i zweryfikować url", async () => {

        //await browser.url(productUrl); 
        //expect (browser).toHaveUrl(productUrl);
        await productPage.openProductPage();
        await productPage.midPause();
    })

    it ("Powinien wyselekcjonować M-size", async () => {
        //const select: WebdriverIO.Element = await $("#group_1");
        // po atrybucie sprawdzam czy dobrze ustawił
        //await select.selectByAttribute("value","2");
        //await expect (await select.getValue()).toContain("2");

        // Po tytule sprawdzam
        // await select.selectByAttribute("title","L");
        //expect(await select.getValue()).toContain("3");
        

        //po widocznym tekście sprawdzam
        //await select.selectByVisibleText("M")
        //expect(await select.getValue()).toContain("2");

       // po indeksie jak w tablicy od zera
        //await select.selectByIndex(1);

        await productPage.chooseSize(2); // indeks 0 to "S", 1 - "M", 2 to "L"
        await productPage.midPause();        
    }) 
})