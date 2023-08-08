
import homePage from "../../pages/homePage";

describe("Lekcja 2 - chckbox",  async () => {
    
    it("wejście na automationpractice",async () => {
        homePage.openHomePage();
        await browser.pause(5000);
    })
    
    it("wejście na podstrone Women",async () => {
       const womanPage: WebdriverIO.Element = await $("a[title='Women']");
       await womanPage.click()
    })

    
    it("Odkliknięcie checkboxu Tops", async () => {
        
        const checkbox: WebdriverIO.Element = await $("#layered_category_4");
        await checkbox.click();
        await browser.pause(4000);
        await expect(checkbox).toBeSelected(); //sprawdzenie czy checkbox jest zaznaczony
        await expect(await checkbox.isSelected()).toBeTruthy(); // druga metoda
        //await expect(await checkbox.isSelected()).toBeFalsy(); // sprawdzenie czy jest niezaznaczony jeśli miał nie być zaznaczalny 
    })


    it("Odkliknięcie grupy checkboksów",async () => {
        const checkboxes: WebdriverIO.ElementArray = await $$("#ul_layered_id_attribute_group_1 li input");
        // console.log(await checkboxes.length);
        await checkboxes.map(
            async item => {
                await item.click();
                
            }
        )
        await browser.pause(5000)
    })




})