class cartPage {

 get sccessAlert(){

    return $("div.successbox > p")
 }


 get totalPrice(){
    return $("#cart-edit-summary div");
 }

 get checkBoxAll(){
    return $("div.checkbox-line > label[for='delall'] > span[class='input']");

 }

get checkBoxBook(){

    return $("div.checkbox-line > label[data-v-7e3ad112] > span[class='input']");

}



get usunBtn(){

    return $("div#usun a");
    
}


get koszPustyAlert(){

    return $("div.infobox-offers p");

}

async getKoszPustyAlert(): Promise<string> {

    const alert:WebdriverIO.Element = await this.koszPustyAlert;

    return await alert.getText();

}



async clickOnUsunBtn(){

    const btn:WebdriverIO.Element = await this.usunBtn;
    await btn.waitForDisplayed();
    await btn.scrollIntoView();
    await btn.click();


}


async clickOnCheckBoxAll(){

    const cbox:WebdriverIO.Element = await this.checkBoxAll;
    await cbox.waitForDisplayed();
    await cbox.click();

}




async clickOnCheckBoxBook(){

    const cbox:WebdriverIO.Element = await this.checkBoxBook;
    await cbox.waitForDisplayed();
    await cbox.click();

}


 async getSuccessAlertValue(): Promise<string> {

    const alert:WebdriverIO.Element = await this.sccessAlert;
    return await alert.getText();

 }

 async successAlertVisible(){

    const alert:WebdriverIO.Element = await this.sccessAlert;
    expect(await alert.isDisplayed()).toBeTruthy();
 }

async getTotalPriceVal(): Promise<string> {
    const price:WebdriverIO.Element = await this.totalPrice;
    await price.waitForDisplayed();
    //await price.scrollIntoView();
    return await price.getText();
}


}

export default new cartPage();



