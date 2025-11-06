import type { ReactNode } from "react"
import type {
  PageDefaultStoryblok,
  PageFilterStoryblok,
  PagePostStoryblok,
  StoryblokComponent,
} from "../../types/storyblok-components"
import { PageLayout, StoryblokServerComponent } from "../"
import { PostHeader } from "./PostHeader"

interface BasePageProps {
  Header?: string
  Footer?: string
  body?: StoryblokComponent[]
  children?: ReactNode
}

async function BasePage({ Header, Footer, body, children }: BasePageProps) {
  const blocks = body?.map((nestedBlok) => (
    <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
  ))

  return (
    <PageLayout header={Header} footer={Footer}>
      {children}
      {blocks}
    </PageLayout>
  )
}

export async function PageDefault({
  blok,
}: {
  blok: PageDefaultStoryblok
}): Promise<React.JSX.Element> {
  const { Header, Footer, body } = blok

  return <BasePage Header={Header} Footer={Footer} body={body} />
}

export async function PageFilter({
  blok,
}: {
  blok: PageFilterStoryblok
}): Promise<React.JSX.Element> {
  const { Header, Footer, body } = blok

  return <BasePage Header={Header} Footer={Footer} body={body} />
}

export async function PagePost({
  blok,
}: {
  blok: PagePostStoryblok
}): Promise<React.JSX.Element> {
  const {
    Header,
    Footer,
    Heading,
    published_date,
    body,
    view_transition_name,
  } = blok
  const blocks = body?.map((nestedBlok) => (
    <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
  ))

  return (
    <PageLayout header={Header} footer={Footer}>
      <PostHeader
        heading={Heading}
        publishedDate={published_date}
        style={{ viewTransitionName: view_transition_name }}
      />
      <main>{blocks}</main>
    </PageLayout>
  )
}
