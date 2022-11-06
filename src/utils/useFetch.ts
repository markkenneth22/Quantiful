import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = <T>(url: string, initialValue: T) => {
    const [data, setData] = useState<T>(initialValue);
    const [loading, setLoading] = useState<Boolean>(true);
    useEffect(() => {
        axios
            .get<T>(url)
            .then(({ data }) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => console.log(error));
    }, [url]);
    return { loading, data };
};

export default useFetch;
