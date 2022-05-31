import bcrypt from "bcryptjs/dist/bcrypt.js";



const data = {
    users: [
        {
            name: 'Anis',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('1233', 8),
            isAdmin: false,
        },
    ],
  
    products: [
      {
            
            name: 'Nike Slim Shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 320,
            countInStock: 50,
            brand: 'Nike',
            rating: 2.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
           
            name: 'Adidas Fit Shirt',
            category: 'Shirts',
            image: '/images/p2.jpg',
            price: 120,
            countInStock: 20,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
           
            name: 'Lacost Free Shirt',
            category: 'Shirts',
            image: '/images/p3.jpg',
            price: 220,
            countInStock: 0,
            brand: 'Lacoste',
            rating: 4.8,
            numReviews: 17,
            description: 'high quality product',
        },
        {
            
            name: 'Niko Slim Shirt',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 78,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality product',
        },
        {
           
            name: 'Puma Slim Pant',
            category: 'Pants',
            image: '/images/p5.jpg',
            price: 65,
            countInStock: 45,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
          
            name: 'Adidas Fit Pants',
            category: 'Pants',
            image: '/images/p6.jpg',
            price: 80,
            countInStock: 10,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        
    ]
}


export default data;