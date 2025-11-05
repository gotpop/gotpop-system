import type { RichTextBlockStoryblok } from "../../../types/storyblok-components"
import { RichText } from "../../ui/RichText"

interface RichTextBlockProps {
  blok: RichTextBlockStoryblok
}

export function RichTextBlock({ blok }: RichTextBlockProps) {
  const { content } = blok

  return <box-grid>{content && <RichText content={content} />}</box-grid>
}
