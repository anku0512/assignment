import React, {useEffect, useState} from 'react';
import {Box, Button, Heading} from "@chakra-ui/react";




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
        if (savedValue) {
            setCount(parseInt(savedValue))
        }
    }, []);
    const backgroundHeight = `${100 - (count * 10)}%`
    const background = {
        backgroundColor: 'white',
        height: backgroundHeight,
        transition: `height 0.3s ease-in-out`,
    };

    return (
        <Box style={{backgroundColor: '#5078f2', backgroundImage: 'linear-gradient(315deg, #5078f2 0%, #efe9f4 74%)', borderWidth: "1px",
            borderRadius: "8px"}}>
        <Box  style={background}>
            <Box style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: "15rem"}}>
            <Heading>{count}</Heading>
            <Box sx={{display: 'flex', gap: 4}}>
                <Button colorScheme='blue' onClick={handleMinus}>-</Button>
                <Button colorScheme= 'blue' onClick={handleReset}>Reset</Button>
                <Button colorScheme= 'blue' onClick={handleAdd}>+</Button>
            </Box>
            </Box>

        </Box>
        </Box>
    );
}

export default Counter;