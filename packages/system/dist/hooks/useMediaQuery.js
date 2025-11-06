import { useEffect, useState } from "react";
export function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        // Set initial value
        setMatches(mediaQuery.matches);
        const handleChange = () => {
            setMatches(mediaQuery.matches);
        };
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [query]);
    return matches;
}
//# sourceMappingURL=useMediaQuery.js.map