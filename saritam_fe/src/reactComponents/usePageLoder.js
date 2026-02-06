import { useEffect, useState } from "react";

const usePageLoader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const onPageLoad = () => setLoading(false);

        if (document.readyState === "complete") {
            setLoading(false);
        } else {
            window.addEventListener("load", onPageLoad);
        }

        return () => window.removeEventListener("load", onPageLoad);
    }, []);

    return loading;
};

export default usePageLoader;
