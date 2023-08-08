import GlobalPage from "../../pages/9GlobalPage";
import { helionUrl } from "../../9config/9urlPages";
import SearchBarPage from "../../pages/9components/SearchBarPage";
import { sPhrase, searchPage, searchResultTitle , booksNumber} from "../../9config/9data";
import ResultPage from "../../pages/9ResultPage"; 


describe("E2E- search bar",async () => {
    
    it("Weryfikacja wejścia na strone Helion",async () => {
        GlobalPage.OpenPage(helionUrl, helionUrl);
        await SearchBarPage.searchBarIsVisible();
    })

    it("kliknięcie w ikonke loopki ma przekierowywać na strone helion.pl",async () => {
        
        await SearchBarPage.clickOnSearchIcon();
        await expect(browser).toHaveUrl("https://helion.pl/search/?qa=&szukaj=");

    })

    it("Wpisujemy podaną frace i weryfikujemy popup",async () => {
        
        const rodo:WebdriverIO.Element = await $("div.container #rodo-ok"); // likwiduje popup rodo
        await rodo.waitForDisplayed();
        await rodo.click();
        await SearchBarPage.typeSearchPhrase(sPhrase);
        //await browser.pause(3000);
        await SearchBarPage.suggestPopupIsVisible();
        await SearchBarPage.typeSearchPhrase(sPhrase);
        await browser.pause(5000);
        

    })


    it("Klikamy na see all books button",async () => {
        
        await SearchBarPage.clickOnSeeAllBtn(); 
        await expect(browser).toHaveUrl(searchPage);


    })

    it("weryfikujemy poprawność tytułu ",async () => {
        
         const to = await ResultPage.getSearchPageTitle();
         console.log("to jest to: " + to);
         await expect(to).toContain(searchResultTitle);



    })

    it("weryfikujemy liczbe ksiazek", async () => {

        const numberOfBooks: number = await ResultPage.getNumberOfBooks();
        //console.log("to jest to : "+ numberOfBooks);

        await expect(numberOfBooks).toEqual(booksNumber);
        
    })
  
    it("czyscimy searchbar i sprawdzamy czy jest pusty",async () => {
        
        await SearchBarPage.clearSearchBar();
        expect(await SearchBarPage.searchBarContent()).toContain('');
        console.log("to to : " + await SearchBarPage.searchBarContent())

    })

    
})