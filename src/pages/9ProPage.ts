
class ProPage {

 get productTitle(){

    return $("div.title-group h1 span[itemprop='name']")

 }


 get productPrice(){

    return $("#cena_d");
 }

 get addToBasketBtn(){
    return $("#addToBasket_tefust")

 }


async prodTitleIsDisplayed(){

    const title:WebdriverIO.Element = await this.productTitle;
    await title.waitForDisplayed();
}


async getProductTitle(): Promise<string> {
    const tytul:WebdriverIO.Element = await this.productTitle;
    await tytul.waitForDisplayed();
    return await tytul.getText();


}

async getProductPrice(): Promise<string>{

    const price:WebdriverIO.Element = await this.productPrice;
    await price.waitForDisplayed();
    return await price.getText();

}


async addToBasketBtnIsVisible(){

    const btn:WebdriverIO.Element = await this.addToBasketBtn;
    await btn.waitForDisplayed();
}

async clikOnAddToBasketBtn(){

    const btn:WebdriverIO.Element = await this.addToBasketBtn;
    await btn.waitForDisplayed();
    await btn.click();
}

}

export default new ProPage();