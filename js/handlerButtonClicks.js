import {variables,cmpString,cmpTrigonometry,convertTrigonometryfunc,tokenizeAndConvertExpression} from './expression.js';

function onNumClick (num) {
    const expression = document.getElementById('expression');
    let startPos = expression.selectionStart;

    if (expression.value[0]==0) {
        if (num!=0) {
            expression.value=num;
        }
    }
    else{
        expression.value=expression.value.slice(0,startPos)+num+expression.value.slice(startPos);
        console.log(expression.value)
    }

    expression.focus();
    expression.setSelectionRange(startPos+String(num).length, startPos+String(num).length);
}

function onClearClick() {
    const expression = document.getElementById('expression');
    const result = document.getElementById('result-output');
    expression.value="";
    result.value="";
}

function onDelClick() {
    const expression = document.getElementById('expression');
    expression.value=expression.value.slice(0,-1)
}

function onEqualClick() {
    let expression = tokenizeAndConvertExpression()
    const result = document.getElementById('result-output');
    if(expression.includes('/0'))
    {
        result.value='Cannot divide by 0';
    }
    else{
        console.log(expression);
        try {
            const answer = eval(expression);
            if (answer==undefined) {
                result.value="Enter Valid Expression"
            }
            else {
                result.value=answer.toFixed(4);
            } 
        } catch (error) {
            result.value=error.message;
        }
    }
}

export {onNumClick, onClearClick, onDelClick, onEqualClick};