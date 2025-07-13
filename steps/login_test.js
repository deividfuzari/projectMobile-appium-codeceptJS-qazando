Feature('login');

const { login_page } = inject()

Scenario('Test login succsses', ({ I, home_page }) => {
    login_page.doLogin({})
    home_page.validateLoginSuccsess()
});

Scenario('Test login Erro', ({ I }) => {
    login_page.doLogin({ password: "1234567" })
    login_page.validateFailLogin()
})
