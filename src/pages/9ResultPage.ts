class ResultPage{

    get searchPageTitle () {

         return  $(" div#page-title > h1")

    }

    get booksItem(){
        return $$("ul.list > li");

    }

    get firstBookItem() {

        //return $("ul.list > li:nth-child(1) > a")
        return $("ul.list > li:nth-child(1) > a > p >img");
    }


    async clickOnFirstBookItem(){
        const book:WebdriverIO.Element = await this.firstBookItem
        await book.waitForDisplayed();
        await book.click();

    }



    async getSearchPageTitle() : Promise<string> { 
            const input:WebdriverIO.Element = await this.searchPageTitle;
            await input.waitForDisplayed();
            return input.getText();

    }

    async getNumberOfBooks() : Promise<number> {

        const books:WebdriverIO.ElementArray = await this.booksItem;
        return await books.length;


    }

}

export default new ResultPage();