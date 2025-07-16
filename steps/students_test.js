const getName = require('../utils/libary_name')
const getNumberRandom = require('../utils/library_number_random')

Feature('Students')

const { login_page, home_page } = inject()

const dados = {
    code: getNumberRandom(),
    student: getName()
}

BeforeSuite(()=> {
    console.log('Iniciando Feature Students PageObject')
})

Scenario('Adding students with succsess', () => {
    login_page.doLogin({})
    home_page.registerStudent(dados.code, dados.student)
    home_page.validateCreateStudent()
    home_page.searchAndValidateStudent(dados.code, dados.student)
})

AfterSuite(()=> {
    console.log('Finalizando Feature Students PageObject')
})
