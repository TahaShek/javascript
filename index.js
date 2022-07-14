let InputValue=()=>{
  try {
    let DivwhereIwantMymessage = document.querySelector('.showMessage')
    let MyInputField= document.querySelector('#exampleInputText1')
    let MyInputValue = document.querySelector('#exampleInputText1').value;
    let radiobutton= document.querySelector('#HelloRadio').value
    
if(MyInputValue=== 'taha@gmail.com' )
{
    MyInputField.style.border='2px solid green';
    DivwhereIwantMymessage.innerHTML='Approved'
    

}    
else{
    MyInputField.style.border= '1px solid red'
    DivwhereIwantMymessage.innerHTML='Rejected'
}

  } catch (error) {
    alert(error.message);
    
  }
}