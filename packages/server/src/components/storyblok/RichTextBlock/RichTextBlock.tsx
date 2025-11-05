import type { RichTextBlockStoryblok } from "../../../types/storyblok-components"
import { RichText } from "../../ui/RichText"

interface RichTextBlockProps {
  blok: RichTextBlockStoryblok
}

export function RichTextBlock({ blok }: RichTextBlockProps): React.JSX.Element {
  const { content } = blok

  return <div>{content && <RichText content={content} />}</div>
}
