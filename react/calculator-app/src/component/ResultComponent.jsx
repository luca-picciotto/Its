import {add, subtract, multiply} from "../utils/mathFunctions";

function ResultComponent({activeValues, operators}) {
    if(activeValues.length  === 0) return <p>Risultato: 0</p>;

    const operationsMap =  {
        "+": add,
        "-": subtract,
        "*": multiply
    }

    const expression = activeValues.reduce((acc, value, index) => {
        if(index === 0) return `${value}`;
        const operator = operators[index - 1];

        return `${acc} ${operator} ${value}`;

    }, "");
    const result = activeValues.reduce((acc, value, index) => {
        if(index === 0) return value;  // Il primo valore è l'inizio
        const operator = operators[index - 1];  // Operatore precedente
        const operation = operationsMap[operator]; // Funzione corrispondente

        return operation([acc, value]);// Applica la funzione
    }, 0);  

    return (
        <p>{expression} = {result}</p>
    );

}

export default ResultComponent; 