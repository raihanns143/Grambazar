const products = [
    {
        id: "p1",
        name: "Heirloom Tomatoes",
        price: 8.99,
        category: "organic",
        rating: 4.8,
        reviews: 124,
        unit: "lb",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Crect width='600' height='600' fill='%23F5F5F4'/%3E%3Cpath d='M0 0h600v600H0z' fill='url(%23grad)' opacity='.1'/%3E%3Cdefs%3E%3CradialGradient id='grad' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' stop-color='%23000'/%3E%3Cstop offset='100%25' stop-color='%23fff' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ctext x='300' y='280' font-family='Georgia, serif' font-size='24' font-style='italic' fill='%2378716C' text-anchor='middle'%3EFeast %26 Co.%3C/text%3E%3Ctext x='300' y='320' font-family='Arial, sans-serif' font-weight='bold' font-size='32' fill='%231C1917' text-anchor='middle'%3EHeirloom Tomatoes%3C/text%3E%3C/svg%3E",
        badge: "Organic",
        description: "Farm-fresh, organic heirloom tomatoes.",
        stock: true,
        featured: true,
        bestSeller: false,
        newArrival: true
    },
    {
        id: "p2",
        name: "Aged Gouda",
        price: 14.99,
        category: "artisan",
        rating: 4.9,
        reviews: 89,
        unit: "ea",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Crect width='600' height='600' fill='%23F5F5F4'/%3E%3Cpath d='M0 0h600v600H0z' fill='url(%23grad)' opacity='.1'/%3E%3Cdefs%3E%3CradialGradient id='grad' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' stop-color='%23000'/%3E%3Cstop offset='100%25' stop-color='%23fff' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ctext x='300' y='280' font-family='Georgia, serif' font-size='24' font-style='italic' fill='%2378716C' text-anchor='middle'%3EFeast %26 Co.%3C/text%3E%3Ctext x='300' y='320' font-family='Arial, sans-serif' font-weight='bold' font-size='32' fill='%231C1917' text-anchor='middle'%3EAged Gouda%3C/text%3E%3C/svg%3E",
        badge: "",
        description: "Dutch artisan cheese aged to perfection.",
        stock: true,
        featured: true,
        bestSeller: true,
        newArrival: false
    },
    {
        id: "p3",
        name: "Black Truffle Oil",
        price: 24.99,
        category: "imported",
        rating: 5.0,
        reviews: 287,
        unit: "500ml",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Crect width='600' height='600' fill='%23F5F5F4'/%3E%3Cpath d='M0 0h600v600H0z' fill='url(%23grad)' opacity='.1'/%3E%3Cdefs%3E%3CradialGradient id='grad' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' stop-color='%23000'/%3E%3Cstop offset='100%25' stop-color='%23fff' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ctext x='300' y='280' font-family='Georgia, serif' font-size='24' font-style='italic' fill='%2378716C' text-anchor='middle'%3EFeast %26 Co.%3C/text%3E%3Ctext x='300' y='320' font-family='Arial, sans-serif' font-weight='bold' font-size='32' fill='%231C1917' text-anchor='middle'%3EBlack Truffle Oil%3C/text%3E%3C/svg%3E",
        badge: "Bestseller",
        description: "Premium Italian blend truffle oil. Infused with real black summer truffles.",
        stock: true,
        featured: true,
        bestSeller: true,
        newArrival: false
    },
    {
        id: "p4",
        name: "Wild Mushroom Mix",
        price: 16.99,
        category: "local",
        rating: 4.7,
        reviews: 56,
        unit: "lb",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Crect width='600' height='600' fill='%23F5F5F4'/%3E%3Cpath d='M0 0h600v600H0z' fill='url(%23grad)' opacity='.1'/%3E%3Cdefs%3E%3CradialGradient id='grad' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' stop-color='%23000'/%3E%3Cstop offset='100%25' stop-color='%23fff' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ctext x='300' y='280' font-family='Georgia, serif' font-size='24' font-style='italic' fill='%2378716C' text-anchor='middle'%3EFeast %26 Co.%3C/text%3E%3Ctext x='300' y='320' font-family='Arial, sans-serif' font-weight='bold' font-size='32' fill='%231C1917' text-anchor='middle'%3EWild Mushroom Mix%3C/text%3E%3C/svg%3E",
        badge: "",
        description: "Porcini & chanterelles wild mix. Sustainably foraged.",
        stock: true,
        featured: false,
        bestSeller: false,
        newArrival: true
    },
    {
        id: "p5",
        name: "Fleur de Sel",
        price: 12.99,
        category: "imported",
        rating: 4.8,
        reviews: 210,
        unit: "ea",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Crect width='600' height='600' fill='%23F5F5F4'/%3E%3Cpath d='M0 0h600v600H0z' fill='url(%23grad)' opacity='.1'/%3E%3Cdefs%3E%3CradialGradient id='grad' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' stop-color='%23000'/%3E%3Cstop offset='100%25' stop-color='%23fff' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ctext x='300' y='280' font-family='Georgia, serif' font-size='24' font-style='italic' fill='%2378716C' text-anchor='middle'%3EFeast %26 Co.%3C/text%3E%3Ctext x='300' y='320' font-family='Arial, sans-serif' font-weight='bold' font-size='32' fill='%231C1917' text-anchor='middle'%3EFleur de Sel%3C/text%3E%3C/svg%3E",
        badge: "",
        description: "French sea salt crystals. Harvested by hand.",
        stock: true,
        featured: false,
        bestSeller: true,
        newArrival: false
    },
    {
        id: "p6",
        name: "Aged Balsamic",
        price: 18.99,
        category: "imported",
        rating: 4.9,
        reviews: 145,
        unit: "ea",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Crect width='600' height='600' fill='%23F5F5F4'/%3E%3Cpath d='M0 0h600v600H0z' fill='url(%23grad)' opacity='.1'/%3E%3Cdefs%3E%3CradialGradient id='grad' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' stop-color='%23000'/%3E%3Cstop offset='100%25' stop-color='%23fff' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ctext x='300' y='280' font-family='Georgia, serif' font-size='24' font-style='italic' fill='%2378716C' text-anchor='middle'%3EFeast %26 Co.%3C/text%3E%3Ctext x='300' y='320' font-family='Arial, sans-serif' font-weight='bold' font-size='32' fill='%231C1917' text-anchor='middle'%3EAged Balsamic%3C/text%3E%3C/svg%3E",
        badge: "",
        description: "25-year vintage aged balsamic. Authentic Modena origin.",
        stock: true,
        featured: false,
        bestSeller: true,
        newArrival: false
    },
    {
        id: "p7",
        name: "Raw Wildflower Honey",
        price: 10.99,
        category: "local",
        rating: 4.9,
        reviews: 312,
        unit: "ea",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Crect width='600' height='600' fill='%23F5F5F4'/%3E%3Cpath d='M0 0h600v600H0z' fill='url(%23grad)' opacity='.1'/%3E%3Cdefs%3E%3CradialGradient id='grad' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' stop-color='%23000'/%3E%3Cstop offset='100%25' stop-color='%23fff' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ctext x='300' y='280' font-family='Georgia, serif' font-size='24' font-style='italic' fill='%2378716C' text-anchor='middle'%3EFeast %26 Co.%3C/text%3E%3Ctext x='300' y='320' font-family='Arial, sans-serif' font-weight='bold' font-size='32' fill='%231C1917' text-anchor='middle'%3ERaw Wildflower Honey%3C/text%3E%3C/svg%3E",
        badge: "Local",
        description: "Local apiary selection. Unfiltered and unpasteurized.",
        stock: true,
        featured: false,
        bestSeller: false,
        newArrival: false
    },
    {
        id: "p8",
        name: "Handmade Pasta",
        price: 9.99,
        category: "artisan",
        rating: 4.7,
        reviews: 88,
        unit: "ea",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Crect width='600' height='600' fill='%23F5F5F4'/%3E%3Cpath d='M0 0h600v600H0z' fill='url(%23grad)' opacity='.1'/%3E%3Cdefs%3E%3CradialGradient id='grad' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' stop-color='%23000'/%3E%3Cstop offset='100%25' stop-color='%23fff' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ctext x='300' y='280' font-family='Georgia, serif' font-size='24' font-style='italic' fill='%2378716C' text-anchor='middle'%3EFeast %26 Co.%3C/text%3E%3Ctext x='300' y='320' font-family='Arial, sans-serif' font-weight='bold' font-size='32' fill='%231C1917' text-anchor='middle'%3EHandmade Pasta%3C/text%3E%3C/svg%3E",
        badge: "",
        description: "Pappardelle & ravioli handmade pasta. Rolled fresh daily.",
        stock: true,
        featured: false,
        bestSeller: false,
        newArrival: false
    },
    {
        id: "p9",
        name: "Single-Origin Coffee",
        price: 15.99,
        category: "imported",
        rating: 4.8,
        reviews: 420,
        unit: "lb",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Crect width='600' height='600' fill='%23F5F5F4'/%3E%3Cpath d='M0 0h600v600H0z' fill='url(%23grad)' opacity='.1'/%3E%3Cdefs%3E%3CradialGradient id='grad' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' stop-color='%23000'/%3E%3Cstop offset='100%25' stop-color='%23fff' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ctext x='300' y='280' font-family='Georgia, serif' font-size='24' font-style='italic' fill='%2378716C' text-anchor='middle'%3EFeast %26 Co.%3C/text%3E%3Ctext x='300' y='320' font-family='Arial, sans-serif' font-weight='bold' font-size='32' fill='%231C1917' text-anchor='middle'%3ESingle-Origin Coffee%3C/text%3E%3C/svg%3E",
        badge: "",
        description: "Ethiopia highland roast. Notes of berries and dark chocolate.",
        stock: true,
        featured: false,
        bestSeller: true,
        newArrival: false
    },
    {
        id: "p10",
        name: "Extra Virgin Olive Oil",
        price: 19.99,
        category: "imported",
        rating: 4.9,
        reviews: 256,
        unit: "ea",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Crect width='600' height='600' fill='%23F5F5F4'/%3E%3Cpath d='M0 0h600v600H0z' fill='url(%23grad)' opacity='.1'/%3E%3Cdefs%3E%3CradialGradient id='grad' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' stop-color='%23000'/%3E%3Cstop offset='100%25' stop-color='%23fff' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ctext x='300' y='280' font-family='Georgia, serif' font-size='24' font-style='italic' fill='%2378716C' text-anchor='middle'%3EFeast %26 Co.%3C/text%3E%3Ctext x='300' y='320' font-family='Arial, sans-serif' font-weight='bold' font-size='32' fill='%231C1917' text-anchor='middle'%3EExtra Virgin Olive Oil%3C/text%3E%3C/svg%3E",
        badge: "",
        description: "Greek first-press olive oil. Rich, peppery finish.",
        stock: true,
        featured: false,
        bestSeller: true,
        newArrival: false
    },
    {
        id: "p11",
        name: "Artisan Dark Chocolate",
        price: 7.99,
        category: "artisan",
        rating: 4.8,
        reviews: 178,
        unit: "ea",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Crect width='600' height='600' fill='%23F5F5F4'/%3E%3Cpath d='M0 0h600v600H0z' fill='url(%23grad)' opacity='.1'/%3E%3Cdefs%3E%3CradialGradient id='grad' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' stop-color='%23000'/%3E%3Cstop offset='100%25' stop-color='%23fff' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ctext x='300' y='280' font-family='Georgia, serif' font-size='24' font-style='italic' fill='%2378716C' text-anchor='middle'%3EFeast %26 Co.%3C/text%3E%3Ctext x='300' y='320' font-family='Arial, sans-serif' font-weight='bold' font-size='32' fill='%231C1917' text-anchor='middle'%3EArtisan Dark Chocolate%3C/text%3E%3C/svg%3E",
        badge: "",
        description: "85% single-origin cacao. Hand-tempered perfection.",
        stock: true,
        featured: false,
        bestSeller: false,
        newArrival: true
    },
    {
        id: "p12",
        name: "Sourdough Starter",
        price: 22.99,
        category: "artisan",
        rating: 4.6,
        reviews: 92,
        unit: "ea",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Crect width='600' height='600' fill='%23F5F5F4'/%3E%3Cpath d='M0 0h600v600H0z' fill='url(%23grad)' opacity='.1'/%3E%3Cdefs%3E%3CradialGradient id='grad' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' stop-color='%23000'/%3E%3Cstop offset='100%25' stop-color='%23fff' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ctext x='300' y='280' font-family='Georgia, serif' font-size='24' font-style='italic' fill='%2378716C' text-anchor='middle'%3EFeast %26 Co.%3C/text%3E%3Ctext x='300' y='320' font-family='Arial, sans-serif' font-weight='bold' font-size='32' fill='%231C1917' text-anchor='middle'%3ESourdough Starter%3C/text%3E%3C/svg%3E",
        badge: "",
        description: "50-year culture sourdough starter. Includes feeding instructions.",
        stock: true,
        featured: false,
        bestSeller: false,
        newArrival: true
    }
];

