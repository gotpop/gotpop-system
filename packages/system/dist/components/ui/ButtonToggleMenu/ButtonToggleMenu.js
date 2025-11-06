"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId } from "react";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { useNavigationToggle } from "./useNavigationToggle";
import "./ButtonToggleMenu.css";
export function ButtonToggleMenu({ navId, }) {
    const { isExpanded, toggleMenu, closeMenu } = useNavigationToggle(navId);
    const id = useId();
    useClickOutside(navId, isExpanded, closeMenu);
    return (_jsxs("button", { "aria-controls": navId, "aria-expanded": isExpanded, "aria-haspopup": "true", "aria-label": "Toggle navigation", id: id, onClick: toggleMenu, type: "button", children: [_jsx("span", {}), _jsx("span", { hidden: true, children: "Toggle navigation" })] }));
}
//# sourceMappingURL=ButtonToggleMenu.js.map