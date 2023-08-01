import { variables } from "./variable.js";

function convertExponent(expressionToken, expression) {
  if(expressionToken.includes('^'))
  {
    expression=expression.replace('^','**');
  }
  return expression;
}

function compareCalculatorConstants (expressionToken) {
  if ('Math.sin'.toUpperCase()===expressionToken.toUpperCase() || 
      'Math.cos'.toUpperCase()===expressionToken.toUpperCase() || 
      'Math.tan'.toUpperCase()===expressionToken.toUpperCase() || 
      'Math.PI'.toUpperCase()===expressionToken.toUpperCase() || 
      'Math.E'.toUpperCase()===expressionToken.toUpperCase()) 
      {
    return true;
  }
  return false;
}

function compareCalculatorFunctions (expressionToken) {
  if (expressionToken=='sin' || 
      expressionToken=='cos' || 
      expressionToken=='tan' || 
      expressionToken=='sqrt' || 
      expressionToken=='π')
  {
    return true;
  }
  return false;
}

function convertCalculatorFunctions(expressionToken)
{
  if(expressionToken=='sin')
  {
    return 'Math.sin';
  }
  else if(expressionToken=='cos')
  {
    return 'Math.cos';
  }
  else if (expressionToken=='tan')
  {
    return 'Math.tan';
  }
  else if (expressionToken=='sqrt')
  {
    return 'Math.sqrt';
  }
  else if (expressionToken=="π")
  {
    return 'Math.PI';
  }
}


function tokenizeAndConvertExpression()
{
  var expression = document.getElementById('expression').value;
  let temporaryExpression="";
  let expressionTokensArray=[];
  for(let i=0;i<expression.length;i++){
    if(!expression[i].match(/^[0-9a-zA-Z.π]+$/)){
      if(expression[i]=='^')
      {
        expressionTokensArray.push(expression[i]);
      }
      expressionTokensArray.push(temporaryExpression);
      temporaryExpression="";
    }
    else
    {
      temporaryExpression+=expression[i];
    }
  }
  expressionTokensArray.push(temporaryExpression);
  console.log(expressionTokensArray);
  for(let i=0;i<expressionTokensArray.length;i++)
  {
    expression = convertExponent(expressionTokensArray[i], expression);
    if(compareCalculatorFunctions(expressionTokensArray[i]))
    {
      expression=expression.replace(expressionTokensArray[i],convertCalculatorFunctions(expressionTokensArray[i]));
    }
    else if(isNaN(expressionTokensArray[i]) && !compareCalculatorConstants(expressionTokensArray[i]))
    {
      expression=expression.replace(expressionTokensArray[i],variables[expressionTokensArray[i]]);
    }
  }
  return expression;
}

export {variables,compareCalculatorConstants,compareCalculatorFunctions,convertCalculatorFunctions,tokenizeAndConvertExpression};