'use client'

import { useState } from 'react'
import { BlogCard } from './BlogCard'
import { Pagination } from '@/components/Pagination'


export const blogPosts = [
    {
        id: 1,
        title: "The Future of Web Development",
        description: `
      <h2>Introduction</h2>
      <p>Web development is evolving rapidly with modern <strong>JavaScript frameworks</strong> like React, Vue, and Svelte. Developers are now able to create <em>high-performance, interactive applications</em> efficiently.</p>
      <img src="https://images.unsplash.com/photo-1590608897129-79d22f3eeb09?auto=format&fit=crop&w=600&q=80" alt="Web development" />

      <h2>Modern Frontend Techniques</h2>
      <p>There are three major approaches to rendering web pages:</p>
      <ul>
        <li>Client-side rendering (CSR)</li>
        <li>Server-side rendering (SSR)</li>
        <li>Static site generation (SSG)</li>
      </ul>
      <p>Each approach has its own benefits depending on the project requirements.</p>

      <h2>Next.js Advantage</h2>
      <p>Using <a href="https://nextjs.org/">Next.js</a> allows developers to build production-ready apps with ease. It combines the benefits of SSR and SSG, giving the best of both worlds.</p>
      <img src="https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=600&q=80" alt="Next.js" />

      <h2>Conclusion</h2>
      <p>Staying updated with modern web technologies is essential. Embrace frameworks like React and Next.js to deliver robust and scalable applications.</p>
    `,
        date: "January 06, 2025",
        image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        title: "Getting Started with TypeScript",
        description: `
      <h2>Introduction</h2>
      <p>TypeScript is a <strong>typed superset of JavaScript</strong> that helps catch errors early and improves code quality.</p>
      <img src="https://images.unsplash.com/photo-1581090700227-0d77a0a3c8e4?auto=format&fit=crop&w=600&q=80" alt="TypeScript" />

      <h2>Benefits of TypeScript</h2>
      <p>Using TypeScript can drastically improve:</p>
      <ul>
        <li>Code readability and maintainability</li>
        <li>Early detection of errors</li>
        <li>Better collaboration in large teams</li>
      </ul>

      <h2>Getting Started</h2>
      <ol>
        <li>Install TypeScript via npm or yarn</li>
        <li>Configure <code>tsconfig.json</code></li>
        <li>Start converting your JavaScript code to TypeScript</li>
      </ol>
      <p>Refer to the <a href="https://www.typescriptlang.org/">official TypeScript documentation</a> for advanced features.</p>

      <h2>Conclusion</h2>
      <p>Learning TypeScript will enhance your development workflow and lead to fewer runtime errors.</p>
      <img src="https://images.unsplash.com/photo-1605902711622-cfb43c443e6d?auto=format&fit=crop&w=600&q=80" alt="TypeScript coding" />
    `,
        date: "January 08, 2025",
        image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        title: "Understanding React Hooks",
        description: `
      <h2>Introduction</h2>
      <p>React Hooks provide a way to use <strong>state and lifecycle methods</strong> in functional components, which was previously only possible in class components.</p>
      <img src="https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhY3R8ZW58MHx8MHx8fDA%3D" alt="React Hooks" />

      <h2>Commonly Used Hooks</h2>
      <ul>
        <li><code>useState</code> – for managing local component state</li>
        <li><code>useEffect</code> – for handling side effects</li>
        <li><code>useRef</code> – for storing mutable references</li>
        <li><code>useContext</code> – for consuming context values</li>
      </ul>

      <h2>Custom Hooks</h2>
      <p>You can create your own custom hooks to share logic between components.</p>
      <img src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8fDA%3D" alt="Custom Hooks" />

      <h2>Conclusion</h2>
      <p>Hooks simplify state management and side-effects in functional components, making code cleaner and easier to maintain.</p>
    `,
        date: "January 10, 2025",
        image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlYWN0fGVufDB8fDB8fHww"
    },
    {
        id: 4,
        title: "Building Responsive Layouts",
        description: `
      <h2>Introduction</h2>
      <p>Responsive design ensures your website adapts to different screen sizes and devices.</p>
      <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80" alt="Responsive design" />

      <h2>Techniques for Responsiveness</h2>
      <ul>
        <li>CSS Flexbox & Grid</li>
        <li>Media queries</li>
        <li>Fluid typography and images</li>
      </ul>

      <h2>Tools and Frameworks</h2>
      <p>Frameworks like <a href="https://tailwindcss.com/">Tailwind CSS</a> and Bootstrap help build responsive layouts quickly.</p>
      <img src="https://images.unsplash.com/photo-1501870190080-9c06d6f1e131?auto=format&fit=crop&w=600&q=80" alt="Tailwind CSS" />

      <h2>Conclusion</h2>
      <p>Building responsive layouts is essential for modern web development to ensure great user experience on all devices.</p>
    `,
        date: "January 12, 2025",
        image: "https://images.unsplash.com/photo-1756323968720-76196b4c29c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 5,
        title: "State Management in React",
        description: `
      <h2>Introduction</h2>
      <p>Efficient state management is crucial for building scalable React applications.</p>
      <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" alt="State Management" />

      <h2>Popular State Management Solutions</h2>
      <ul>
        <li>React Context API – for lightweight global state</li>
        <li>Redux Toolkit – for complex state management</li>
        <li>Zustand – for simple, scalable state</li>
      </ul>

      <h2>Best Practices</h2>
      <ol>
        <li>Keep state minimal</li>
        <li>Lift state only when necessary</li>
        <li>Use middleware for async actions</li>
      </ol>

      <h2>Conclusion</h2>
      <p>Choosing the right state management approach depends on your project complexity, team size, and future maintenance needs.</p>
      <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80" alt="React state" />
    `,
        date: "January 14, 2025",
        image: "https://images.unsplash.com/photo-1753625606793-47749a65e80f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]


const POSTS_PER_PAGE = 5

export default function AllBlog() {
    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE)
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE
    const endIndex = startIndex + POSTS_PER_PAGE
    const currentPosts = blogPosts.slice(startIndex, endIndex)

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        All Blogs Post
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                        Our team is always ready to assist you with any questions or concerns you might
                        have. Fill out the form below and we&apoch;ll get back to you as soon as possible.
                    </p>
                </header>

                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[38px] mb-8">
                    {currentPosts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </section>

                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </main>
    )
}
