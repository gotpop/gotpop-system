import { Button, Card, Text } from '@gotpop/ui'
import { ArrowRight, Check } from '@gotpop/icons'
import { colors, spacing } from '@gotpop/tokens'

// Sample data as specified in the design system spec
const sampleComponents = [
  { name: 'Button', description: 'Interactive button component with multiple variants' },
  { name: 'Card', description: 'Container component for grouping related content' },
  { name: 'Text', description: 'Typography component with size and weight variants' },
]

const sampleNavigation = [
  { name: 'Components', href: '/components' },
  { name: 'Tokens', href: '/tokens' },
  { name: 'Icons', href: '/icons' },
  { name: 'Guidelines', href: '/guidelines' },
]

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.gray[50], padding: spacing[8] }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <header style={{ marginBottom: spacing[12] }}>
          <Text as="h1" size="xl" weight="bold" color="default">
            Gotpop Design System
          </Text>
          <Text size="lg" color="muted" style={{ marginTop: spacing[2] }}>
            A comprehensive design system for gotpop projects
          </Text>
        </header>

        <nav style={{ marginBottom: spacing[12] }}>
          <div style={{ display: 'flex', gap: spacing[6] }}>
            {sampleNavigation.map((item) => (
              <Button key={item.name} variant="outline">
                {item.name}
                <ArrowRight size={16} />
              </Button>
            ))}
          </div>
        </nav>

        <main>
          <section style={{ marginBottom: spacing[12] }}>
            <Text as="h2" size="lg" weight="semibold" style={{ marginBottom: spacing[6] }}>
              Components
            </Text>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: spacing[6] }}>
              {sampleComponents.map((component) => (
                <Card key={component.name} padding="md">
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: spacing[3] }}>
                    <Check size={20} color={colors.success[500]} />
                    <Text as="h3" size="base" weight="semibold" style={{ marginLeft: spacing[2] }}>
                      {component.name}
                    </Text>
                  </div>
                  <Text size="sm" color="muted">
                    {component.description}
                  </Text>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <Text as="h2" size="lg" weight="semibold" style={{ marginBottom: spacing[6] }}>
              Design Tokens
            </Text>
            <Card padding="lg">
              <Text>
                Our design tokens provide a consistent foundation for colors, spacing, typography, and more.
                They ensure visual consistency across all gotpop projects.
              </Text>
              <div style={{ marginTop: spacing[4], display: 'flex', gap: spacing[4] }}>
                <Button variant="primary">
                  View Tokens
                </Button>
                <Button variant="secondary">
                  Guidelines
                </Button>
              </div>
            </Card>
          </section>
        </main>
      </div>
    </div>
  )
}