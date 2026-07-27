import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import newsData from '../data/news.json';
import './NewsSection.css';

const ITEMS_PER_PAGE = 15;

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

/* ── Lightbox Gallery ── */
function Lightbox({ images, initialIndex = 0, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [images.length, onClose]);

  if (!images || images.length === 0) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Close modal">×</button>
        
        <div className="lightbox-main">
          {images.length > 1 && (
            <button className="lightbox-arrow left" onClick={handlePrev} aria-label="Previous figure">
              &#10094;
            </button>
          )}
          
          <img 
            src={images[currentIndex]} 
            alt={`expanded view ${currentIndex + 1}`} 
            className="lightbox-img" 
          />

          {images.length > 1 && (
            <button className="lightbox-arrow right" onClick={handleNext} aria-label="Next figure">
              &#10095;
            </button>
          )}
        </div>

        {images.length > 1 && (
          <div className="lightbox-footer">
            <span className="lightbox-counter">{currentIndex + 1} / {images.length}</span>
            <div className="lightbox-dots">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`lightbox-dot ${i === currentIndex ? 'active' : ''}`}
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Single news card with scroll-reveal title ── */
function NewsCard({ item }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [scrolling, setScrolling] = useState(false);
  const [lightboxState, setLightboxState] = useState({ isOpen: false, index: 0 });

  // Normalize images array (supports item.icons array or item.icon string/array)
  const images = Array.isArray(item.icons)
    ? item.icons
    : Array.isArray(item.icon)
    ? item.icon
    : item.icon
    ? [item.icon]
    : [];

  // Pick a random image index on initial load
  const [selectedIndex] = useState(() => {
    if (images.length > 0) {
      return Math.floor(Math.random() * images.length);
    }
    return 0;
  });

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
        className={`news-card${images.length > 0 ? '' : ' no-icon'}`}
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
        {images.length > 0 && (
          <div 
            className="nc-icon"
            onClick={() => setLightboxState({ isOpen: true, index: selectedIndex })}
            title={images.length > 1 ? "Click to enlarge gallery" : "Click to enlarge"}
          >
            <img src={images[selectedIndex]} alt={item.tag} />
            {images.length > 1 && (
              <span className="nc-icon-badge" title={`${images.length} figures available`}>
                🖼️ {images.length}
              </span>
            )}
          </div>
        )}
      </motion.div>

      {lightboxState.isOpen && (
        <Lightbox 
          images={images} 
          initialIndex={lightboxState.index} 
          onClose={() => setLightboxState({ isOpen: false, index: 0 })} 
        />
      )}
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
