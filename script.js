// Blog posts data
const blogPosts = [
    {
        title: "Understanding the Stock Market: A Beginner's Guide",
        excerpt: "A comprehensive guide for those starting their journey in stock market investing.",
        link: "Blogs/Understanding the Stock Market A Beginner's Guide 14e84369c8cb800d85fee0a40027a917.html"
    },
    {
        title: "Stock Market Basics for Beginners: Invest Smartly",
        excerpt: "Learn the fundamental concepts and strategies for smart investing in the stock market.",
        link: "Blogs/Stock Market Basics for Beginners Invest Smartly i 14e84369c8cb80db8f9dffd7951c68de.html"
    },
    {
        title: "Reasons for Investing in the Stock Market Long-Term",
        excerpt: "Discover why long-term investment in the stock market can be a powerful wealth-building strategy.",
        link: "Blogs/Reasons for Investing in the Stock Market Long-Ter 14e84369c8cb803f8ea1c4c7ce161f87.html"
    }
];

// Notes data
const notes = [
    {
        title: "Module 1 - Introduction to Stock Markets",
        description: "Learn the fundamentals of stock markets and how they work.",
        link: "Free Notes/Module 1 - Introduction to Stock Markets.html"
    },
    {
        title: "Module 2 - Technical Analysis",
        description: "Master the art of technical analysis for better trading decisions.",
        link: "Free Notes/Module 2 Technical Analysis.html"
    },
    {
        title: "Module 3 - Fundamental Analysis",
        description: "Understanding company valuation and financial analysis.",
        link: "Free Notes/Module 3 Fundamental Analysis.html"
    },
    {
        title: "Module 4 - Futures Trading",
        description: "Learn about futures contracts and trading strategies.",
        link: "Free Notes/Module 4 Futures Trading.html"
    },
    {
        title: "Module 5 - Options Theory",
        description: "Understanding options and their theoretical foundations.",
        link: "Free Notes/Module 5 Options Theory.html"
    },
    {
        title: "Module 6 - Options Strategies",
        description: "Advanced options trading strategies and implementations.",
        link: "Free Notes/Module 6 Options Strategies.html"
    },
    {
        title: "Module 7 - Markets & Taxation",
        description: "Understanding market operations and tax implications.",
        link: "Free Notes/Module 7 Markets & Taxation.html"
    },
    {
        title: "Module 8 - Currency and Commodity Futures",
        description: "Exploring currency and commodity futures markets.",
        link: "Free Notes/Module 8 Currency and Commodity Futures.html"
    },
    {
        title: "Module 9 - Risk Management & Trading Psychology",
        description: "Master risk management and psychological aspects of trading.",
        link: "Free Notes/Module 9 Risk Management & Trading Psychology.html"
    },
    {
        title: "Module 10 - Personal Finance",
        description: "Learn about personal finance management and planning.",
        link: "Free Notes/Module 10 Personal Finance.html"
    }
];

// Function to create blog cards
function createBlogCards() {
    const container = document.querySelector('#blogContainer');
    if (!container) return;

    blogPosts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'content-card';
        card.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
            <a href="${post.link}" class="btn">Read More</a>
        `;
        container.appendChild(card);
    });
}

// Function to create notes cards
function createNotesCards() {
    const container = document.querySelector('#notesContainer');
    if (!container) return;

    notes.forEach(note => {
        const card = document.createElement('div');
        card.className = 'content-card';
        card.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.description}</p>
            <a href="${note.link}" class="btn">Access Notes</a>
        `;
        container.appendChild(card);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    createBlogCards();
    createNotesCards();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))?.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
