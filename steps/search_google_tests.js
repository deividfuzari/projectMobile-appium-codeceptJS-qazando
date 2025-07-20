Feature('Utilizando a web para rodar nos testes mobile').tag('@test_web')

Scenario('procurando meu nome no google', ({I})=>{
    I.amOnPage('https://www.google.com.br')
    I.fillField('[class="gLFyf"]', 'deivid fuzari')
    I.waitForElement('#jZ2SBf', 5).click()
    I.see('Deivid Fuzari')
}).tag('@search_web')