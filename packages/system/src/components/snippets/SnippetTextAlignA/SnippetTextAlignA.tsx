// Only import CSS when not in JSR/Deno environment
if (typeof window !== "undefined") {
  await import("./SnippetTextAlignA.css")
}

export function SnippetTextAlignA(): React.JSX.Element {
  return (
    <div className="snippet-text-align-a">
      <h1>Example aligned text</h1>
    </div>
  )
}
