import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, Clock, ArrowRight, ChevronDown, SlidersHorizontal } from 'lucide-react';
import { client, urlFor, POSTS_QUERY, formatDate, formatReadTime, type BlogPost } from '../lib/sanity';

export function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    client
      .fetch<BlogPost[]>(POSTS_QUERY)
      .then(setPosts)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  // Derive unique categories from fetched posts
  const categories = ['All', ...Array.from(new Set(posts.map((p) => p.category).filter(Boolean)))];

  // Filtered posts based on selected category
  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter((p) => p.category === selectedCategory);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute top-0 right-0 w-64 h-64 lg:w-96 lg:h-96 text-primary opacity-20" viewBox="0 0 200 200" fill="currentColor">
            <path d="M100,20 Q150,40 160,90 Q170,140 140,170 L120,150 Q145,125 138,85 Q131,45 100,35 Z" />
            <path d="M100,20 Q90,50 95,90 Q100,130 120,150 L105,165 Q80,135 78,90 Q76,45 100,20 Z" />
          </svg>
          <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-accent/20"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-secondary/50"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl font-semibold mb-6">Blog & Resources</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, tips, and guidance on mental health, relationships, and personal growth.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">

          {/* ── Filter Bar ── */}
          {!loading && !error && posts.length > 0 && (
            <div className="flex items-center justify-between mb-10">
              <p className="text-muted-foreground text-sm">
                Showing <span className="font-medium text-foreground">{filteredPosts.length}</span> {filteredPosts.length === 1 ? 'article' : 'articles'}
                {selectedCategory !== 'All' && <> in <span className="font-medium text-primary">{selectedCategory}</span></>}
              </p>

              {/* Filter dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen((o) => !o)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-foreground/15 bg-white hover:bg-foreground/5 transition-colors text-sm font-medium"
                >
                  <SlidersHorizontal className="w-4 h-4 text-primary" />
                  Filter
                  {selectedCategory !== 'All' && (
                    <span className="ml-1 bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs">
                      {selectedCategory}
                    </span>
                  )}
                  <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-foreground/10 overflow-hidden z-50">
                    <div className="px-4 py-2.5 border-b border-foreground/5">
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Category</p>
                    </div>
                    <ul className="py-1">
                      {categories.map((cat) => (
                        <li key={cat}>
                          <button
                            onClick={() => { setSelectedCategory(cat); setDropdownOpen(false); }}
                            className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-secondary/60 flex items-center justify-between ${
                              selectedCategory === cat ? 'text-primary font-semibold' : 'text-foreground'
                            }`}
                          >
                            {cat}
                            {selectedCategory === cat && (
                              <span className="w-2 h-2 rounded-full bg-primary" />
                            )}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {loading && <p className="text-center text-muted-foreground">Loading articles…</p>}
          {error && <p className="text-center text-muted-foreground">Couldn't load articles. Please try again later.</p>}
          {!loading && !error && posts.length === 0 && (
            <p className="text-center text-muted-foreground">New articles are coming soon.</p>
          )}
          {!loading && !error && filteredPosts.length === 0 && posts.length > 0 && (
            <p className="text-center text-muted-foreground py-10">No articles found in <span className="font-medium">{selectedCategory}</span>.</p>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post._id}
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10"></div>
                  <ImageWithFallback
                    src={post.image ? urlFor(post.image).width(1080).height(700).fit('crop').url() : ''}
                    alt={post.imageAlt || post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 z-20">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{formatReadTime(post.readMinutes)}</span>
                    </div>
                  </div>
                  <h3 className="text-xl mb-3">{post.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm flex-grow">{post.excerpt}</p>
                  <div className="flex items-center mt-5 text-primary group-hover:underline">
                    <span className="text-sm">Read more</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA — unchanged */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-secondary/30 via-background to-accent/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6 text-white">Stay Connected</h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Subscribe for occasional updates, insights, and new resources. No spam — just helpful information when it matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex h-12 w-full rounded-full border border-white/20 bg-white/10 px-6 py-2 text-white placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                />
                <Button size="lg" variant="secondary" className="whitespace-nowrap rounded-full px-8">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}