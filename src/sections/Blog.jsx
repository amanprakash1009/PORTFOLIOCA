import React from 'react'
import { motion } from 'framer-motion'
import { FaPen, FaExternalLinkAlt, FaCalendar, FaClock, FaTag } from 'react-icons/fa'
import AnimatedSection from '../components/AnimatedSection'

const posts = [
  {
    title: 'Building Scalable REST APIs with Node.js & Clean Architecture',
    excerpt: 'A deep dive into structuring Express.js applications using domain-driven design, repository patterns, and dependency injection for maintainability at scale.',
    date: 'Feb 2025',
    readTime: '12 min',
    tags: ['Node.js', 'Architecture', 'Best Practices'],
    emoji: '🏗️',
    platform: 'Dev.to',
    link: 'https://dev.to',
    color: '#6366f1',
    views: '8.2k',
  },
  {
    title: 'Understanding React Server Components: A Practical Guide',
    excerpt: 'Exploring Next.js 14 Server Components from a first-principles perspective — when to use them, how they differ from client components, and real performance benchmarks.',
    date: 'Jan 2025',
    readTime: '10 min',
    tags: ['React', 'Next.js', 'Performance'],
    emoji: '⚛️',
    platform: 'Medium',
    link: 'https://medium.com',
    color: '#06b6d4',
    views: '5.1k',
  },
  {
    title: 'Segment Trees Explained: From Theory to Codeforces Problems',
    excerpt: 'A visual, beginner-friendly walkthrough of segment trees with lazy propagation, covering 5 classic competitive programming problems and their implementations in C++.',
    date: 'Nov 2024',
    readTime: '15 min',
    tags: ['DSA', 'Competitive Programming', 'C++'],
    emoji: '🌳',
    platform: 'Dev.to',
    link: 'https://dev.to',
    color: '#10b981',
    views: '12.4k',
  },
  {
    title: 'Docker & Kubernetes for Developers: A Hands-On Tutorial',
    excerpt: 'Container orchestration demystified — provisioning a Node.js microservice from a Dockerfile to a fully managed Kubernetes cluster with health checks and autoscaling.',
    date: 'Sep 2024',
    readTime: '18 min',
    tags: ['Docker', 'Kubernetes', 'DevOps'],
    emoji: '🐳',
    platform: 'Hashnode',
    link: 'https://hashnode.com',
    color: '#2496ED',
    views: '6.7k',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="section" style={{ background: 'rgba(10, 15, 46, 0.4)' }}>
      <div className="container">
        <AnimatedSection>
          <div className="section-line">
            <span className="badge">08. Blog</span>
          </div>
          <h2 className="section-title">Blog & Technical Writing</h2>
          <p className="section-subtitle">
            Sharing knowledge, one article at a time
          </p>
        </AnimatedSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="glow-card"
              style={{ padding: 24, display: 'flex', flexDirection: 'column' }}
            >
              {/* Top accent line */}
              <div style={{ height: 3, background: `linear-gradient(90deg, ${post.color}, transparent)`, borderRadius: 2, marginBottom: 20, marginLeft: -24, marginRight: -24, marginTop: -24, borderTopLeftRadius: 16, borderTopRightRadius: 16 }} />

              {/* Platform badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <span style={{
                  padding: '3px 10px', borderRadius: 50, fontSize: '0.7rem', fontWeight: 600,
                  background: `${post.color}20`, color: post.color, border: `1px solid ${post.color}40`
                }}>
                  {post.platform}
                </span>
                <span style={{ fontSize: '2rem' }}>{post.emoji}</span>
              </div>

              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f1f5f9', marginBottom: 10, lineHeight: 1.5, flex: 0 }}>
                {post.title}
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.84rem', lineHeight: 1.7, flex: 1, marginBottom: 16 }}>
                {post.excerpt}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                {post.tags.map(tag => (
                  <span key={tag} style={{
                    padding: '3px 10px', borderRadius: 6,
                    background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)',
                    fontSize: '0.7rem', color: '#6366f1', fontFamily: 'Fira Code, monospace',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: 14 }}>
                  <span style={{ color: '#475569', fontSize: '0.75rem', display: 'flex', gap: 4, alignItems: 'center' }}>
                    <FaCalendar style={{ fontSize: '0.65rem' }} /> {post.date}
                  </span>
                  <span style={{ color: '#475569', fontSize: '0.75rem', display: 'flex', gap: 4, alignItems: 'center' }}>
                    <FaClock style={{ fontSize: '0.65rem' }} /> {post.readTime}
                  </span>
                  <span style={{ color: '#475569', fontSize: '0.75rem' }}>👁 {post.views}</span>
                </div>
                <a href={post.link} target="_blank" rel="noopener noreferrer" style={{
                  color: post.color, fontSize: '0.8rem', textDecoration: 'none',
                  display: 'flex', gap: 4, alignItems: 'center',
                }}>
                  Read <FaExternalLinkAlt style={{ fontSize: '0.65rem' }} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatedSection style={{ textAlign: 'center', marginTop: 40 }}>
          <a href="https://dev.to" target="_blank" rel="noopener noreferrer" className="btn-outline">
            <FaPen /> Read All Articles
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
