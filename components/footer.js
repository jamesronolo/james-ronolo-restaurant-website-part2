class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #1e293b;
                    color: white;
                    padding: 4rem 2rem;
                }
                
                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 3rem;
                }
                
                .footer-logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 1.5rem;
                    font-family: 'Playfair Display', serif;
                }
                
                .footer-about p {
                    color: #94a3b8;
                    margin-bottom: 1.5rem;
                    line-height: 1.6;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                }
                
                .social-links a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: #334155;
                    color: white;
                    transition: all 0.3s;
                }
                
                .social-links a:hover {
                    background-color: #f59e0b;
                    transform: translateY(-3px);
                }
                
                .footer-heading {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                    position: relative;
                    padding-bottom: 0.5rem;
                }
                
                .footer-heading::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 50px;
                    height: 2px;
                    background-color: #f59e0b;
                }
                
                .footer-links {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }
                
                .footer-links a {
                    color: #94a3b8;
                    text-decoration: none;
                    transition: color 0.3s;
                }
                
                .footer-links a:hover {
                    color: #f59e0b;
                }
                
                .contact-info {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                
                .contact-item {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    color: #94a3b8;
                }
                
                .contact-item i {
                    color: #f59e0b;
                }
                
                .copyright {
                    text-align: center;
                    margin-top: 4rem;
                    padding-top: 2rem;
                    border-top: 1px solid #334155;
                    color: #94a3b8;
                }
                
                @media (max-width: 768px) {
                    .footer-container {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            <div class="footer-container">
                <div class="footer-about">
                    <div class="footer-logo">Pasta La Vista</div>
                    <p>Bringing authentic Italian flavors to your table since 1985. Our passion for traditional recipes and quality ingredients makes every meal a memorable experience.</p>
                    <div class="social-links">
                        <a href="#"><i data-feather="facebook"></i></a>
                        <a href="#"><i data-feather="instagram"></i></a>
                        <a href="#"><i data-feather="twitter"></i></a>
                        <a href="#"><i data-feather="youtube"></i></a>
                    </div>
                </div>
                
                <div class="footer-links-container">
                    <h3 class="footer-heading">Quick Links</h3>
                    <div class="footer-links">
                        <a href="#">Home</a>
                        <a href="#menu">Menu</a>
                        <a href="#reservation">Reservations</a>
                        <a href="#">About Us</a>
                        <a href="#">Gallery</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
                
                <div class="footer-contact">
                    <h3 class="footer-heading">Contact Us</h3>
                    <div class="contact-info">
                        <div class="contact-item">
                            <i data-feather="map-pin"></i>
                            <span>123 Via Roma, Florence, Italy</span>
                        </div>
                        <div class="contact-item">
                            <i data-feather="phone"></i>
                            <span>+39 055 1234567</span>
                        </div>
                        <div class="contact-item">
                            <i data-feather="mail"></i>
                            <span>info@pastalavista.com</span>
                        </div>
                        <div class="contact-item">
                            <i data-feather="clock"></i>
                            <span>Mon-Sun: 11:00 AM - 11:00 PM</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="copyright">
                &copy; ${new Date().getFullYear()} Pasta La Vista. All Rights Reserved.
            </div>
        `;
        
        feather.replace();
    }
}

customElements.define('custom-footer', CustomFooter);