class SearchBarPage{

    get searchInput() {

        return $("div #inputSearch");
    }

    get getSearchIcon(){

        return $("//button[contains(text(),'Szukaj')]");

    }

    get suggestPopup() {

        return $("#szukanie div.suggest-list");
    }

    get seeAllBtn(){

        return $(" li.wszystkie > p > a");
    }


    async searchBarIsVisible() {
        const input:WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
    }


    async clickOnSearchIcon(){

        const icon: WebdriverIO.Element = await this.getSearchIcon
        await icon.waitForDisplayed();
        await icon.click();

    }

    async typeSearchPhrase(value:string){

        const input:WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
        await input.setValue(value);
    }


    async suggestPopupIsVisible(){

        const popup:WebdriverIO.Element = await this.suggestPopup;
        await expect(popup.isDisplayed()).toBeTruthy();


    }

    async clickOnSeeAllBtn(){

        
        const btn:WebdriverIO.Element = await this.seeAllBtn;
        
        await btn.waitForDisplayed();
        await btn.scrollIntoView();
        await btn.click();
        await browser.pause(3000);

    }

    async clearSearchBar() {

        const input:WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
        await input.clearValue();

    }

    // to ma zazadanie podać zawartość searchBara
    async searchBarContent() : Promise<string> {
        
        const input:WebdriverIO.Element = await this.searchInput;   
        await input.waitForDisplayed();
        return await input.getValue();

    }

}

export default new  SearchBarPage();