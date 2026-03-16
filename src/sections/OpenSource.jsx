import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaCodeBranch, FaStar, FaExternalLinkAlt, FaHeart } from 'react-icons/fa'
import AnimatedSection from '../components/AnimatedSection'

const contributions = [
  {
    repo: 'facebook/react',
    description: 'Fixed a performance regression in the reconciler affecting list re-renders with keyed elements.',
    pr: '#28341',
    type: 'Bug Fix',
    stars: '228k',
    merged: true,
    color: '#61DAFB',
    emoji: '⚛️',
    date: 'Jan 2025',
  },
  {
    repo: 'vercel/next.js',
    description: 'Added documentation improvements and TypeScript type corrections for the App Router API.',
    pr: '#58792',
    type: 'Docs/Types',
    stars: '126k',
    merged: true,
    color: '#ffffff',
    emoji: '▲',
    date: 'Nov 2024',
  },
  {
    repo: 'expressjs/express',
    description: 'Improved error handling middleware documentation with real-world usage examples.',
    pr: '#5219',
    type: 'Docs',
    stars: '64k',
    merged: true,
    color: '#ffffff',
    emoji: '🚂',
    date: 'Sep 2024',
  },
  {
    repo: 'tailwindlabs/tailwindcss',
    description: 'Added missing utility class documentation for the new JIT mode arbitrary value syntax.',
    pr: '#14302',
    type: 'Docs',
    stars: '83k',
    merged: true,
    color: '#06B6D4',
    emoji: '💨',
    date: 'Jul 2024',
  },
  {
    repo: 'axios/axios',
    description: 'Contributed a fix for interceptor request cancellation edge case in retry logic.',
    pr: '#6123',
    type: 'Bug Fix',
    stars: '105k',
    merged: false,
    color: '#5A29E4',
    emoji: '📡',
    date: 'Jun 2024',
  },
]

const myOSS = [
  {
    name: 'react-scroll-reveal',
    desc: 'Lightweight React hook for scroll-triggered reveal animations using Intersection Observer.',
    stars: 234,
    forks: 41,
    language: 'TypeScript',
    langColor: '#3178C6',
    link: 'https://github.com',
  },
  {
    name: 'express-auth-kit',
    desc: 'Production-ready authentication boilerplate for Express.js with JWT, refresh tokens, and role-based access.',
    stars: 189,
    forks: 38,
    language: 'JavaScript',
    langColor: '#F7DF1E',
    link: 'https://github.com',
  },
  {
    name: 'cp-helper-cli',
    desc: 'CLI tool to auto-scaffold competitive programming solutions with templates for multiple OJs.',
    stars: 96,
    forks: 17,
    language: 'Python',
    langColor: '#3776AB',
    link: 'https://github.com',
  },
]

export default function OpenSource() {
  return (
    <section id="opensource" className="section">
      <div className="container">
        <AnimatedSection>
          <div className="section-line">
            <span className="badge">07. Open Source</span>
          </div>
          <h2 className="section-title">Open Source Contributions</h2>
          <p className="section-subtitle">
            Giving back to the community that gave me everything
          </p>
        </AnimatedSection>

        {/* External Contributions */}
        <AnimatedSection>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f1f5f9', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
            <FaCodeBranch style={{ color: '#6366f1' }} /> Merged Pull Requests
          </h3>
        </AnimatedSection>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 56 }}>
          {contributions.map((c, i) => (
            <motion.div
              key={c.pr}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="glow-card"
              style={{ padding: '18px 22px', display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}
            >
              <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{c.emoji}</span>
              <div style={{ flex: 1, minWidth: 200 }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap', marginBottom: 4 }}>
                  <span style={{ fontFamily: 'Fira Code, monospace', color: c.color, fontSize: '0.88rem', fontWeight: 600 }}>
                    {c.repo}
                  </span>
                  <span style={{
                    padding: '2px 8px', borderRadius: 50, fontSize: '0.66rem', fontWeight: 600,
                    background: c.merged ? 'rgba(16,185,129,0.1)' : 'rgba(245,158,11,0.1)',
                    color: c.merged ? '#10b981' : '#f59e0b',
                    border: `1px solid ${c.merged ? '#10b98140' : '#f59e0b40'}`,
                  }}>
                    {c.merged ? '✓ Merged' : '⟳ Pending'}
                  </span>
                  <span style={{ padding: '2px 8px', borderRadius: 50, fontSize: '0.66rem', fontWeight: 600, background: 'rgba(99,102,241,0.1)', color: '#6366f1', border: '1px solid rgba(99,102,241,0.3)' }}>
                    {c.type}
                  </span>
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.83rem', lineHeight: 1.5 }}>{c.description}</p>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{ color: '#f59e0b', fontSize: '0.78rem', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 4, justifyContent: 'flex-end' }}>
                  <FaStar /> {c.stars}
                </div>
                <div style={{ color: '#6366f1', fontSize: '0.72rem', fontFamily: 'Fira Code, monospace' }}>{c.pr}</div>
                <div style={{ color: '#475569', fontSize: '0.72rem', marginTop: 2 }}>{c.date}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Own OSS Projects */}
        <AnimatedSection>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f1f5f9', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
            <FaGithub style={{ color: '#6366f1' }} /> My Open Source Projects
          </h3>
        </AnimatedSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
          {myOSS.map((proj, i) => (
            <motion.div
              key={proj.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.03 }}
              className="glow-card"
              style={{ padding: 22 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                <FaGithub style={{ color: '#6366f1', fontSize: '1.2rem' }} />
                <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#6366f1'}
                  onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
                >
                  <FaExternalLinkAlt style={{ fontSize: '0.85rem' }} />
                </a>
              </div>
              <h4 style={{ fontFamily: 'Fira Code, monospace', color: '#f1f5f9', fontSize: '0.95rem', fontWeight: 600, marginBottom: 8 }}>
                {proj.name}
              </h4>
              <p style={{ color: '#94a3b8', fontSize: '0.82rem', lineHeight: 1.6, marginBottom: 16, flex: 1 }}>
                {proj.desc}
              </p>
              <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.78rem', color: '#94a3b8' }}>
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: proj.langColor, display: 'inline-block' }} />
                  {proj.language}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.78rem', color: '#f59e0b' }}>
                  <FaStar /> {proj.stars}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.78rem', color: '#94a3b8' }}>
                  <FaCodeBranch /> {proj.forks}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
