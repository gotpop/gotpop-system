import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { render } from "storyblok-rich-text-react-renderer";
import { BaselineStatusBlock } from "../../storyblok/BaselineStatusBlock";
import { Card, Cards } from "../../storyblok/Cards";
import { FilterContent } from "../../storyblok/FilterContent";
import { HeroDefault } from "../../storyblok/HeroDefault";
import { LogoDefault } from "../../storyblok/LogoDefault";
import { RichTextBlock } from "../../storyblok/RichTextBlock";
import { RichTextCodeBlock } from "../../storyblok/RichTextCodeBlock";
import { SnippetBlock } from "../../storyblok/SnippetBlock";
import { Typography } from "../../storyblok/Typography";
export function RichText({ content }) {
    if (!content)
        return null;
    const renderedContent = render(content, {
        blokResolvers: {
            baseline_status_block: (props) => (_jsx(BaselineStatusBlock, { blok: props })),
            card: (props) => _jsx(Card, { blok: props }),
            cards: (props) => _jsx(Cards, { blok: props }),
            filter_content: () => _jsx(FilterContent, {}),
            hero_default: (props) => (_jsx(HeroDefault, { blok: props })),
            logo_default: (props) => (_jsx(LogoDefault, { blok: props })),
            rich_text_block: (props) => (_jsx(RichTextBlock, { blok: props })),
            rich_text_code_block: (props) => (_jsx(RichTextCodeBlock, { blok: props })),
            snippet_block: (props) => (_jsx(SnippetBlock, { blok: props })),
        },
        markResolvers: {
            link: (children, props) => (_jsx("a", { href: props.href, target: props.target, rel: props.target === "_blank" ? "noopener noreferrer" : undefined, children: children })),
            textStyle: (children) => _jsx(_Fragment, { children: children }),
            styled: (children) => _jsx(_Fragment, { children: children }),
            bold: (children) => _jsx("strong", { children: children }),
            italic: (children) => _jsx("em", { children: children }),
            underline: (children) => _jsx("u", { children: children }),
            strike: (children) => _jsx("del", { children: children }),
            code: (children) => _jsx("code", { children: children }),
        },
        nodeResolvers: {
            heading: (children, props) => {
                const level = props.level || 2;
                switch (level) {
                    case 1:
                        return (_jsx(Typography, { shade: "dark", tag: "h1", variant: "text-lg", children: children }));
                    case 2:
                        return (_jsx(Typography, { shade: "dark", tag: "h2", variant: "text-xl", children: children }));
                    case 3:
                        return (_jsx(Typography, { shade: "dark", tag: "h3", variant: "text-md", children: children }));
                    case 4:
                        return (_jsx(Typography, { shade: "dark", tag: "h4", variant: "text-md", children: children }));
                    case 5:
                        return (_jsx(Typography, { shade: "dark", tag: "h5", variant: "text-md", children: children }));
                    case 6:
                        return (_jsx(Typography, { shade: "dark", tag: "h6", variant: "text-md", children: children }));
                    default:
                        return (_jsx(Typography, { shade: "dark", tag: "h2", variant: "text-xl", children: children }));
                }
            },
            paragraph: (children) => (_jsx(Typography, { shade: "charcoal", tag: "p", variant: "text-base", children: children })),
            bullet_list: (children) => _jsx("ul", { children: children }),
            ordered_list: (children) => _jsx("ol", { children: children }),
            list_item: (children) => _jsx("li", { children: children }),
            blockquote: (children) => _jsx("blockquote", { children: children }),
            code_block: (children) => (_jsx("pre", { children: _jsx("code", { children: children }) })),
            hard_break: () => _jsx("br", {}),
        },
    });
    return renderedContent;
}
//# sourceMappingURL=RichText.js.map