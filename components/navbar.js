class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    width: 100%;
                    top: 0;
                    left: 0;
                    z-index: 1000;
                    transition: all 0.3s ease;
                }
                
                nav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1.5rem 2rem;
                    background-color: rgba(0, 0, 0, 0.8);
                    backdrop-filter: blur(10px);
                }
                
                .scrolled {
                    background-color: rgba(119, 29, 29, 0.95);
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }
                
                .logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: white;
                    text-decoration: none;
                    font-family: 'Playfair Display', serif;
                }
                
                .nav-links {
                    display: flex;
                    gap: 2rem;
                }
                
                .nav-links a {
                    color: white;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s;
                    position: relative;
                }
                
                .nav-links a:hover {
                    color: #f59e0b;
                }
                
                .nav-links a::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: -4px;
                    left: 0;
                    background-color: #f59e0b;
                    transition: width 0.3s;
                }
                
                .nav-links a:hover::after {
                    width: 100%;
                }
                
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: white;
                    cursor: pointer;
                }
                
                @media (max-width: 768px) {
                    nav {
                        padding: 1rem;
                    }
                    
                    .mobile-menu-btn {
                        display: block;
                    }
                    
                    .nav-links {
                        position: fixed;
                        top: 70px;
                        left: 0;
                        width: 100%;
                        background-color: rgba(119, 29, 29, 0.98);
                        flex-direction: column;
                        align-items: center;
                        padding: 2rem 0;
                        gap: 1.5rem;
                        clip-path: circle(0px at 90% -10%);
                        transition: clip-path 0.5s ease-in-out;
                    }
                    
                    .nav-links.open {
                        clip-path: circle(1000px at 90% -10%);
                    }
                }
            </style>
            <nav>
                <a href="#" class="logo">Pasta La Vista</a>
                <button class="mobile-menu-btn">
                    <i data-feather="menu"></i>
                </button>
                <div class="nav-links">
                    <a href="#">Home</a>
                    <a href="#menu">Menu</a>
                    <a href="#reservation">Reservations</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
            </nav>
        `;

        // Mobile menu toggle
        const mobileMenuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
        const navLinks = this.shadowRoot.querySelector('.nav-links');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            feather.replace();
        });

        // Scroll effect
        window.addEventListener('scroll', () => {
            const nav = this.shadowRoot.querySelector('nav');
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });

        // Close mobile menu when clicking a link
        this.shadowRoot.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
            });
        });

        feather.replace();
    }
}

customElements.define('custom-navbar', CustomNavbar);