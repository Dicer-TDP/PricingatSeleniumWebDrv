const {Builder, By, Key, utill} = require("selenium-webdriver");
const 
async function example() {
    let driver =await new Builder().forBrowser("firefox").build();
    await driver.get("http://google.com");
    await driver.findElement(By.name("q")).sendKeys("selenium",Key.RETURN);
}
example();

const proxyConfig = {
    host: '',
    port: '',
    username: '',
    password: '',
    tempDir: ''
};
const proxyConfig1 = {
    host: '',
    port: '',
    username: '',
    password: '',
    tempDir: ''
};
const proxyConfig2 = {
    host: '',
    port: '',
    username: '',
    password: '',
    tempDir: ''
};
const proxyConfig3 = {
    host: '',
    port: '',
    username: '',
    password: '',
    tempDir: ''
};
const proxyConfig4 ={
    host: '',
    port: '',
    username: '',
    password: '',
    tempDir: ''
};
return new Proxylugin({
    proxyConfig: proxyConfig,
    proxyConfig: proxyConfig1,
    proxyConfig: proxyConfig2,
    proxyConfig: proxyConfig3,
    proxyConfig: proxyConfig4,
})
    .then((plugin)) => {
        console.log('PLUGIN SUDAH SIAP');
        return new webdriver.Builder()
            .forBrowser('chrome')
            .setChromeOptions(plugin.chromeOptions)
            .build()
            .then((driver) => plugin.cleanup())
                .then(() => driver.get('http://whatismyip.host/'))
                .then(() => console.log('selesai'))
    )
    ;
    })
    .catch((err) => console.log('ERROR:', err))
    }