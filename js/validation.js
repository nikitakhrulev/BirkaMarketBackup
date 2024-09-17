const formS = document.getElementById('form1');
if (formS) {
    let validation = new JustValidate(formS);
    let selector = document.querySelector('#calculate-phone-input');
    let im = new Inputmask("+7(999)999-99-99");
    im.mask(selector);
    
    validation.addField('#calculate-quantity', [
        {
            rule: 'required',
            errorMessage: 'Укажите количество'
        },
    ])
    .addField('#calculate-phone-input', [
        {
            rule: 'required',
            errorMessage: 'Укажите ваш телефон'
        },
    ])
    .addField('#validate-checkbox', [
        {
            rule: 'required',
            errorMessage: 'Здесь необходимо ваше согласие'
        },
    ]).onSuccess(function () {
        formS.submit();
    });
}

const feedbackForm = document.getElementById('contact-form');
if (feedbackForm) {
    let validation2 = new JustValidate(feedbackForm);
    let selector2 = document.querySelector('#feedback-phone-input');
    let im2 = new Inputmask("+7(999)999-99-99");
    im2.mask(selector2);

    validation2.addField('#name', [
        {
            rule: 'required',
            errorMessage: 'Введите имя'
        },
    ])
    .addField('#email', [
        {
            rule: 'required',
            errorMessage: 'Укажите email'
        },
    ])
    .addField('#feedback-phone-input', [
        {
            rule: 'required',
            errorMessage: 'Укажите телефон'
        }
    ])
    .addField('#question', [
        {
            rule: 'required',
            errorMessage: 'Опишите ваш вопрос'
        }
    ])
    .addField('#validate-checkbox', [
        {
            rule: 'required',
            errorMessage: 'Здесь необходимо ваше согласие'
        },
    ]).onSuccess(function () {
        feedbackForm.submit();
    });
}