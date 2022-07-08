describe('Логин на стаю и проверка авторизация и содержания ЛК', function () {
   it('Захожу на сайт staya.dog и авторизуюсь через некорректный пароль', function () {
        cy.visit('https://staya.dog/');
        cy.contains('Вход').click();
        cy.get("input[type ='email']").eq(0).type('obojealexander@gmail.com');
        cy.get("input[type ='password']").eq(0).type('Qwerty12').type('{enter}');
        cy.contains('Невозможно войти');
    })
})
