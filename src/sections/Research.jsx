import React from 'react'
import { motion } from 'framer-motion'
import { FaBook, FaExternalLinkAlt, FaQuoteLeft, FaAward } from 'react-icons/fa'
import AnimatedSection from '../components/AnimatedSection'

const publications = [
  {
    title: 'NLP-Based Intent Classification for E-Governance Chatbots: A BERT Fine-Tuning Approach',
    authors: 'A. Kumar, S. Sharma, P. Gupta',
    journal: 'IEEE International Conference on Artificial Intelligence (ICAI 2024)',
    year: '2024',
    type: 'Conference Paper',
    abstract: 'This paper presents a novel approach to intent classification for e-governance applications using fine-tuned BERT models, achieving 94.2% accuracy on a curated dataset of 50,000+ citizen queries across 35 intent categories.',
    doi: '10.1109/ICAI.2024.XXXXX',
    link: '#',
    status: 'Published',
    color: '#6366f1',
    emoji: '📄',
    citations: 12,
    index: 'IEEE Xplore',
  },
  {
    title: 'Efficient Resource Scheduling in Edge Computing Environments Using Reinforcement Learning',
    authors: 'A. Kumar, R. Mehta',
    journal: 'International Journal of Computer Science & Engineering (IJCSE)',
    year: '2024',
    type: 'Journal Article',
    abstract: 'We propose RL-EdgeSched, a reinforcement learning-based algorithm for dynamic task offloading and resource allocation in mobile edge computing. The approach reduces task completion time by 28% compared to baseline greedy methods.',
    doi: '10.XXXX/IJCSE.2024.XXXX',
    link: '#',
    status: 'Under Review',
    color: '#8b5cf6',
    emoji: '🔬',
    citations: 0,
    index: 'Scopus',
  },
]

const patents = [
  {
    title: 'Smart Grievance Routing System Using AI-Powered Classification',
    inventors: 'A. Kumar et al.',
    applicationNo: '202441XXXXXX',
    filingDate: 'Oct 2024',
    status: 'Filed',
    description: 'An AI-driven system that automatically classifies and routes citizen grievances to appropriate government departments with priority scoring based on urgency and sentiment analysis.',
    color: '#10b981',
    emoji: '⚙️',
  },
]

export default function Research() {
  return (
    <section id="research" className="section">
      <div className="container">
        <AnimatedSection>
          <div className="section-line">
            <span className="badge">09. Research</span>
          </div>
          <h2 className="section-title">Research & Publications</h2>
          <p className="section-subtitle">
            Contributing to the academic frontier of computer science
          </p>
        </AnimatedSection>

        {/* Publications */}
        <AnimatedSection>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f1f5f9', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
            <FaBook style={{ color: '#6366f1' }} /> Research Publications
          </h3>
        </AnimatedSection>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 56 }}>
          {publications.map((pub, i) => (
            <motion.div
              key={pub.doi}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glow-card"
              style={{ padding: 28 }}
            >
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 12, flexShrink: 0,
                  background: `${pub.color}20`, border: `1px solid ${pub.color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem',
                }}>
                  {pub.emoji}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 8, alignItems: 'center' }}>
                    <span style={{
                      padding: '3px 10px', borderRadius: 50, fontSize: '0.68rem', fontWeight: 600,
                      background: `${pub.color}15`, color: pub.color, border: `1px solid ${pub.color}40`
                    }}>
                      {pub.type}
                    </span>
                    <span style={{
                      padding: '3px 10px', borderRadius: 50, fontSize: '0.68rem', fontWeight: 600,
                      background: pub.status === 'Published' ? 'rgba(16,185,129,0.1)' : 'rgba(245,158,11,0.1)',
                      color: pub.status === 'Published' ? '#10b981' : '#f59e0b',
                      border: `1px solid ${pub.status === 'Published' ? '#10b98140' : '#f59e0b40'}`,
                    }}>
                      {pub.status === 'Published' ? '✓' : '⏳'} {pub.status}
                    </span>
                    <span style={{ color: '#475569', fontSize: '0.75rem' }}>{pub.index} · {pub.year}</span>
                  </div>

                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f1f5f9', marginBottom: 6, lineHeight: 1.5 }}>
                    {pub.title}
                  </h3>
                  <p style={{ color: '#6366f1', fontSize: '0.82rem', fontStyle: 'italic', marginBottom: 8 }}>
                    {pub.authors}
                  </p>
                  <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: 10, fontWeight: 500 }}>
                    {pub.journal}
                  </p>

                  {/* Abstract */}
                  <div style={{
                    background: 'rgba(99,102,241,0.05)', border: '1px solid rgba(99,102,241,0.15)',
                    borderRadius: 10, padding: '12px 14px', marginBottom: 14,
                    position: 'relative',
                  }}>
                    <FaQuoteLeft style={{ color: '#6366f1', fontSize: '0.7rem', marginRight: 8 }} />
                    <span style={{ color: '#94a3b8', fontSize: '0.82rem', lineHeight: 1.7 }}>{pub.abstract}</span>
                  </div>

                  <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
                    <span style={{ color: '#475569', fontSize: '0.78rem', fontFamily: 'Fira Code, monospace' }}>
                      DOI: {pub.doi}
                    </span>
                    {pub.citations > 0 && (
                      <span style={{ color: '#f59e0b', fontSize: '0.78rem' }}>📚 {pub.citations} citations</span>
                    )}
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" style={{
                      display: 'flex', gap: 4, alignItems: 'center',
                      color: pub.color, fontSize: '0.8rem', textDecoration: 'none',
                      marginLeft: 'auto',
                    }}>
                      <FaExternalLinkAlt style={{ fontSize: '0.65rem' }} /> View Paper
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Patents */}
        <AnimatedSection>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f1f5f9', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
            <FaAward style={{ color: '#10b981' }} /> Patent Applications
          </h3>
        </AnimatedSection>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {patents.map((patent, i) => (
            <motion.div
              key={patent.applicationNo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
              className="glow-card"
              style={{ padding: 24, display: 'flex', gap: 16, flexWrap: 'wrap' }}
            >
              <div style={{
                width: 50, height: 50, borderRadius: 12, flexShrink: 0,
                background: `${patent.color}20`, border: `1px solid ${patent.color}40`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem',
              }}>
                {patent.emoji}
              </div>
              <div style={{ flex: 1, minWidth: 200 }}>
                <div style={{ display: 'flex', gap: 8, marginBottom: 8, flexWrap: 'wrap', alignItems: 'center' }}>
                  <span style={{
                    padding: '3px 10px', borderRadius: 50, fontSize: '0.68rem', fontWeight: 600,
                    background: 'rgba(245,158,11,0.1)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.3)',
                  }}>
                    ⏳ {patent.status}
                  </span>
                  <span style={{ color: '#475569', fontSize: '0.75rem' }}>Filed: {patent.filingDate}</span>
                </div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f1f5f9', marginBottom: 6 }}>{patent.title}</h4>
                <p style={{ color: '#6366f1', fontSize: '0.8rem', marginBottom: 8 }}>Inventors: {patent.inventors}</p>
                <p style={{ color: '#94a3b8', fontSize: '0.82rem', lineHeight: 1.6 }}>{patent.description}</p>
                <p style={{ color: '#475569', fontSize: '0.75rem', marginTop: 10, fontFamily: 'Fira Code, monospace' }}>
                  Application No: {patent.applicationNo}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
