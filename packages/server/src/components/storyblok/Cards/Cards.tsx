import type { CardsStoryblok } from "../../../types/storyblok-components"

interface CardsProps {
  blok: CardsStoryblok
}

// Simple card component for demo purposes
function DemoCard({ title, content }: { title: string; content: string }) {
  return (
    <div
      style={{
        border: "1px solid #e5e5e5",
        borderRadius: "8px",
        padding: "1rem",
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.25rem" }}>{title}</h3>
      <p style={{ margin: 0, color: "#666" }}>{content}</p>
    </div>
  )
}

export function Cards({ blok }: CardsProps) {
  return (
    <div
      className="cards-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      {blok.cards?.map((card, index) => (
        <DemoCard
          key={card._uid || index}
          title={`Card ${index + 1}`}
          content={`This is card content for ${card.component || "unknown"} component.`}
        />
      ))}
    </div>
  )
}
