import {useEffect, useState} from 'react';

export default function NasaApi() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    const keyName = process.env.NASA_API_KEY;
    const dateToFetch = "2025-04-21"

    const getAsteroidData = async () => {
        try {
        const response = await fetch(
            `https://api.nasa.gov/neo/rest/v1/feed?start_date=${dateToFetch}&end_date=${dateToFetch}&api_key=${keyName}`,
        );
        const json = await response.json();
        console.log("data from nasa api:", json.near_earth_objects[dateToFetch])
        setData(json.near_earth_objects[dateToFetch]);
        } catch (error) {
        console.error(error);
        }finally {
        setIsLoading(false);
        }
    };

    useEffect(() => {
    getAsteroidData();
    }, []);
}

getAsteroidData();
