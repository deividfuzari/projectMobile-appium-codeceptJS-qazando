@bdd_login
Feature: Login

  # isso explica o que a feature vai fazer

  # o ator usuario professor ou cliente
  Eu como Usuario

  # qual a ação que o ator vai fazer
  Gostaria de fazer Login

  # é o que vai dar valor de negocio, o objetivo da feature nosso exemplo é acessar o sistema
  Para acessar o sistema

  @bdd_login_succsess
  Scenario: login with succsess
    Given I fill email
    And I fill password
    When I tap on Entrar
    Then I see field Codigo
    And I see text Aluno
