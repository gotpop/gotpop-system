// Only import CSS when not in JSR/Deno environment
if (typeof window !== "undefined") {
  await import("./IconLogo.css")
}

export function IconLogo(): React.JSX.Element {
  return (
    <div className="circles">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  )
}
