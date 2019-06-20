const {openBrowser, goto, closeBrowser} = require('taiko');
const launchChrome = require('@serverless-chrome/lambda');
let chrome;

module.exports.handler = async function () {
    try {
        chrome = await launchChrome({
            flags: ['--window-size=1280,1696', '--hide-scrollbars']
        })
        await console.log(chrome);
        await openBrowser({host:'127.0.0.1', port: 9222});
        await goto('gauge.org');
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
        await chrome.kill();
    }
}