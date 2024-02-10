import React, {useEffect, useState} from 'react';
import {Box, Button, Heading} from "@chakra-ui/react";
import "../App.css"



const COUNTER_STORAGE_KEY = 'counter_value';
const MAX_COUNTER_VALUE = 10;
function Counter() {
    const [count, setCount] = useState(0)

    function handleAdd() {
        setItemValue(Math.min(count + 1, MAX_COUNTER_VALUE));
        console.log(count)
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
        <Box className='boxLayout' backgroundColor='transparent'>
            <Heading>{count}</Heading>
            <Box sx={{display: 'flex', gap: 4}}>
                <Button colorScheme='blue' onClick={handleMinus}>-</Button>
                <Button colorScheme= 'blue' onClick={handleReset}>Reset</Button>
                <Button colorScheme= 'blue' onClick={handleAdd}>+</Button>
            </Box>
        </Box>
    );
}

export default Counter;