import { DenleyUrl} from "../lib/pages";
import Global from "./Global";

class denleyPage extends Global {

    async openDenleyPage () {
        await browser.url(DenleyUrl);
        await expect(browser).toHaveUrl(DenleyUrl);
    }

    get insertWindow()  {   
        return $("#menu_search_text");
    }   

    async enterValue(phraze:string) {
        
        const boxins:WebdriverIO.Element = await this.insertWindow;
        await boxins.setValue(phraze);
        const flag:string = await boxins.getValue();
        await console.log("to je to " + flag);
        this.midPause();
        expect(await boxins.getValue()).toContain(phraze);
    }

    

}

export default new denleyPage();