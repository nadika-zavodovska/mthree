import React, { useState } from 'react';

function DataFetcher() {
    // State to track whether data is still loading
    const [isLoading, setIsLoading] = useState(true);

    // State to store the data once it's fetched
    const [data, setData] = useState(null);

    // This runs on the first render because isLoading starts as true
    // It simulates fetching data from a server
    if (isLoading) {
        setTimeout(() => {
            setIsLoading(false); // Stop loading
            setData('Data loaded successfully!'); // Set the fetched data
        }, 3000);
    }

    return (
        <div>
            {/* If still loading, show loading message or show the data */}
            {isLoading ? <p>Loading data...</p> : data && <p>{data}</p>}
        </div>
    );
}

export default DataFetcher;
