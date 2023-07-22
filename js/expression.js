import { variables } from "./variable.js";

function convertExponent(x, expression) {
  if(x.includes('^'))
  {
    console.log(x);
    let index = x.indexOf('^');
    let leftNum = x.slice(0,index);
    if(cmpTrigonometry(leftNum))
    {
      leftNum=convertTrigonometryfunc(leftNum);
    }
    else if(isNaN(leftNum) && !cmpString(leftNum))
    {
      leftNum=variables[leftNum];
    }
    let rightNum = x.slice(index+1);
    if(cmpTrigonometry(rightNum))
    {
      rightNum=convertTrigonometryfunc(rightNum);
    }
    else if(isNaN(rightNum) && !cmpString(rightNum))
    {
      rightNum=variables[rightNum];
    }
    let powerExpression = 'Math.pow(' + leftNum + ',' + rightNum + ')';
    expression = expression.replace(x,powerExpression);
  }
  return expression;
}

function cmpString (x) {
  if ('Math.sin'.toUpperCase()===x.toUpperCase() || 'Math.cos'.toUpperCase()===x.toUpperCase() || 'Math.tan'.toUpperCase()===x.toUpperCase() || 'Math.PI'.toUpperCase()===x.toUpperCase() || 'Math.E'.toUpperCase()===x.toUpperCase()) {
    return true;
  }
  return false;
}

function cmpTrigonometry (x) {
  if (x=='sin' || x=='cos' || x=='tan' || x=='sqrt' || x=='π')
  {
    return true;
  }
  return false;
}

function convertTrigonometryfunc(x)
{
  if(x=='sin')
  {
    return 'Math.sin';
  }
  else if(x=='cos')
  {
    return 'Math.cos';
  }
  else if (x=='tan')
  {
    return 'Math.tan';
  }
  else if (x=='sqrt')
  {
    return 'Math.sqrt';
  }
  else if (x=="π")
  {
    return 'Math.PI';
  }
}


function tokenizeAndConvertExpression()
{
  var expression = document.getElementById('expression').value;
  let temp="";
  let arr=[];
  for(let i=0;i<expression.length;i++){
    if(!expression[i].match(/^[0-9a-zA-Z.π^]+$/)){
      arr.push(temp);
      temp="";
    }
    else
    {
      temp+=expression[i];
    }
  }
  arr.push(temp);
  console.log(arr);
  for(let i=0;i<arr.length;i++)
  {
    expression = convertExponent(arr[i], expression);
    if(cmpTrigonometry(arr[i]))
    {
      console.log(expression);
      expression=expression.replace(arr[i],convertTrigonometryfunc(arr[i]));
      console.log(expression);
    }
    else if(isNaN(arr[i]) && !cmpString(arr[i]))
    {
      console.log(expression);
      expression=expression.replace(arr[i],variables[arr[i]]);
      console.log(expression);
    }
  }
  console.log(expression)
  return expression;
}

export {variables,cmpString,cmpTrigonometry,convertTrigonometryfunc,tokenizeAndConvertExpression};