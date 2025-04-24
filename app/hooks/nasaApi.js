import {useEffect, useState} from 'react';
import Constants from 'expo-constants';

export default function useNasaApi(dateToFetch) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [count, setCount] = useState(0);

    const keyName = Constants.expoConfig.extra.API_KEY;;

    const getAsteroidData = async () => {
        try {
        const response = await fetch(
            `https://api.nasa.gov/neo/rest/v1/feed?start_date=${dateToFetch}&end_date=${dateToFetch}&api_key=${keyName}`,
        );
        const json = await response.json();
        setData(json.near_earth_objects[dateToFetch]);
        setCount(json.element_count);
        } catch (error) {
        console.log(error);
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

    return { data, isLoading, count };
}
