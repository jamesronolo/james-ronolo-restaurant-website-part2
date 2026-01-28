class MenuCard extends HTMLElement {
    static get observedAttributes() {
        return ['title', 'description', 'price', 'image'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (this.shadowRoot) {
            this.render();
        }
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        const title = this.getAttribute('title') || '';
        const description = this.getAttribute('description') || '';
        const price = this.getAttribute('price') || '';
        const image = this.getAttribute('image') || 'http://static.photos/food/640x360';

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: white;
                    border-radius: 0.5rem;
                    overflow: hidden;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                    transition: transform 0.3s, box-shadow 0.3s;
                }
                
                :host(:hover) {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                }
                
                .menu-image {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                }
                
                .menu-content {
                    padding: 1.5rem;
                }
                
                .menu-title {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #1e293b;
                    margin-bottom: 0.5rem;
                    font-family: 'Playfair Display', serif;
                }
                
                .menu-description {
                    color: #64748b;
                    margin-bottom: 1rem;
                    font-size: 0.875rem;
                    line-height: 1.5;
                }
                
                .menu-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .menu-price {
                    font-weight: 700;
                    color: #b45309;
                    font-size: 1.125rem;
                }
                
                .add-to-cart {
                    background-color: #f59e0b;
                    color: white;
                    border: none;
                    padding: 0.5rem 1rem;
                    border-radius: 0.25rem;
                    cursor: pointer;
                    transition: background-color 0.3s;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                
                .add-to-cart:hover {
                    background-color: #d97706;
                }
            </style>
            <div>
                <img src="${image}" alt="${title}" class="menu-image">
                <div class="menu-content">
                    <h3 class="menu-title">${title}</h3>
                    <p class="menu-description">${description}</p>
                    <div class="menu-footer">
                        <span class="menu-price">$${price}</span>
                        <button class="add-to-cart">
                            <i data-feather="plus"></i> Add to Order
                        </button>
                    </div>
                </div>
            </div>
        `;

        feather.replace();

        // Add to cart functionality
        const addToCartBtn = this.shadowRoot.querySelector('.add-to-cart');
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', () => {
                const event = new CustomEvent('add-to-cart', {
                    bubbles: true,
                    composed: true,
                    detail: {
                        title: title,
                        price: price
                    }
                });
                this.dispatchEvent(event);
            });
        }
    }
}

customElements.define('menu-card', MenuCard);