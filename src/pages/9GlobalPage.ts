class GlobalPage {

        async OpenPage(pageUrl:string, expectedUrl:string){

                await browser.url(pageUrl); 
                await expect(browser).toHaveUrl(expectedUrl); 

        }

}

export default new GlobalPage();