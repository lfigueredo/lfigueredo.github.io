import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import newsData from '../data/news.json';
import './NewsSection.css';

const ITEMS_PER_PAGE = 10;

const TAG_COLORS = {
  Paper:        '#8fbc8f',
  Talk:         '#a0c4ff',
  Workshop:     '#d49595',
  Professional: '#a0c4ff',
  Event:        '#d49595',
  Award:        '#ffd166',
  Media:        '#f0a58f',
  Grant:        '#ffd166',
};

/* ── Lightbox ── */
function Lightbox({ src, onClose }) {
  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <img 
        src={src} 
        alt="expanded" 
        className="lightbox-img" 
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

/* ── Single news card with scroll-reveal title ── */
function NewsCard({ item }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [light, setLight] = useState(null);
  const [scrolling, setScrolling] = useState(false);

  // Globe only rotates while user is scrolling
  useEffect(() => {
    let timer;
    const onScroll = () => {
      setScrolling(true);
      clearTimeout(timer);
      timer = setTimeout(() => setScrolling(false), 500);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); clearTimeout(timer); };
  }, []);

  return (
    <>
      <motion.div
        ref={ref}
        className={`news-card${item.icon ? '' : ' no-icon'}`}
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45 }}
      >
        {/* Row 1, Col 1: globe + date/tag */}
        <div className="nc-meta">
          <span className={`nc-globe ${scrolling ? 'spinning' : ''}`}>🌐</span>
          <div className="nc-label">
            <span className="nc-date">{item.date}</span>
            <span className="nc-tag" style={{ color: TAG_COLORS[item.tag] || '#ccc' }}>{item.tag}</span>
          </div>
        </div>

        {/* Row 1, Col 2: title */}
        <div className="nc-title-wrap">
          <motion.h4
            className="nc-title"
            initial={{ y: 12, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            {item.link ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="nc-title-link">
                {item.title}
              </a>
            ) : item.title}
          </motion.h4>
        </div>

        {/* Row 2, spans Col 1-2: rule */}
        <div className="nc-rule" />

        {/* Row 3, spans Col 1-2: description */}
        <div className="nc-desc-wrap">
          <p className="nc-desc" dangerouslySetInnerHTML={{ __html: item.description }}></p>
          {item.links && item.links.length > 0 && (
            <div className="nc-buttons" style={{ marginTop: '8px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {item.links.map((btn, i) => (
                <a key={i} href={btn.url} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ padding: '0.2rem 0.6rem', fontSize: '0.75rem', lineHeight: '1.2' }}>
                  {btn.label || 'Read More'}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Col 3, spans rows 1-2: icon */}
        {item.icon && (
          <div 
            className="nc-icon"
            onClick={() => setLight(item.icon)}
            title="Click to enlarge"
          >
            <img src={item.icon} alt={item.tag} />
          </div>
        )}
      </motion.div>

      {light && <Lightbox src={light} onClose={() => setLight(null)} />}
    </>
  );
}

/* ── Main NewsSection ── */
export default function NewsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const sorted  = [...newsData].sort((a, b) => a.id - b.id);
  const total   = Math.ceil(sorted.length / ITEMS_PER_PAGE);
  const items   = sorted.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <section className="news-wrapper">
      {/* ── Baxter sketch – wider panel ── */}
      <div className="news-left-panel">
        <div
          className="news-left-bg"
          style={{ backgroundImage: "url(/figures/baxter_playingwithball_original__sketch2.png)" }}
        />
      </div>

      {/* ── Right content ── */}
      <div className="news-right-panel">
        <div className="news-header">
          <h2>Get the ball rolling:</h2>
          <h3>Latest News and Updates</h3>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {items.map((item) => <NewsCard key={item.id} item={item} />)}
          </motion.div>
        </AnimatePresence>

        <div className="news-pagination">
          {Array.from({ length: total }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              className={`news-page-btn${p === currentPage ? ' active' : ''}`}
              onClick={() => { setCurrentPage(p); window.scrollTo({ top: document.querySelector('.news-wrapper').offsetTop - 80, behavior: 'smooth' }); }}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
