// Product Data Array for Shree Ganesh Jewellers
const products = [
    {
        id: 1,
        name: "Eternal Diamond Solitaire Ring",
        category: "rings",
        collection: "heirlooms",
        price: 89000,
        rating: 5,
        reviews: 127,
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80", "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80", "https://images.unsplash.com/photo-1612811743214-413339677a00?w=800&q=80", "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80"],
        description: "A timeless 1-carat round brilliant diamond set in 18k white gold. This classic solitaire features a four-prong setting that maximizes the diamond's brilliance. GIA certified, VS1 clarity, E color. Each piece comes with certification and lifetime warranty.",
        featured: true,
        inStock: true
    },
    {
        id: 2,
        name: "Royal Emerald Necklace",
        category: "necklaces",
        collection: "colored",
        price: 145000,
        rating: 5,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80", "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80", "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80", "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80"],
        description: "Exquisite emerald and diamond necklace featuring 15 carats of Colombian emeralds surrounded by brilliant-cut diamonds. Set in 22k yellow gold with intricate handcrafted details. A statement piece for grand occasions.",
        featured: true,
        inStock: true
    },
    {
        id: 3,
        name: "Pearl Drop Earrings",
        category: "earrings",
        collection: "essentials",
        price: 32000,
        rating: 5,
        reviews: 203,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80", "https://images.unsplash.com/photo-1563251347-f8cfd71a62f3?w=800&q=80"],
        description: "Classic South Sea pearl drop earrings with diamond accents. Each 10-11mm lustrous pearl is hand-selected for its perfect round shape and exceptional luster. Set in 18k white gold with secure butterfly backs.",
        featured: true,
        inStock: true
    },
    {
        id: 4,
        name: "Diamond Tennis Bracelet",
        category: "bracelets",
        collection: "essentials",
        price: 125000,
        rating: 5,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80", "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"],
        description: "Elegant tennis bracelet featuring 8 carats of round brilliant diamonds in a continuous line. Each diamond is individually set in 18k white gold with a secure clasp. The ultimate everyday luxury piece.",
        featured: true,
        inStock: true
    },
    {
        id: 5,
        name: "Bridal Polki Set",
        category: "bridal",
        collection: "bridal",
        price: 385000,
        rating: 5,
        reviews: 67,
        image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80", "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80", "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80", "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"],
        description: "Traditional Polki bridal necklace set with matching earrings and maang tikka. Features uncut diamonds in 22k gold with intricate jadau work. Includes ruby and emerald accents. A treasured heirloom piece for your special day.",
        featured: true,
        inStock: true
    },
    {
        id: 6,
        name: "Rose Gold Band Ring",
        category: "rings",
        collection: "essentials",
        price: 45000,
        rating: 5,
        reviews: 178,
        image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80",
        images: ["https://images.unsplash.com/photo-603561591411-07134e71a2a9?w=800&q=80", "https://images.unsplash.com/photo-1612811743214-413339677a00?w=800&q=80"],
        description: "Contemporary rose gold band featuring pavé diamonds. Comfortable fit with 0.5 carats of brilliant-cut diamonds in 18k rose gold. Perfect for stacking or wearing alone.",
        featured: true,
        inStock: true
    },
    {
        id: 7,
        name: "Sapphire Halo Ring",
        category: "rings",
        collection: "colored",
        price: 95000,
        rating: 5,
        reviews: 142,
        image: "https://images.unsplash.com/photo-1612811743214-413339677a00?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1612811743214-413339677a00?w=800&q=80", "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80"],
        description: "Stunning 2-carat Ceylon sapphire surrounded by a halo of diamonds. Set in platinum with diamond-set shoulders. The deep blue sapphire is certified and ethically sourced.",
        featured: false,
        inStock: true
    },
    {
        id: 8,
        name: "Gold Chain Necklace",
        category: "necklaces",
        collection: "essentials",
        price: 68000,
        rating: 5,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80", "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"],
        description: "Classic 22k yellow gold chain in traditional design. 20 inches in length, weighs approximately 25 grams. Hand-finished with secure clasp. An essential piece for every jewellery collection.",
        featured: false,
        inStock: true
    },
    {
        id: 9,
        name: "Diamond Stud Earrings",
        category: "earrings",
        collection: "essentials",
        price: 58000,
        rating: 5,
        reviews: 312,
        image: "https://images.unsplash.com/photo-1563251347-f8cfd71a62f3?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1563251347-f8cfd71a62f3?w=800&q=80", "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"],
        description: "Timeless diamond stud earrings, 1 carat total weight. Each diamond is round brilliant cut, set in four-prong 18k white gold settings. Secure screw backs. Perfect for everyday elegance.",
        featured: false,
        inStock: true
    },
    {
        id: 10,
        name: "Ruby Bangle Set",
        category: "bracelets",
        collection: "colored",
        price: 175000,
        rating: 5,
        reviews: 98,
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80", "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80"],
        description: "Set of two bangles featuring Burmese rubies and diamonds. Handcrafted in 22k gold with traditional design elements. Each bangle is adorned with 3 carats of rubies and 1 carat of diamonds.",
        featured: false,
        inStock: true
    },
    {
        id: 11,
        name: "Maharani Bridal Necklace",
        category: "bridal",
        collection: "bridal",
        price: 525000,
        rating: 5,
        reviews: 43,
        image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80", "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80", "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"],
        description: "Grand bridal necklace featuring 25 carats of diamonds in a regal design. Set in 22k gold with ruby and emerald accents. Includes matching earrings. A masterpiece fit for royalty.",
        featured: false,
        inStock: true
    },
    {
        id: 12,
        name: "Infinity Band Ring",
        category: "rings",
        collection: "heirlooms",
        price: 52000,
        rating: 5,
        reviews: 189,
        image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80", "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80"],
        description: "Elegant infinity symbol band with diamonds. Symbolizes eternal love and commitment. 0.35 carats of diamonds set in 18k white gold. Perfect as a wedding band or anniversary gift.",
        featured: false,
        inStock: true
    },
    {
        id: 13,
        name: "Pendant Necklace",
        category: "necklaces",
        collection: "essentials",
        price: 42000,
        rating: 5,
        reviews: 167,
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80", "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"],
        description: "Delicate diamond pendant on fine gold chain. Features a 0.5-carat round brilliant diamond in four-prong setting. 18k yellow gold chain, 18 inches. Perfect for layering or wearing solo.",
        featured: false,
        inStock: true
    },
    {
        id: 14,
        name: "Chandelier Earrings",
        category: "earrings",
        collection: "heirlooms",
        price: 185000,
        rating: 5,
        reviews: 76,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80", "https://images.unsplash.com/photo-1563251347-f8cfd71a62f3?w=800&q=80"],
        description: "Spectacular chandelier earrings with diamonds and colored gemstones. Hand-set with 6 carats of diamonds, rubies, and emeralds in 18k gold. Statement earrings for grand occasions.",
        featured: false,
        inStock: true
    },
    {
        id: 15,
        name: "Charm Bracelet",
        category: "bracelets",
        collection: "essentials",
        price: 38000,
        rating: 4,
        reviews: 145,
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80", "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"],
        description: "Customizable charm bracelet in 18k yellow gold. Features five removable charms including heart, star, and initial options. Add your personal touch to create a unique piece.",
        featured: false,
        inStock: true
    },
    {
        id: 16,
        name: "Temple Jewellery Set",
        category: "bridal",
        collection: "bridal",
        price: 285000,
        rating: 5,
        reviews: 52,
        image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80", "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80"],
        description: "South Indian temple jewellery set with intricate goddess motifs. Handcrafted in 22k gold with ruby embellishments. Includes long necklace, earrings, and headpiece. Rich heritage design.",
        featured: false,
        inStock: true
    },
    {
        id: 17,
        name: "Stackable Ring Set",
        category: "rings",
        collection: "essentials",
        price: 35000,
        rating: 5,
        reviews: 198,
        image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80", "https://images.unsplash.com/photo-1612811743214-413339677a00?w=800&q=80"],
        description: "Set of three stackable rings in mixed metals - rose, yellow, and white gold. Each ring features delicate diamond accents. Mix and match to create your perfect stack. 18k gold.",
        featured: false,
        inStock: true
    },
    {
        id: 18,
        name: "Choker Necklace",
        category: "necklaces",
        collection: "heirlooms",
        price: 165000,
        rating: 5,
        reviews: 87,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80", "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"],
        description: "Regal diamond choker necklace with Victorian-inspired design. Features 8 carats of diamonds in floral motifs. Set in 18k white gold with adjustable clasp. Makes a stunning statement.",
        featured: false,
        inStock: true
    },
    {
        id: 19,
        name: "Hoop Earrings",
        category: "earrings",
        collection: "essentials",
        price: 28000,
        rating: 5,
        reviews: 267,
        image: "https://images.unsplash.com/photo-1563251347-f8cfd71a62f3?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1563251347-f8cfd71a62f3?w=800&q=80", "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"],
        description: "Classic diamond hoop earrings, 30mm diameter. Inside-out design with 2 carats total weight of diamonds. 18k white gold with secure hinged closure. Versatile for day or evening.",
        featured: false,
        inStock: true
    },
    {
        id: 20,
        name: "Kada Bracelet",
        category: "bracelets",
        collection: "heirlooms",
        price: 95000,
        rating: 5,
        reviews: 103,
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80", "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80"],
        description: "Traditional solid gold Kada bracelet with contemporary twist. 22k yellow gold weighing 40 grams. Features delicate engraved patterns and secure hinged opening. A modern heirloom piece.",
        featured: false,
        inStock: true
    }
];

// Function to get products by category
function getProductsByCategory(category) {
    if (!category || category === 'all') return products;
    return products.filter(p => p.category === category);
}

// Function to get products by collection
function getProductsByCollection(collection) {
    if (!collection) return products;
    return products.filter(p => p.collection === collection);
}

// Function to get featured products
function getFeaturedProducts(limit = 6) {
    return products.filter(p => p.featured).slice(0, limit);
}

// Function to get product by ID
function getProductById(id) {
    return products.find(p => p.id === parseInt(id));
}

// Function to search products
function searchProducts(query) {
    const lowerQuery = query.toLowerCase();
    return products.filter(p => 
        p.name.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery) ||
        p.category.toLowerCase().includes(lowerQuery)
    );
}

// Function to sort products
function sortProducts(products, sortBy) {
    const sorted = [...products];
    switch(sortBy) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'name':
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        case 'rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        default:
            return sorted;
    }
}

// Function to format price in Indian Rupees
function formatPrice(price) {
    return '₹' + price.toLocaleString('en-IN');
}

// Function to generate star rating HTML
function generateStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? '★' : '☆';
    }
    return stars;
}
