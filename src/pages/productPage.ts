import { productUrl } from "../lib/pages";
import Global from "./Global";

class productPage extends Global {

    async openProductPage() {
   
        await browser.url(productUrl);
        await expect(browser).toHaveUrl(productUrl);
    }

    get sizeSelector() {

        return $("#group_1");

    }

    async chooseSize(size:number) {

         const select: WebdriverIO.Element = await this.sizeSelector;
         await select.selectByIndex(size);
         console.log("to to : " + size + " a value to: ") ;
         
       if (size == 0 ) {
        expect(await select.getValue()).toContain("1");
       } else {
        if (size == 1) {
            expect(await select.getValue()).toContain("2")
        } else {
            expect(await select.getValue()).toContain("3")
        }
       }   
    }
}
export default new productPage();