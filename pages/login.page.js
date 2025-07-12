const { I } = inject()
const messageLoginError = 'Erro no login!'

module.exports = {

    fields: {
        email: "~email",
        password: "~senha"
    },

    button: {
        btn_enter: "~entrar"
    },

    messages: {
        message_login_fail: "~lognFail"
    },

    doLogin(data) {
        const email = data.email || 'teste@teste.com'
        const password = data.password || '123456'

        I.fillField(this.fields.email, email)
        I.fillField(this.fields.password, password)
        I.tap(this.button.btn_enter)
    },

    validateFailLogin() {
        I.waitForElement(this.messages.message_login_fail, 3)
        I.see(messageLoginError, this.messages.message_login_fail)
    }
}