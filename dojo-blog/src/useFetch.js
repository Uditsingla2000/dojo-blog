import { useEffect, useState } from 'react'


const useFetch = (link) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(link, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch data');
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null)
                })
                .catch((err) => {
                    if (err.name === "AbortError") {
                        console.log("fetch aborted");
                    }
                    else {
                        setError(err);
                        setIsPending(false);
                    }
                })
        }, 500)
        return () => console.log("cleanup ")
    }, [link]);

    return { data, isPending, error };
}

export default useFetch;

