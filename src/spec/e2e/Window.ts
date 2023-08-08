import { homeUrl , womenUrl} from "../../lib/pages";
import { pageOneTitle, pageTwoTitle } from "../../lib/wordData";
import homePage from "../../pages/homePage";

describe("Lekcja4 - działania na oknach",async () => {

    it("otwórz i sprawdź poprawność otwarcia strony",async () => {
        //await browser.url(homeUrl);
        //await expect(browser).toHaveUrl(homeUrl + "index.php")
        homePage.openHomePage();
    })

    
    it("Otwórz w przeglądarce nowe okno",async () => {
    await browser.newWindow(womenUrl);
    // await browser.pause(5000);

    })

    it("sprawdź tytuł pierwszego i drugiego otwartego okna ",async () => {
        
        const openedWindow = await browser.getWindowHandles();
        //await console.log("to jest to : " + openedWindow);
        await browser.switchToWindow(openedWindow[0]);
        await expect(browser).toHaveTitle(pageOneTitle);

        await browser.switchToWindow(openedWindow[1]);
        await expect(browser).toHaveTitle(pageTwoTitle);

    })



})