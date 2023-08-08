
class Global {

    async shortPause() {

        await browser.pause(2000);
    
    }

    async midPause() {

        await browser.pause(5000)
    }
    
    async longPause() {

        await browser.pause(10000);
    }
}

export default Global;