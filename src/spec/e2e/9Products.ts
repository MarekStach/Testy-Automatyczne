import SearchBarPage from "../../pages/9components/SearchBarPage";
import ResultPage from "../../pages/9ResultPage";
import CartPage from "../../pages/9cartPage";
import { helionUrl, cartUrl } from "../../9config/9urlPages";
import { alertText, sPhrase, sPhraseUrl, koszPustyAlert } from "../../9config/9data";
import ProPage from "../../pages/9ProPage";


describe("E2E - products", async () => {
    let ProdTitle:string = "";
    let ProdPrice:string = "";

    before(()=>{

        browser.url(helionUrl);
    })


    it("Powinien wpisać fracę w okno szukania i kliknąć ikone loopki",async () => {
        
        await SearchBarPage.typeSearchPhrase(sPhrase);
        await SearchBarPage.clickOnSearchIcon();
        await expect(browser).toHaveUrl(sPhraseUrl);

    })


    it("Klikamy na pierwszą ksiąkę",async () => {
        
        await ResultPage.clickOnFirstBookItem();
        await ProPage.prodTitleIsDisplayed();
        //browser.pause(5000);
        await ProPage.addToBasketBtnIsVisible();
        ProdTitle = await ProPage.getProductTitle(); // to dodaje pod kontem kolejnych stepów
        ProdPrice = await ProPage.getProductPrice();


    })


    it("Klikamy na Dodaj do koszyka i sprawdzamy czy jesteśmy na stronie koszyka",async () => {
        
        await ProPage.clikOnAddToBasketBtn();
        await expect(browser).toHaveUrlContaining(cartUrl);
    })

    it("Sprawdzamy czy wyświetlił się alert a jego test zgadza się z opisem ksiąki",async () => {
        
        //await console.log(await CartPage.getSuccessAlertValue());
        await CartPage.successAlertVisible(); // czy wyświetlił się alert
        await console.log(await CartPage.getSuccessAlertValue());
        await console.log(ProdTitle);
        await expect(await CartPage.getSuccessAlertValue()).toContain(ProdTitle);
    })


    it("Sprawdzam czy cena na stronie produktu zgadza się z ceną na stronie koszyka",async () => {
        
        await expect(await CartPage.getTotalPriceVal()).toContain(ProdPrice);
        console.log("to to: " + await CartPage.getTotalPriceVal())
    })


    it("Klikam w ksiąkę i usuwam z koszyka, sprawdzam czy pojawi sie komunikat o usunięciu, usuwam i sprawdzam czy pojawia się komiunikat, ze kosz jest pusty",async () => {
        
        await CartPage.clickOnCheckBoxBook();
       
        await CartPage.clickOnUsunBtn();
        await expect(await browser.isAlertOpen()).toBeTruthy();
        const msg:string = await browser.getAlertText();
        await console.log(msg);
        await expect(msg).toContain(alertText)
        //await browser.pause(3000)
        await  browser.acceptAlert();
        //await browser.pause(3000)
        expect(await CartPage.getKoszPustyAlert()).toContain(koszPustyAlert);

    })

    
})