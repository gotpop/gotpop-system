import type { RichTextCodeBlockStoryblok } from "../../../types/storyblok-components"
import { RichText } from "../../ui/RichText"

import("./RichTextCodeBlock.css")

interface RichTextCodeBlockProps {
  blok: RichTextCodeBlockStoryblok
}

export function RichTextCodeBlock({
  blok,
}: RichTextCodeBlockProps): React.JSX.Element {
  const { content } = blok

  return <div>{content && <RichText content={content} />}</div>
}
