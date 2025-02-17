import { useEffect, useState } from "react"

export default function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
            const result = await response.json();
            setData(result[currency]);
        };

        fetchData();
    }, [currency]);

    return data;
}