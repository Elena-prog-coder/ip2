///отправка формы на сервер
let user = [];

function addUser () {
    let input = document.querySelector('.input');
    let input2 = document.querySelector('.input2');

    let users = {
        input:input.value,
        input2:input2.value
    };
   
    user.push(users)
    input.value='';
    input2.value='';
    console.log(user);
   

}

document.querySelector('.button-form').addEventListener('click',addUser);


////всплывающее окно

let popup = document.getElementById('mypopup');
let popupTogle= document.querySelector('.header-button');
let popupClose = document.querySelector('.close');

popupTogle.onclick = function() {
    popup.style.display='block';
}
popupClose.onclick = function() {
    popup.style.display='none';
}
////отправка телефона popup
let bth = document.querySelector('.popup-button');
bth.onclick = function() {
    let popupInput = document.querySelector('.popup-input');
    console.log(popupInput.value);
    popupInput.value='';
}
