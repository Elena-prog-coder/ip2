////всплывающее окно

function showWindow() {
    let el=document.getElementById('content_window');
     el.style.display = 'block';
     el.style.border='1px solid black';
     el.style.width = '300px';
     el.style.height='100px';
     el.style.marginLeft='490px';
     el.style.marginTop='50px';
     el.style.marginBottom='50px';
     el.innerHTML='Hello'
     el.style.paddingLeft='25px';
     el.style.textAlign='center';
  
 
 }
 document.querySelector('.header-button').addEventListener('click',showWindow);
 
 function close() {
     let el=document.getElementById('content_window');
     el.style.display='none';
 }
 
 document.getElementById('content_window').addEventListener('click',close);