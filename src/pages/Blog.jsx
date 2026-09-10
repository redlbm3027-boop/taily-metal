import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Clock, Filter } from 'lucide-react';
import PageHero from '../components/PageHero';
import { blogPosts } from '../data/blog';

export default function Blog() {
  const [visibleCount, setVisibleCount] = useState(4);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const updateMeta = (name, content, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (el) el.setAttribute('content', content);
    };

    document.title = "Fastener Manufacturing Insights & Guides | Taily Metal Blog";
    updateMeta('description', "Practical guides on cold heading vs CNC machining, fastener material selection, and how to request quotes from China fastener factories.");
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', "https://www.taily-metal.com/blog/");

    updateMeta('og:url', "https://www.taily-metal.com/blog/", 'property');
    updateMeta('og:title', "Fastener Manufacturing Insights & Guides | Taily Metal Blog", 'property');
    updateMeta('og:description', "Practical guides on cold heading vs CNC machining, fastener material selection, and how to request quotes from China fastener factories.", 'property');
    
    document.body.setAttribute('data-page', 'blog');
  }, []);

  const categories = ['All', 'Case Studies', 'Technical Guides', 'Industry Trends'];
  
  const filteredPosts = blogPosts.filter(post => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Case Studies') return post.slug.includes('case-study');
    if (activeCategory === 'Technical Guides') return post.slug.includes('guide');
    if (activeCategory === 'Industry Trends') return !post.slug.includes('case-study') && !post.slug.includes('guide');
    return true;
  });

  const visiblePosts = filteredPosts.slice(0, visibleCount);

  return (
    <>
      <PageHero
        title="Technical Resources"
        subtitle="In-depth analysis of fastener challenges and technical manufacturing guides."
      />
      <section className="section">
        <div className="page-container max-w-4xl">
          {/* Category Filter - Compact */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-6 border-b border-gray-100">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mr-2 flex items-center gap-1">
              <Filter size={12} /> Topics:
            </span>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setVisibleCount(4); }}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${activeCategory === cat ? 'bg-[#c47a4a] text-white shadow-md' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visiblePosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}/`}
                className="card group block p-6 transition-all duration-300 hover:border-[#c47a4a]"
                style={{ border: '1px solid var(--color-border)' }}
              >
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--color-accent)' }}>
                  <span className="inline-flex items-center gap-1.5"><CalendarDays size={12} /> {post.date}</span>
                  <span className="inline-flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
                </div>
                <h2 className="text-lg font-bold mb-3 leading-snug group-hover:text-[#c47a4a] transition-colors"
                  style={{ color: 'var(--color-text-strong)' }}>
                  {post.title}
                </h2>
                <p className="text-sm leading-relaxed mb-4 text-gray-500 line-clamp-3">{post.excerpt}</p>
                <span className="text-xs font-black uppercase tracking-widest inline-flex items-center gap-1.5" style={{ color: 'var(--color-text-strong)' }}>
                  Read More <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          {visibleCount < filteredPosts.length && (
            <div className="mt-12 text-center">
              <button 
                onClick={() => setVisibleCount(prev => prev + 4)}
                className="btn-secondary text-sm px-10 py-3"
              >
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
