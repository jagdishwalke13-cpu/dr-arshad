import React from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronRight, BookOpen, Activity, Apple, Dna } from 'lucide-react';
import './KnowledgeHub.css';

const articles = [
  {
    icon: <Activity size={24} />,
    title: "Understanding Immunotherapy: Is it Right for You?",
    excerpt: "Explore how stimulating the immune system is changing the landscape of cancer treatment and who benefits most.",
    category: "Treatment Options"
  },
  {
    icon: <BookOpen size={24} />,
    title: "Early Signs of Common Cancers in Men & Women",
    excerpt: "Awareness is the first step. Learn the subtle symptoms that shouldn't be ignored for early detection.",
    category: "Early Detection"
  },
  {
    icon: <Apple size={24} />,
    title: "Managing Treatment Side Effects with Nutrition",
    excerpt: "Dietary strategies to maintain strength, manage nausea, and support recovery during active therapy.",
    category: "Patient Care"
  },
  {
    icon: <Dna size={24} />,
    title: "The Importance of Genomic Testing in Cancer Diagnosis",
    excerpt: "How mapping the DNA of a tumor leads to highly personalized and effective targeted treatments.",
    category: "Advanced Diagnostics"
  }
];

const KnowledgeHub = () => {
  return (
    <section className="section section-bg-subtle knowledge-section">
      <div className="container">
        
        <div className="knowledge-header">
          <div>
            <h2 className="heading-lg">Empowering You with Cancer Information</h2>
            <p className="text-muted text-lg">Clear, medically accurate insights to help you make informed decisions.</p>
          </div>
          
          <div className="search-bar">
            <Search size={20} className="search-icon" />
            <input type="text" placeholder="Search articles, FAQs, topics..." className="search-input" />
            <button className="btn btn-primary search-btn">Search</button>
          </div>
        </div>

        <div className="articles-grid">
          {articles.map((article, index) => (
            <motion.div 
              key={index}
              className="article-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="article-icon-wrapper">
                {article.icon}
              </div>
              <div className="article-content">
                <span className="article-category">{article.category}</span>
                <h4 className="heading-sm article-title">{article.title}</h4>
                <p className="text-muted text-sm">{article.excerpt}</p>
                <a href="#" className="read-more">
                  Read Full Article <ChevronRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: '3rem' }}>
          <button className="btn btn-outline">View All Resources</button>
        </div>

      </div>
    </section>
  );
};

export default KnowledgeHub;
