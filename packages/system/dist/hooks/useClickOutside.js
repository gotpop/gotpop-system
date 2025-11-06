import { useEffect } from "react";
export function useClickOutside(navId, isActive = true, onClickOutside) {
    useEffect(() => {
        if (!isActive)
            return;
        const handleClickOutside = (event) => {
            const navElement = document.getElementById(navId);
            const buttonElement = document.querySelector(`[aria-controls="${navId}"]`);
            if (navElement && !navElement.contains(event.target)) {
                // Don't trigger if clicking on the toggle button
                if (buttonElement?.contains(event.target)) {
                    return;
                }
                if (onClickOutside) {
                    onClickOutside();
                }
                else {
                    const isCurrentlyHidden = navElement.getAttribute("aria-hidden") === "true";
                    navElement.setAttribute("aria-hidden", (!isCurrentlyHidden).toString());
                }
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [navId, isActive, onClickOutside]);
}
//# sourceMappingURL=useClickOutside.js.map