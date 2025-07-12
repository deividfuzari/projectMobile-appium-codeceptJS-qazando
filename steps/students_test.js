Feature('Students')

const { login_page, home_page } = inject()

const dados = {
    code: '0504',
    student: 'Deivid'
}

Scenario('Adding students with succsess', () => {
    login_page.doLogin({})
    home_page.registerStudent(dados.code, dados.student)
    home_page.validateCreateStudent()
    home_page.searchAndValidateStudent(dados.code, dados.student)
})
