import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
    const page = await browser.newPage();

    page.on('console', msg => console.log('BROWSER_CONSOLE:', msg.text()));
    page.on('pageerror', err => console.log('BROWSER_ERROR:', err.toString()));

    try {
        console.log("Acessando Login...");
        await page.goto('https://crm.cfauto.com.br/login', { waitUntil: 'networkidle2' });
        
        await page.type('#email', 'admin@cfauto.com.br');
        await page.type('#password', 'Apjbr@1981');
        
        console.log("Submetendo Login...");
        await Promise.all([
            page.click('button[type="submit"]'),
            page.waitForNavigation({ waitUntil: 'networkidle2' }),
        ]);

        console.log("Indo para Organização...");
        await page.goto('https://crm.cfauto.com.br/settings/organization', { waitUntil: 'networkidle2' });
        
        console.log("Esperando 3s para crash de React eventuais...");
        await new Promise(r => setTimeout(r, 3000));
        
        const html = await page.content();
        if (html.includes('Configurações')) {
            console.log("Tela renderizou algum layout de config.");
        }
        if (html.includes('A área central') || html.includes('Filas Alocadas') || html.includes('Lista de Atendentes')) {
             console.log("Achou texto do painel.");
        }
    } catch (e) {
        console.error("Erro no script:", e.message);
    } finally {
        await browser.close();
    }
})();
