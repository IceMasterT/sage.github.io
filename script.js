
  const products = [
      { id: 1, name: "HoloWatch X1", price: 299.99, image: "product1.jpg" },
      { id: 2, name: "SilentBuds Pro", price: 179.99, image: "product2.jpg" },
      { id: 3, name: "NeoVision VR", price: 499.99, image: "product3.jpg" },
      { id: 4, name: "HoloHome AI", price: 399.99, image: "product4.jpg" },
      { id: 5, name: "QuantumPhone Z", price: 899.99, image: "product5.jpg" },
      { id: 6, name: "AeroLap Ultra", price: 1299.99, image: "product6.jpg" },
      { id: 7, name: "BioTrack Fitness", price: 149.99, image: "product7.jpg" },
      { id: 8, name: "SolarCharge Pro", price: 79.99, image: "product8.jpg" },
      { id: 9, name: "NanoClean Bot", price: 249.99, image: "product9.jpg" },
      { id: 10, name: "EcoSmart Thermostat", price: 199.99, image: "product10.jpg" },
      { id: 11, name: "TelePort Comm", price: 599.99, image: "product11.jpg" },
      { id: 12, name: "NeuroLink Pro", price: 349.99, image: "product12.jpg" },
      { id: 13, name: "HyperDrive SSD", price: 129.99, image: "product13.jpg" },
      { id: 14, name: "FusionCook AI", price: 279.99, image: "product14.jpg" },
      { id: 15, name: "AquaPure Filter", price: 89.99, image: "product15.jpg" },
    ];

    const productsPerPage = 12;
    let currentPage = 1;

    function displayProducts(page) {
      const productGrid = document.getElementById('productGrid');
      productGrid.innerHTML = '';
      
      const startIndex = (page - 1) * productsPerPage;
      const endIndex = startIndex + productsPerPage;
      const paginatedProducts = products.slice(startIndex, endIndex);

      paginatedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}" class="product-image">
          <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">$${product.price.toFixed(2)}</p>
          </div>
        `;
        productGrid.appendChild(productCard);
      });

      updatePaginationButtons();
    }

    function updatePaginationButtons() {
      const prevButton = document.getElementById('prevPage');
      const nextButton = document.getElementById('nextPage');

      prevButton.disabled = currentPage === 1;
      nextButton.disabled = currentPage === Math.ceil(products.length / productsPerPage);
    }

    function changePage(direction) {
      currentPage += direction;
      displayProducts(currentPage);
    }

    // Initial display
    displayProducts(currentPage);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Sticky header
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > heroSection.offsetHeight - header.offsetHeight) {
        header.style.backgroundColor = 'rgba(10, 25, 47, 0.9)';
      } else {
        header.style.backgroundColor = 'transparent';
      }
    });

    // Lazy loading for product images
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const image = entry.target;
            image.src = image.dataset.src;
            observer.unobserve(image);
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
    }

    // Simple product search functionality (to be expanded)
    function searchProducts(query) {
      // Implement product search logic here
      console.log(`Searching for: ${query}`);
    }

    // Add to cart functionality (to be expanded)
    function addToCart(productId) {
      // Implement add to cart logic here
      console.log(`Added product ${productId} to cart`);
    }