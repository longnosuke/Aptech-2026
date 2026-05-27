import type { ComponentType } from 'react'
import { painPoints } from '../data/painPoints'
import { popularityReasons } from '../data/popularity'
import { SlideAgenda } from './SlideAgenda'
import { SlideAIDemo, SlideAIIntro } from './SlideAI'
import { SlideButtonCompare } from './SlideButtonCompare'
import { SlideCompare } from './SlideCompare'
import { SlideEnd } from './SlideEnd'
import { SlidePainPoint } from './SlidePainPoint'
import { SlidePopular } from './SlidePopular'
import { SlideProduction } from './SlideProduction'
import { SlideProsCons } from './SlideProsCons'
import { SlideTitle } from './SlideTitle'
import { SlideWhatIsIntro } from './SlideWhatIsIntro'

export interface SlideEntry {
  id: string
  title: string
  chapter?: string
  Component: ComponentType
}

function painSlide(index: number): SlideEntry {
  const p = painPoints[index]
  return {
    id: `pain-${p.id}`,
    title: p.title,
    chapter: 'Tại sao?',
    Component: () => <SlidePainPoint pointIndex={index} />,
  }
}

function popularSlide(index: number): SlideEntry {
  const r = popularityReasons[index]
  return {
    id: `popular-${index}`,
    title: r.title,
    chapter: 'Phổ biến',
    Component: () => <SlidePopular reasonIndex={index} />,
  }
}

export const slides: SlideEntry[] = [
  { id: 'title', title: 'Giới thiệu', Component: SlideTitle },
  { id: 'agenda', title: 'Mục lục', chapter: 'Intro', Component: SlideAgenda },
  {
    id: 'what-intro',
    title: 'Tailwind là gì?',
    chapter: 'Phần 1',
    Component: SlideWhatIsIntro,
  },
  {
    id: 'what-demo',
    title: 'Demo: Button so sánh',
    chapter: 'Phần 1',
    Component: SlideButtonCompare,
  },
  ...painPoints.map((_, i) => painSlide(i)),
  {
    id: 'compare',
    title: 'So sánh tương tác',
    chapter: 'Phần 3',
    Component: SlideCompare,
  },
  ...popularityReasons.map((_, i) => popularSlide(i)),
  {
    id: 'production',
    title: 'Production patterns',
    chapter: 'Phần 5',
    Component: SlideProduction,
  },
  {
    id: 'pros',
    title: 'Lợi ích',
    chapter: 'Phần 6',
    Component: () => <SlideProsCons variant="pros" />,
  },
  {
    id: 'cons',
    title: 'Hạn chế',
    chapter: 'Phần 6',
    Component: () => <SlideProsCons variant="cons" />,
  },
  {
    id: 'ai-intro',
    title: 'Tailwind + AI',
    chapter: 'Phần 7',
    Component: SlideAIIntro,
  },
  {
    id: 'ai-demo',
    title: 'AI Mock Demo',
    chapter: 'Phần 7',
    Component: SlideAIDemo,
  },
  { id: 'end', title: 'Kết thúc', Component: SlideEnd },
]
