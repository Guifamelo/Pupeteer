const puppeteer = require('puppeteer');
console.log('Olá mundo!!');

//(async () => {
/*})();
async function robo() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://google.com');

    await page.type('[class="gLFyf gsfi"]', 'btc dolar')
    //await page.click('[name="btnK"]')
    await page.keyboard.press('Enter');


   // await page.screenshot({ path: 'example.png' });

   // await browser.close();
}
robo();
*/

/*async function robo() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    let URL = 'https://www.ssp.sp.gov.br/servicos/atestado.aspx'
    await page.goto(`${URL}`);
    await page.waitFor('img')
    //await page.click('[href="/aacweb/carrega-formulario"]')
    await page.waitFor('img2')

    
}
robo();
*/
/*
async function robo() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    let URL = 'https://www2.ssp.sp.gov.br'
    await page.goto(`${URL}`);
    await page.waitFor('img');
    await page.click('[href="/aacweb/carrega-formulario"]');
    await page.waitFor('img');
    await page.type('[name="nome"]', 'Guilherme');
    await page.type('[name="numero"]', 'meu_rg');
    await page.type('[name="digito"]', 'd');
    await page.type('[name="txtDIAE"]', 'dd');
    await page.type('[name="txtMESE"]', 'mm');    
    await page.type('[name="txtANOE"]', 'aa');
    await page.type('[name="digito"]', ' '+'7');
    await page.type('[name="txtDIA"]', 'dd');
    await page.type('[name="txtMES"]', 'mm');    
    await page.type('[name="txtANO"]', 'aaaa'); 
    await page.type('[name="nomePai"]', 'nome_pai');
    await page.type('[name="nomeMae"]', 'nome_mae');
   // await page.waitFor(5000);
    //await page.solveRecaptchas();
    //await page.click('#recaptcha-anchor')
   // await page.click('#pesquisa')

    await page.waitFor(12000);
    //await page.keyboard.press('Enter');
    await page.click('#pesquisa')

    
}
robo();
*/


async function robo() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    let URL = 'https://imgur.com/';
    await page.goto(`${URL}`);

    //await page.waitForNavigation();
    await page.click('[href="https://imgur.com/signin?redirect=%2F"]');
    await page.waitFor(3000);
    await page.type('[id="username"]', 'guimgur01@yahoo.com');
    await page.type('[id="password"]', 'senhaImgur0!@');
    await page.waitFor(5000);
    await page.keyboard.press('Enter');
    await page.waitFor('input');
    await page.type('[class="Searchbar-textInput"]', 'btc');
    await page.keyboard.press('Enter');
    await page.waitFor('img');
    //await page.click('.arrow-up(3)]');
   // await page.waitFor('imgfefsd');

    
}
robo();
