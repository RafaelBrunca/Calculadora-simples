function main(){
    var resp = document.getElementById('resp'); //Varavel da resposta da conta
    var num1 = parseFloat(document.getElementById("num1").value); //Valor do numero 1 e numero 2 (parsefloat seria um numero)
    var num2 = parseFloat(document.getElementById("num2").value);
    var texto=''; //Texto da resposta

    if(document.getElementById('soma').checked) //Se o "radio" estiver marcado como soma ele fará a soma e assim por diante.
        texto = soma(num1, num2);
    if(document.getElementById('subtracao').checked)
        texto = subtracao(num1, num2);
    if(document.getElementById('multiplicacao').checked)
        texto = multiplicacao(num1, num2);
    if(document.getElementById('divisao').checked)
        texto = divisao(num1, num2);

        resp.innerHTML = texto; //Resposta da conta na variavel "resp"
}

//Abaixo são as funções para cada calculo 

function soma(x, y)
{
  
  return (x+y);
}

function subtracao(x, y)
{
  
  return (x-y);
}

function multiplicacao(x, y)
{
  
  return (x*y);
}

function divisao(x, y)
{
  
  return (x/y);
}