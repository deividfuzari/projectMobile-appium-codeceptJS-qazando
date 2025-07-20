Feature('login').tag('@login')

const { login_page } = inject()

BeforeSuite(() => {
    console.log('Iniciando Feature Login PageObject')
})

Scenario('Test login succsses', ({ I, home_page }) => {
    login_page.doLogin({})
    home_page.validateLoginSuccsess()
}).tag('@login_succsess')

Scenario('Test login Erro', ({ I }) => {
    login_page.doLogin({ password: "1234567" })
    login_page.validateFailLogin()
}).tag('@login_erro')

AfterSuite(() => {
    console.log('Finalizado Feature Login PageObject')
})
