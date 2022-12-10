import { useEffect, useState } from "react";
interface IncreamentalCounterProps {
    startCounter: number;
    endCounter: number;
};

const IncreamentalCounter = ({ startCounter, endCounter }: IncreamentalCounterProps) => {
    const [counter, setCounter] = useState(startCounter);
    // const incVal = (endCounter - startCounter) > 0 ? 1 : -1; 

    useEffect(()=> {
        
        if (counter !== endCounter) {
            setTimeout(()=> {
                const incVal =  Math.floor((endCounter-startCounter) / 10);
                
                let finalCounter = counter + incVal;
                if((finalCounter > endCounter && incVal > 0) || (finalCounter < endCounter && incVal < 0)) {
                    finalCounter = endCounter;
                }
                setCounter(finalCounter);
            }, 100);
        }

    }, [counter])

    
    useEffect(() => {
        setCounter(startCounter + 1);
    }, [endCounter, endCounter]);

    return <>{counter}</>;
};

export default IncreamentalCounter;

