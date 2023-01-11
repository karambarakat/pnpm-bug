import './tailwind.css'
// import '@fortawesome/fontawesome-free/css/all.min.css'

// pattern.width = 1200px
// pattern.hight = 800px
import pattern from '@/public/img/shades.png'
// import selector from '@/public/img/selector.png'
import selector from '@/public/img/selector-dev.png'
import React, { lazy, ReactNode } from 'react'
import Separator from '@/components/Separator'
import Button from '@/components/Button'
import HoverEffect from '@/components/HoverEffect'

interface Props {
  children: React.ReactNode
}

function Noise() {
  return (
    <svg width="100%" height="100%">
      <filter id="pedroduarteisalegend">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.80"
          numOctaves="4"
          stitchTiles="stitch"
        ></feTurbulence>
      </filter>
      <rect
        width="100%"
        height="100%"
        filter="url(#pedroduarteisalegend)"
      ></rect>
    </svg>
  )
}

function GradientBlur({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className="isolate relative">
      <img
        className={`z-1 relative max-w-none w-[1200px] ${
          inverted ? 'mix-blend-difference' : ''
        }`}
        alt="background-pattern"
        loading="lazy"
        src={pattern.src}
      />
      <g
        className="z-2 absolute top-0"
        style={{ mixBlendMode: inverted ? 'overlay' : 'multiply' }}
      >
        <HoverEffect inverted={inverted} />
      </g>
      <div className="bg-white absolute top-0 w-full h-full"></div>
    </div>
  )
}

function Background({ children: content }: { children: ReactNode }) {
  return (
    <div className="relative w-[800px] max-w-[100vw] mx-auto px-[25px] md:px-[50px]">
      <div className="print:hidden absolute pointer-events-none top-0 left-0 ml-[-200px] w-[1200px]">
        <GradientBlur />
      </div>
      <div className="print:hidden fixed pointer-events-none right-0 left-0 h-screen opacity-40">
        <Noise />
      </div>
      <div className="isolate">
        <div className="flex justify-center">{content}</div>
      </div>
    </div>
  )
}

export default function InnerLayout({ children }: Props) {
  return (
    <div className="overflow-x-hidden min-h-screen flex flex-col justify-between">
      <Background>
        <div className="flex flex-col gap-8 min-h-screen">
          {children}
          <Separator />
          <p className="text-center text-lg pb-8">
            Built with Typescript, NextJS and Tailwind | view the source on{' '}
            <Button size="normal">Github</Button>
          </p>
        </div>
      </Background>
    </div>
  )
}
