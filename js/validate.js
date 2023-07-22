import { onNumClick } from "./handlerButtonClicks.js";

function validateVariable (variables ,variableName, variableValue)
{
  if(variables[variableName.value]!=undefined)
  {
    alert("Variable already exists");
    return false;
  }
  if (variableName.value.length == 0 || variableValue.value.length == 0) {
    alert("Fill the empty variable fields");
    return false;
  }
  if (isNaN(variableName.value) == false || isNaN(variableValue.value) == true || ((variableName.value[0]<'a' || variableName.value[0]>'z') && (variableName.value[0]<'A' || variableName.value[0]>'Z')))
  {
    alert("Make sure Variable Name starts with a character and Variable Value is a number");
    return false;
  }
  return true;
}

export { validateVariable };