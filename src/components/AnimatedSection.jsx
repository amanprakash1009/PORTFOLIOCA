import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AnimatedSection({ children, className = '', style = {}, id }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    gsap.fromTo(el,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true }
      }
    )
  }, [])

  return (
    <div ref={ref} className={className} style={style} id={id}>
      {children}
    </div>
  )
}