window.appProducts = products;

window.generateProductCard = function(product) {
    return `
        <div class="variety-card reveal flex flex-col h-full visible" data-id="${product.id}">
            ${product.badge ? \`<span class="badge">\${product.badge}</span>\` : ''}
            <div class="bg-gradient-to-br flex justify-center items-center cursor-pointer" onclick="window.location.href='product.html?id=${product.id}'">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="p-3 flex flex-col flex-1">
                <div>
                    <h3 class="font-display text-xl font-bold text-stone-900 mb-2 cursor-pointer" onclick="window.location.href='product.html?id=${product.id}'">
                        ${product.name}
                    </h3>
                    <span class="text-stone-500 text-sm">
                        <p>${product.description}</p>
                    </span>
                    <div class="space-y-2 my-2">
                        <label class="flex items-center justify-between border border-amber-100 rounded-xl px-3 py-2 cursor-pointer hover:bg-amber-50 transition">
                            <div class="flex items-center gap-2">
                                <div>
                                    <div class="text-sm font-bold text-stone-800">${product.unit}</div>
                                </div>
                            </div>
                            <div class="text-right">
                                <div class="text-sm font-black text-amber-600">$${product.price}</div>
                            </div>
                        </label>
                    </div>
                </div>
                <div class="mt-auto pt-3">
                    <button onclick="window.cartManager.addItem(window.appProducts.find(p => p.id === '${product.id}'))" class="btn-primary w-full block text-center text-sm">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
};
