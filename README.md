# Projeto Mobile Automation — Curso Qazando (Appium + CodeceptJS)

Projeto desenvolvido durante o curso da Qazando para automação de testes em aplicativos móveis utilizando Appium e CodeceptJS.

---

## Estrutura do Projeto

- `features/`  
  Arquivos `.feature` com cenários BDD escritos em Gherkin.

- `mochawesome-report/`  
  Relatórios gerados pelo Mocha (HTML, JSON, assets).

- `output/`  
  Diretório de saída para logs e screenshots (gerados durante os testes).

- `pages/`  
  Page Objects (ex: `home.page.js`, `login.page.js`) para organizar elementos e ações do app.

- `server/`  
  Scripts de bootstrap e teardown para setup e cleanup antes e depois dos testes.

- `step_definitions/`  
  Definição dos passos dos testes em BDD (`steps.js`).

- `steps/`  
  Scripts de testes com implementação dos testes (ex: `login_test.js`, `search_google_tests.js`, `students_test.js`).

- `utils/`  
  Funções utilitárias que usam bibliotecas npm (ex: `libary_name.js`, `library_number_random.js`).

---

## Tecnologias e Conceitos Utilizados

- **Appium** para automação mobile  
- **CodeceptJS** com BDD para estruturação dos testes  
- **Page Object Pattern** para organização e reaproveitamento do código  
- **Gherkin** para escrita clara dos cenários de teste  
- **Mochawesome** para relatórios visuais detalhados  
- **Hooks** (`bootstrap.js` e `teardown.js`) para preparar e finalizar os testes  
- Uso de **tags** para filtrar e executar grupos específicos de testes  
- Utilitários npm para funções auxiliares, gerando dados randômicos e nomes  

---

## Como rodar o projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
