const {openBrowser, goto, click, text, closeBrowser} = require('taiko');
const launchChrome = require('@serverless-chrome/lambda');
let chrome;

module.exports.handler = async function () {
    try {
        chrome = await launchChrome({
            flags: ['--window-size=1440,900', '--hide-scrollbars']
        })
        await console.log(chrome);
        await openBrowser({host:'127.0.0.1', port: 9222});
        await goto('gauge.org');
        await click('Documentation');
        await text('Gauge Documentation').exists();
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
        await chrome.kill();
    }
}