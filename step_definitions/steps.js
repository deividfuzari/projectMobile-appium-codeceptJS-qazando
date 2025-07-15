const { I } = inject();
// Add in your custom step files

Before((scenario) => {
  if (scenario.feature && scenario.feature.title) {
    console.log(`Iniciando Feature "${scenario.feature.title}"`);
  }
})

Given('I fill email', () => {
  I.fillField('~email', 'teste@teste.com')
});

Given('I fill password', () => {
  I.fillField('~senha', '123456')
});

When('I tap on Entrar', () => {
  I.tap('~entrar')
});

Then('I see field Codigo', () => {
  I.see('Código')
});

Then('I see text Aluno', () => {
  I.waitForElement({ android: 'android=new UiSelector().text("Aluno")' }, 5)
});

After((scenario) => {
  if (scenario.feature && scenario.feature.title) {
    console.log(`Finalizando Feature "${scenario.feature.title}"`);
  }
})

