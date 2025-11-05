import type { SnippetBlockStoryblok } from "../../../types/storyblok-components"
import "./SnippetBlock.css"

interface SnippetBlockProps {
  blok: SnippetBlockStoryblok
}

function renderSnippet(snippetType?: string) {
  switch (snippetType) {
    case "text-align-a":
      return <div className="snippet-placeholder">Text Align A Snippet</div>
    case "text-align-b":
      return <div className="snippet-placeholder">Text Align B Snippet</div>
    default:
      return (
        <div className="snippet-placeholder">
          <p>Unknown snippet type: {snippetType || "none"}</p>
        </div>
      )
  }
}

export function SnippetBlock({ blok }: SnippetBlockProps) {
  const { snippet } = blok

  return <snippet-block>{renderSnippet(snippet)}</snippet-block>
}