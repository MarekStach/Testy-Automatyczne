import { alertsUrl} from "../../lib/pages";
import { cancelMessage, OKMessage } from "../../lib/wordData";

describe("Lekcja5 - Alerty" ,async () => {

    it("wejdź na strone alertów i poprawność załadowania strony",async () => {
        
        await browser.url(alertsUrl);
        await expect(browser).toHaveUrl(alertsUrl);
    })

    it("kliknij w button i weź tekst informacji",async (type) => {
        const button:WebdriverIO.Element = await $(".btn-danger");
        expect (await browser.isAlertOpen()).toBeFalsy(); //upewniam sie, e alert nie jest wyświetlony
        await button.click();
        
        const alertText:string = await browser.getAlertText(); // sprawdzam tekst alertu
        await expect(alertText).toContain("I am an alert box!");
        await expect (browser.isAlertOpen()).toBeTruthy(); // sprawdzam czy alert sie otworzył
        await browser.pause(4000);
        await browser.acceptAlert(); // wciskam OK
        //await expect (browser.dismissAlert()).toBeTruthy(); //sprawdzam czy alert sie zamknął
        await expect ( await browser.isAlertOpen()).toBeFalsy(); 
 
    })
    
    it("Wryfikacja alertu z OK i Anuluj", async () => {

        const buttonOKAN:WebdriverIO.Element = await $("ul.nav-stacked li:nth-child(2)");
        //const buttonOKAN:WebdriverIO.Element = $("//a[contains(text(),'Alert with OK & Cancel')]"); //a[contains(text(),'Alert with textbox')], //a[contains(text(),'Alert with Textbox')]
        await buttonOKAN.click();
        await browser.pause(4000);
        const buttonConfBox:WebdriverIO.Element = await $("#CancelTab .btn-primary");
        await buttonConfBox.click();
        await browser.pause(4000);
        await browser.dismissAlert(); // wciskam anuluj
        const messageObj:WebdriverIO.Element = await $("#demo");
        const messageTxt: string = await messageObj.getText();
        await expect(messageTxt).toContain(cancelMessage); // sprawdzenie poprawności message przy anuluj

        await buttonOKAN.click();
        //await browser.pause(4000);
        //const buttonConfBox:WebdriverIO.Element = await $("#CancelTab .btn-primary");
        await buttonConfBox.click();
        await browser.pause(4000);
        await browser.acceptAlert(); // wciskam OK
        const messageObj1:WebdriverIO.Element = await $("#demo");
        const messageTxt1: string = await messageObj1.getText();
        await console.log("to jest to  " + messageTxt1);
        await expect(messageTxt1).toContain(OKMessage); // sprawdzenie poprawności message przy OK

    }) 

    it("uruchomienie i weryfikacja opcji z promptem",async () => {
    
        const btTxtbox: WebdriverIO.Element = await $("ul.nav-stacked li:nth-child(3) a");  //  
        //a[contains(text(),'Alert with Textbox')]
        await btTxtbox.click();
        await browser.pause(4000);
        const btPrompt: WebdriverIO.Element = await $(".btn-info");
        await btPrompt.click();
        await browser.pause(4000);
        await browser.sendAlertText ("Bartosz");
        await browser.acceptAlert();
        const messageObj2:WebdriverIO.Element= await $("#demo1");
        await expect(await messageObj2.getText()).toContain("Hello Bartosz How are you today");
        


    })



})
