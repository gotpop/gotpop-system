import type {
  RichTextBlockStoryblok,
  RichtextStoryblok,
} from "../../../types/storyblok-components"

interface RichTextBlockProps {
  blok: RichTextBlockStoryblok
}

interface TextNode {
  text?: string
  type?: string
}

interface ContentNode {
  type?: string
  content?: TextNode[]
}

export function RichTextBlock({ blok }: RichTextBlockProps) {
  const { content } = blok

  // Simple rich text rendering for design system
  const renderContent = (content: RichtextStoryblok | string | undefined) => {
    if (!content) return null

    if (typeof content === "string") {
      return <p>{content}</p>
    }

    // Basic rich text structure handling
    if (content.type === "doc" && content.content) {
      return (
        <div>
          {content.content.map((node: ContentNode) => (
            <div key={`${node.type}-${Math.random()}`}>
              {node.type === "paragraph" && node.content && (
                <p>
                  {node.content.map((textNode: TextNode) => (
                    <span key={`text-${textNode.text}-${Math.random()}`}>
                      {textNode.text || ""}
                    </span>
                  ))}
                </p>
              )}
              {node.type === "heading" && node.content && (
                <h2>
                  {node.content.map((textNode: TextNode) => (
                    <span key={`heading-${textNode.text}-${Math.random()}`}>
                      {textNode.text || ""}
                    </span>
                  ))}
                </h2>
              )}
            </div>
          ))}
        </div>
      )
    }

    return <div>Rich text content</div>
  }

  return <div className="rich-text-block">{renderContent(content)}</div>
}
