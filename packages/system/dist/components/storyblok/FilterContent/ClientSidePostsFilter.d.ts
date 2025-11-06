import "./ClientSidePostsFilter.css";
interface TagEntry {
    name: string;
    value: string;
    id: number;
}
interface ClientSidePostsFilterProps {
    availableTags: TagEntry[];
    onTagChange: (tag: string) => void;
    currentTag: string;
}
export default function ClientSidePostsFilter({ availableTags, onTagChange, currentTag, }: ClientSidePostsFilterProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ClientSidePostsFilter.d.ts.map