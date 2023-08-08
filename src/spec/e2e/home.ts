

describe("verify home page googl",async () => {
    it("should open FL",async () => {
        browser.url("https://financial-life.pl");
        browser.pause(3000);
       
    }) 
    it("should open google",async () => {
        await browser.url("https://google.com");
        await browser.pause(3000);
       
    })
})