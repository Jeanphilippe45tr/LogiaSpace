import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import BlogCard from '../components/BlogCard';

const blogs = [
  {
    id: 1,
    title: 'How to Build a Professional Business Website',
    category: 'Web Development',
    author: 'Logia Space Team',
    date: '12 Mar, 2026',
    image: '/img/blog-1.jpg',
    excerpt: 'Learn the key steps, tools, and best practices to create a modern, secure, and scalable website that attracts customers and grows your brand.',
  },
  {
    id: 2,
    title: 'Why Every Startup Needs a Digital Presence',
    category: 'Digital Strategy',
    author: 'Logia Space Team',
    date: '05 Mar, 2026',
    image: '/img/blog-2.jpg',
    excerpt: 'Discover how websites, SEO, and digital tools help startups increase visibility, build trust, and reach the right customers faster.',
  },
  {
    id: 3,
    title: 'Choosing the Right Technology for Your Project',
    category: 'Technology',
    author: 'Logia Space Team',
    date: '26 Feb, 2026',
    image: '/img/blog-3.jpg',
    excerpt: 'From frontend frameworks to backend solutions, learn how to choose the right technologies based on performance, budget, and scalability.',
  },
];

export default function Blog() {
  const [active, setActive] = useState('all');
  const categories = ['all', 'Web Development', 'Digital Strategy', 'Technology'];

  return (
    <main>
      <PageHeader title="Our Blog" breadcrumb="Blog" />
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
            <h5 className="fw-bold text-primary text-uppercase">Our Blog</h5>
            <h1 className="mb-0">Insights, Tips & Updates from the Logia Space Team</h1>
          </div>
          <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.2s">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`btn btn-outline-primary me-2 mb-2 ${active === cat ? 'bg-primary text-white border-primary' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="row g-5">
            {blogs
              .filter((b) => active === 'all' || b.category === active)
              .map((blog, i) => (
                <BlogCard key={blog.id} {...blog} delay={`${0.3 * (i + 1)}s`} />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
