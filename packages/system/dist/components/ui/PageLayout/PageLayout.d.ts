import type { ReactNode } from "react";
import "./PageLayout.css";
interface PageLayoutProps {
    children?: ReactNode;
    className?: string;
    header?: string;
    footer?: string;
}
export declare function PageLayout({ children, header, footer, }: PageLayoutProps): React.JSX.Element;
export {};
//# sourceMappingURL=PageLayout.d.ts.map