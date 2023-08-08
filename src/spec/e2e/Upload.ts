import { LoadingUrl } from "../../lib/pages";
const path = require("path");

describe("Lesson6 - upload file",async () => {
    
    it("should open upload page",async () => {
        
        await browser.url(LoadingUrl);
        await expect(browser).toHaveUrl(LoadingUrl);
    })

    it("załadować plik",async () => {
        
        const chooseF:WebdriverIO.Element = await $("#file-upload");

        const uploadBtn:WebdriverIO.Element = await $("#file-submit");
        
        const filePath:string = path.join(__dirname, "../../images/ziemia.jpg");

        const uploadFile = await browser.uploadFile(filePath);

        await chooseF.setValue(uploadFile);
        await browser.pause(5000)
        uploadBtn.click();

    }) 

    it("sprawdzenie czy plik został załadowany",async () => {
        
        const messageField:WebdriverIO.Element = await $("#content h3")
        const message: string = await messageField.getText();
        await console.log("to to: " + message);
        await expect(message).toContain("File Uploaded!"); // sprawdzam, czy jest file uploaded
        const plik:WebdriverIO.Element = await $("#uploaded-files");
        await expect(await plik.getText()).toContain("ziemia.jpg"); //sprawdzam czy to na pewno ten plik

    })



})