let variables = {}
import { onNumClick } from "./handlerButtonClicks.js";
import { validateVariable} from "./validate.js";

function addVariable () {
  let variableName = document.getElementById('var-name-field')
  let variableValue = document.getElementById('var-value-field')

  if(validateVariable(variables, variableName, variableValue))
  {
    let variableField = document.getElementsByClassName('variable-stored');
    let btn = document.createElement('button');
    btn.className='var-btn';
    btn.id=variableName.value;
    btn.textContent=variableName.value+"="+variableValue.value;
    btn.value=variableValue.value;
    btn.onclick = () => {
        onNumClick(btn.id);
    };
    variableField[0].appendChild(btn);
    variables[variableName.value]=variableValue.value;
  }

  variableName.value="";
  variableValue.value=""
}

export {addVariable,variables};