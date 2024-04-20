// components.js
'use client'
import React, { useState, useEffect } from 'react';

export async function fetchFeedData() {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return res.json();
}

export default function PostFeed() {
    const [feedData, setFeedData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFeedData();
            setFeedData(data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Feed</h1>
            {feedData && <div>{feedData.title}</div>}
        </div>
    );
}