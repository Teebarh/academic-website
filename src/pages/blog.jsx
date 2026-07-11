import { BlogSection } from "../assets/styles";
import Nav from "../comp/LandingPage/nav";
import Footer from "../comp/LandingPage/footer";
import blog1 from "../assets/img/blog1.webp"
import blog2 from "../assets/img/blog2.webp"
import blog3 from "../assets/img/blog3.png"
import blog4 from "../assets/img/blog4.png"

const blogPosts = [
  {
    id: 1,
    title: "Living the Magic of the Indaba for the First Time",
    excerpt: "Reflecting on attending the Deep Learning Indaba 2025 in Kigali, Rwanda, and how it shaped my understanding of AI research and community across Africa.",
    author: "Toyibat Adele",
    date: "Aug 29, 2025",
    readTime: "12 min read",
    image: blog1,
    links: [
      {
        text: "Read on Medium",
        url: "https://medium.com/@Toyibat_Adele/living-the-magic-of-the-indaba-for-the-first-time-6989de08dfa5"
      }
    ]
  },
  {
    id: 3,
    title: "A Beginner-Friendly Review of Trustworthiness in Vision Language Multimodal AI Systems",
    excerpt: "A beginner-friendly look at trustworthiness challenges in vision-language multimodal AI systems.",
    author: "Toyibat Adele",
    publication: "Hashnode",
    date: "May 2025",
    readTime: "",
    image: blog3,
    links: [
      {
        text: "Read on Hashnode",
        url: "https://toyibatadele.hashnode.dev/a-review-of-trustworthiness-in-vision-language-multimodal-ai-systems"
      }
    ]
  },
  {
    id: 2,
    title: "My Experience Attending PyCon Africa for the First Time",
    excerpt: "Reflections from my first PyCon Africa, engaging with developers from across the continent.",
    author: "Toyibat Adele",
    publication: "Python in Plain English",
    date: "2024",
    readTime: "",
    image: blog2,
    links: [
      {
        text: "Read on Medium",
        url: "https://medium.com/python-in-plain-english/my-experience-attending-pycon-africa-for-the-first-time-5623daa93f3f"
      }
    ]
  },
  {
    id: 4,
    title: "My 2022 Wrapped: Dev Retro 2022",
    excerpt: "A retrospective on 2022 — growth, milestones, and lessons learned over the year.",
    author: "Toyibat Adele",
    publication: "Hashnode",
    date: "Dec 2022",
    readTime: "",
    image: blog4,
    links: [
      {
        text: "Read on Hashnode",
        url: "https://toyibatadele.hashnode.dev/my-2022-wrapped-dev-retro-2022"
      }
    ]
  }
];

const Blog = () => {
  return (
    <>
      <Nav />
      <BlogSection>
        <div className="blog-header">
          <h1>Blog</h1>
          <p>Thoughts, insights, and experiences from my journey in engineering and technology</p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <div className="blog-overlay">
                {post.publication && (
                    <span className="publication-badge">{post.publication}</span>
                )}
                </div>
              </div>

              <div className="blog-content">
                <div className="blog-meta">
                  {post.date && <span className="blog-date">{post.date}</span>}
                  {post.readTime && <span className="blog-read-time">{post.readTime}</span>}
                </div>

                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>

                <div className="blog-links">
                  {post.links && post.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="blog-link"
                    >
                      Link to Blog
                    </a>
                  ))}
                </div>

                <div className="blog-author">
                  <span>By {post.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </BlogSection>
      <Footer />
    </>
  );
};

export default Blog;
