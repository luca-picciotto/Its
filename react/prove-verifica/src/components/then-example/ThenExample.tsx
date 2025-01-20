import React from "react";
import usePromiseThen from "../../hooks/usePromiseThen";

const ThenExample = () => {
    const {result, error, loading} = usePromiseThen();

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error: {error}</p>;

    return <p>Result: {result} </p>
};

export default ThenExample;