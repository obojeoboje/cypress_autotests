
describe('Тестирование поиска картинок', function () {
   it('Проверка, что при поиске в яндексе "Котята" на странице есть "Картинки по запросу котята"', function () {
        cy.visit('https://yandex.ru/');
        cy.get("input[id='text']").type('котята').type('{enter}');
        cy.contains('Картинки по запросу «котята»');
    })
})
