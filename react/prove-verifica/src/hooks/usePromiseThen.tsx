import React, {useState, useEffect} from "react";

const usePromiseThen = () => {
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        console.log("1. Promise.then example");
        console.log("2. Start");
        
        const promise = new Promise<string>((resolve, reject) => {
            console.log("3. Promise Start");
            setTimeout(() =>{
                console.log("4. Promise Resolving...");
                console.log("5. Promise Resolved");
            }, 5000);
        });

        promise
            .then((value) => {
                setResult(value);
            })
            .catch((error) => {
                setError(error as string);
            })
            .finally(() => {
                setLoading(false);  
                console.log("7. Finally");
            });
        console.log("6. End");
    }, []);

    return {result, error, loading};
}

export default usePromiseThen;