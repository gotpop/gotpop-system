import type { RichTextCodeBlockStoryblok } from "../../../types/storyblok-components"
import { RichText } from "../../ui/RichText"
import "./RichTextCodeBlock.css"

interface RichTextCodeBlockProps {
  blok: RichTextCodeBlockStoryblok
}

export function RichTextCodeBlock({ blok }: RichTextCodeBlockProps) {
  const { content } = blok

  return <code-block>{content && <RichText content={content} />}</code-block>
}
