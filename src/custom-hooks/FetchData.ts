// EXTERNAL IMPORTS
import React, { useState, useEffect } from 'react';  // will use these to send API call and keep data inside of the programs state

// INTERNAL IMPORTS
import { serverCalls } from '../api'; // gives us access to the server calls we just created


// creates the ability to create and store info into our project
export const useGetData = () => {
    // use the useState hook setting the data expected to any since we don't know 
    const [bookData, setData] = useState<any>([]);

    // we go out to get our API data and then store that data inside of bookData because the setData function sets the state
    async function handleDataFetch(){
        const result = await serverCalls.get();
        setData(result)
    }

    // Introducing the useEffect Hook to add our data to react State
    // this listens for any changes from the input into the browser from the user
    // [] tells the code to stop after the initial call to handleDataFetch
    useEffect( () => {
        handleDataFetch();
    }, [])

    return {bookData, getData:handleDataFetch}
}