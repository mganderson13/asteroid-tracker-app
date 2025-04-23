import {useEffect, useState} from 'react';

export default function useNasaApi(dateToFetch) {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    const keyName = "lTHPxbpwqnn3thI5aiCieLtOpT1MZ85pxbkRI9tN" //process.env.NASA_API_KEY;

    const getAsteroidData = async () => {
        try {
        const response = await fetch(
            `https://api.nasa.gov/neo/rest/v1/feed?start_date=${dateToFetch}&end_date=${dateToFetch}&api_key=${keyName}`,
        );
        const json = await response.json();
        setData(json.near_earth_objects[dateToFetch]);
        console.log("data from hook:", data);
        } catch (error) {
        console.error(error);
        }finally {
        setIsLoading(false);
        }
    };

    useEffect(() => {
        if (dateToFetch) {
          setIsLoading(true);
          getAsteroidData();
        }
      }, [dateToFetch]);

    return { data, isLoading };
}
