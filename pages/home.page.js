const { I } = inject()

module.exports = {
    elementsText: {
        text_student: 'android=new UiSelector().text("Aluno")',
        element_student_save: '//android.widget.TextView[@text="Salvo"]',
        text_student_save: 'Salvo'
    },

    fields: {
        code: '~codigo',
        student: '~aluno',
        save: '~salvar',
        search: '~search'
    },

    registerStudent(code, student) {
        I.waitForElement(this.fields.code, 5)
        I.fillField(this.fields.code, code)
        I.fillField(this.fields.student, student)
        I.tap(this.fields.save)
    },

    validateCreateStudent() {
        I.waitForElement(this.elementsText.element_student_save, 5)
        I.see(this.elementsText.text_student_save, this.elementsText.element_student_save)
    },

    searchAndValidateStudent(code, student) {
        I.fillField(this.fields.search, student)
        I.waitForElement(`~${code}`, 5)
        I.see(student)
        I.wait(2)
    },

    validateLoginSuccsess() {
        I.waitForElement({ android: this.elementsText.text_student }, 5)
        I.seeElement(this.fields.code)
    },

    swipeFromHome() {
        I.performSwipe({ x: 300, y: 1100 }, { x: 300, y: 250 })
        I.wait(5)
    }
}