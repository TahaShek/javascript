let InputValue=()=>{
  try {
    let DivwhereIwantMymessage = document.querySelector('.showMessage')
    let MyInputField= document.querySelector('#exampleInputText1')
    let MyInputValue = document.querySelector('#exampleInputText1').value;
    let radiobutton= document.querySelector('#HelloRadio:checked').value
    let checkbox =document.querySelector('.Value1').value
    //  checkbox =document.querySelector('.Value2').value

    console.log(radiobutton);
    console.log(checkbox);
    
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
    // alert(error.message);
    console.log(error);
    
  }
}


let GetSevenValue=()=>{
    let sevenValue = parseInt(document.querySelector('.seven').dataset.seven);
    console.log(sevenValue);
}
let GetEightValue=()=>{
    let EightValue = parseInt(document.querySelector('.eight').dataset.eight);
    console.log(EightValue);
}

