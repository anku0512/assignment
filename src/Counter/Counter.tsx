import React, {useEffect, useState} from 'react';
import {Box, Button} from "@chakra-ui/react";
import "../App.css"



const COUNTER_STORAGE_KEY = 'counter_value';

function Counter() {
    const [count, setCount] = useState(0)

    function handleAdd() {
        setItemValue(count + 1)
    }

    function handleMinus() {
        setItemValue(Math.max(0, count - 1))

    }

    function handleReset() {
        setItemValue(0)

    }

    function setItemValue(count: number) {
        setCount(count);
        localStorage.setItem(COUNTER_STORAGE_KEY, count.toString());
    }

    useEffect(() => {
        const savedValue = localStorage.getItem(COUNTER_STORAGE_KEY);
        // {savedValue && setCount(parseInt(savedValue))}
        if (savedValue) {
            setCount(parseInt(savedValue))
        }
    }, []);
    return (
        <Box className='boxLayout' >
            <h1>{count}</h1>
            <Box sx={{display: 'flex', gap: 4}}>
                <Button colorScheme='blue' onClick={handleMinus}>-</Button>
                <Button colorScheme= 'blue' onClick={handleReset}>Reset</Button>
                <Button colorScheme= 'blue' onClick={handleAdd}>+</Button>
            </Box>
        </Box>
    );
}

export default Counter;