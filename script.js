function calcNumbers(result){
  form.displayResult.value=form.displayResult.value+result;
}

function Clear(){
  form.displayResult.value=null;
}

function calcMult(){
  form.displayResult.value=form.displayResult.value+'*';
}

//form.displayResult.value = form.displayResult.value.substring(0, form.displayResul.length - 1)

function Delete(){
  form.displayResult.value = form.displayResult.value.substring(0, form.displayResult.length - 1);
}