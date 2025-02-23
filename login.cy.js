describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');//зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//про.цвет кнопки
         
         cy.get('#mail').type('german@dolnikov.ru');//ввели верный логин
         cy.get('#pass').type('iLoveqastudio1');//ввели верный пароль
         cy.get('#loginButton').click();//нажали Войти
         
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверяю,что вижу текст
         cy.get('#messageHeader').should('be.visible');//текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден
         
         
 
     })
       })
 
        it('Неверный пароль и верный логин', function () {
             cy.visit('https://login.qa.studio/');//зашли на сайт
             cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//про.цвет кнопки
             
             cy.get('#mail').type('german@dolnikov.ru');//ввели верный логин
             cy.get('#pass').type('iLoveqastudio2');//ввели неверный пароль
             cy.get('#loginButton').click();//нажали Войти
             
             cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверяю,что вижу текст
             cy.get('#messageHeader').should('be.visible');//текст виден пользователю
             cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден
                 
     
         })
           
         it('верный пароль и неверный логин', function () {
            cy.visit('https://login.qa.studio/');//зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//про.цвет кнопки
            
            cy.get('#mail').type('german@dolniko.ru');//ввели неверный логин
            cy.get('#pass').type('iLoveqastudio1');//ввели верный пароль
            cy.get('#loginButton').click();//нажали Войти
            
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверяю,что вижу текст
            cy.get('#messageHeader').should('be.visible');//текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден
                
    
        })
            it('Верный пароль и логин без @', function () {
                 cy.visit('https://login.qa.studio/');//зашли на сайт
                 cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//про.цвет кнопки
                 
                 cy.get('#mail').type('germandolnikov.ru');//ввели логин без @
                 cy.get('#pass').type('iLoveqastudio1');//ввели верный пароль
                 cy.get('#loginButton').click();//нажали Войти
                 
                 cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверяю,что вижу текст
                 cy.get('#messageHeader').should('be.visible');//текст виден пользователю
                 cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден
                 
                 
         
             })
             it('Проверка восстановления пароля', function () {
                cy.visit('https://login.qa.studio/');//зашли на сайт
                cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//про.цвет кнопки
                
                cy.get('#forgotEmailButton').click();//нажимаю восстановить пароль

                cy.get('#mailForgot').type('german@dolnikov.ru');//ввёл почту для восстановления
                cy.get('#restoreEmailButton').click();//нажала отправить код
                
                cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //проверяю,что вижу текст
                cy.get('#messageHeader').should('be.visible');//текст виден пользователю
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден
                
                
        
            })
           
            it('Верный пароль и логин GerMan@Dolnikov.ru', function () {
                cy.visit('https://login.qa.studio/');//зашли на сайт
                cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//про.цвет кнопки
                
                cy.get('#mail').type('GerMan@Dolnikov.ru');//ввели верный логин GerMan@Dolnikov.ru
                cy.get('#pass').type('iLoveqastudio1');//ввели верный пароль
                cy.get('#loginButton').click();//нажали Войти
                
                cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверяю,что вижу текст
                cy.get('#messageHeader').should('be.visible');//текст виден пользователю
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден
                
                
        
            })
            describe('Покупка аватара', function () {                                // название набора тестов
                it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
                     cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
                     cy.get('input[type="email"]').type('ekz.ekz79@yandex.ru');                   // вводим логин
                     cy.get('input[type="password"]').type('123QWe');               // вводим пароль
                     cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
                     cy.wait(2000);
                     cy.get('.header__container > .header__id').click({ force: true }); // Клик в шапке на аву тренера
                     cy.get('[href="/shop"]').click();                               // нажимаем кнопку Магазин
                     cy.get('.available > button').first().click({ force: true });   // кликаем Купить у первого доступного аватара
                     cy.get('.credit').type('4620869113632996');                     // вводим номер карты
                     cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
                     cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
                     cy.get('.k_input_name').type('NAME');                           // вводим имя владельца действия карты
                     cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
                     cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
                     cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
                     cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
                 });
             });
            
               
 
 // запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
 