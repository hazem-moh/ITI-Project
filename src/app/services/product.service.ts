import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    
//   dataOfProdect=[
//      {
//     "id": 1,
//     "title": "Matouk Milagro Bath Towel",
//     "description": "Luxurious bath towel made from high-quality cotton for maximum softness and absorbency.",
//     "category": "Bath Towels",
//     "price": 60.00,
//     "discountPercentage": 15,
//     "rating": 4.7,
//     "stock": 25,
//     "sku": "MAT-MIL-001",
//     "weight": "1.2 lbs",
//     "dimensions": "30 x 56 inches",
//     "warrantyInformation": "1 year",
//     "shippingInformation": "Free shipping",
//     "availabilityStatus": "In Stock",
//     "reviews": [
//         {
//             "user": "Emily",
//             "comment": "Extremely soft and plush, worth every penny!",
//             "rating": 5
//         },
//         {
//             "user": "John",
//             "comment": "High quality, but a bit pricey.",
//             "rating": 4
//         }
//     ],
//     "returnPolicy": "30-day return",
//     "minimumOrderQuantity": 1,
//     "meta": {
//         "tags": ["Luxury", "Cotton", "Soft"]
//     },
//     "images": [
//         "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1717683964-amazon-basics-towel-6661c6c14c562.jpg?crop=1xw:1xh;center,top&resize=980:*"
//     ],
//     "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1717683964-amazon-basics-towel-6661c6c14c562.jpg?crop=1xw:1xh;center,top&resize=980:*"
// },
// {
//     "id": 2,
//     "title": "RH Ultra-Soft Turkish Bath Towel",
//     "description": "Turkish bath towel crafted with ultra-soft cotton for a spa-like experience.",
//     "category": "Bath Towels",
//     "price": 55.00,
//     "discountPercentage": 10,
//     "rating": 4.8,
//     "stock": 30,
//     "sku": "RH-TURK-002",
//     "weight": "1.5 lbs",
//     "dimensions": "30 x 60 inches",
//     "warrantyInformation": "1 year",
//     "shippingInformation": "Free shipping",
//     "availabilityStatus": "In Stock",
//     "reviews": [
//         {
//             "user": "Sarah",
//             "comment": "So soft and absorbent, perfect for after a shower.",
//             "rating": 5
//         },
//         {
//             "user": "Michael",
//             "comment": "Great quality but a little on the expensive side.",
//             "rating": 4.6
//         }
//     ],
//     "returnPolicy": "30-day return",
//     "minimumOrderQuantity": 1,
//     "meta": {
//         "tags": ["Turkish", "Soft", "Spa"]
//     },
//     "images": [
//         "https://m.media-amazon.com/images/S/aplus-media-library-service-media/aac54742-b99a-4dc4-9728-650da8fe666a.__CR0,3,1204,745_PT0_SX970_V1___.png"
//     ],
//     "thumbnail": "https://m.media-amazon.com/images/S/aplus-media-library-service-media/aac54742-b99a-4dc4-9728-650da8fe666a.__CR0,3,1204,745_PT0_SX970_V1___.png"
// },
// {
//     "id": 3,
//     "title": "Riley Home Plush Bath Towel",
//     "description": "Plush and cozy bath towel designed for ultimate comfort and absorbency.",
//     "category": "Bath Towels",
//     "price": 45.00,
//     "discountPercentage": 12,
//     "rating": 4.5,
//     "stock": 20,
//     "sku": "RIL-PLUSH-003",
//     "weight": "1.3 lbs",
//     "dimensions": "30 x 56 inches",
//     "warrantyInformation": "1 year",
//     "shippingInformation": "Free shipping",
//     "availabilityStatus": "In Stock",
//     "reviews": [
//         {
//             "user": "Olivia",
//             "comment": "Very plush and absorbent, love the feel.",
//             "rating": 4.8
//         },
//         {
//             "user": "Liam",
//             "comment": "Good quality but not as soft as expected.",
//             "rating": 4.2
//         }
//     ],
//     "returnPolicy": "30-day return",
//     "minimumOrderQuantity": 1,
//     "meta": {
//         "tags": ["Plush", "Comfort", "Absorbent"]
//     },
//     "images": [
//         "https://images-na.ssl-images-amazon.com/images/I/81d9B992cPL._AC_UL232_SR232,232_.jpg"
//     ],
//     "thumbnail": "https://images-na.ssl-images-amazon.com/images/I/81d9B992cPL._AC_UL232_SR232,232_.jpg"
// },
// {
//     "id": 4,
//     "title": "Brooklinen Super-Plush Bath Towels, 2-Pack",
//     "description": "Set of two super-plush bath towels for luxurious comfort and superior absorbency.",
//     "category": "Bath Towels",
//     "price": 80.00,
//     "discountPercentage": 18,
//     "rating": 4.6,
//     "stock": 15,
//     "sku": "BRO-SUPER-004",
//     "weight": "2.4 lbs",
//     "dimensions": "30 x 60 inches",
//     "warrantyInformation": "1 year",
//     "shippingInformation": "Free shipping",
//     "availabilityStatus": "In Stock",
//     "reviews": [
//         {
//             "user": "Emma",
//             "comment": "Incredibly soft and absorbent. Worth the price.",
//             "rating": 4.9
//         },
//         {
//             "user": "James",
//             "comment": "Very plush but a bit heavy.",
//             "rating": 4.3
//         }
//     ],
//     "returnPolicy": "30-day return",
//     "minimumOrderQuantity": 1,
//     "meta": {
//         "tags": ["Super-Plush", "Comfort", "2-Pack"]
//     },
//     "images": [
//         "https://m.media-amazon.com/images/I/918fkBmvPBL._AC_SX679_.jpg"
//     ],
//     "thumbnail": "https://m.media-amazon.com/images/I/918fkBmvPBL._AC_SX679_.jpg"
// },
// {
//     "id": 5,
//     "title": "Matouk Milagro Bath Towel",
//     "description": "Luxurious bath towel made from high-quality cotton for maximum softness and absorbency.",
//     "category": "Bath Towels",
//     "price": 60.00,
//     "discountPercentage": 15,
//     "rating": 4.7,
//     "stock": 25,
//     "sku": "MAT-MIL-001",
//     "weight": "1.2 lbs",
//     "dimensions": "30 x 56 inches",
//     "warrantyInformation": "1 year",
//     "shippingInformation": "Free shipping",
//     "availabilityStatus": "In Stock",
//     "reviews": [
//         {
//             "user": "Emily",
//             "comment": "Extremely soft and plush, worth every penny!",
//             "rating": 5
//         },
//         {
//             "user": "John",
//             "comment": "High quality, but a bit pricey.",
//             "rating": 4
//         }
//     ],
//     "returnPolicy": "30-day return",
//     "minimumOrderQuantity": 1,
//     "meta": {
//         "tags": ["Luxury", "Cotton", "Soft"]
//     },
//     "images": [
//         "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1716395452-matouk-milagro-towel-664e1da19c7a1.png?crop=1xw:1xh;center,top&resize=980:*"
//     ],
//     "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1716395452-matouk-milagro-towel-664e1da19c7a1.png?crop=1xw:1xh;center,top&resize=980:*"
// },
// {
//   "id": 6,
//   "title": "Weston Brands Vacuum Sealer with Roll Cutter",
//   "description": "Vacuum sealer with built-in roll cutter for custom-sized bags and easy sealing.",
//   "category": "Vacuum Sealers",
//   "price": 139.99,
//   "discountPercentage": 15,
//   "rating": 4.7,
//   "stock": 10,
//   "sku": "WB-VS-001",
//   "weight": "6.5 lbs",
//   "dimensions": "14 x 7 x 10 inches",
//   "warrantyInformation": "2 years",
//   "shippingInformation": "Free shipping",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       {
//           "user": "Emily",
//           "comment": "Great for sealing large quantities of food.",
//           "rating": 4.8
//       },
//       {
//           "user": "James",
//           "comment": "The roll cutter feature is very convenient.",
//           "rating": 4.6
//       }
//   ],
//   "returnPolicy": "30-day return",
//   "minimumOrderQuantity": 1,
//   "meta": {
//       "tags": ["Vacuum Sealer", "Roll Cutter", "Food Preservation"]
//   },
//   "images": [
//       "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1645137690-70835abd-e0c2-4a25-800e-67d1973cc8f6_1.a01df8532d9ba6f3d3aa929441a58dbf.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
//   ],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1645137690-70835abd-e0c2-4a25-800e-67d1973cc8f6_1.a01df8532d9ba6f3d3aa929441a58dbf.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
// },
// {
//   "id": 7,
//   "title": "FoodSaver Multi-Use Handheld Vacuum Sealer",
//   "description": "Compact handheld vacuum sealer ideal for sealing smaller bags and food items.",
//   "category": "Vacuum Sealers",
//   "price": 49.99,
//   "discountPercentage": 10,
//   "rating": 4.5,
//   "stock": 25,
//   "sku": "FS-HV-002",
//   "weight": "1.2 lbs",
//   "dimensions": "7 x 3 x 3 inches",
//   "warrantyInformation": "1 year",
//   "shippingInformation": "Free shipping",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       {
//           "user": "Sarah",
//           "comment": "Perfect for quick sealing tasks.",
//           "rating": 4.7
//       },
//       {
//           "user": "Michael",
//           "comment": "Works well, but could be more powerful.",
//           "rating": 4.3
//       }
//   ],
//   "returnPolicy": "30-day return",
//   "minimumOrderQuantity": 1,
//   "meta": {
//       "tags": ["Handheld", "Compact", "Food Preservation"]
//   },
//   "images": [
//       "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1694711754-screen-shot-2023-09-14-at-1-14-32-pm-65033fa6ab443.png?crop=1xw:0.987012987012987xh;center,top&resize=980:*"
//   ],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1694711754-screen-shot-2023-09-14-at-1-14-32-pm-65033fa6ab443.png?crop=1xw:0.987012987012987xh;center,top&resize=980:*"
// },
// {
//   "id": 8,
//   "title": "Anova Culinary Precision Vacuum Sealer",
//   "description": "Precision vacuum sealer designed for sous-vide cooking and food storage.",
//   "category": "Vacuum Sealers",
//   "price": 89.99,
//   "discountPercentage": 12,
//   "rating": 4.6,
//   "stock": 15,
//   "sku": "ANOVA-VS-003",
//   "weight": "3.8 lbs",
//   "dimensions": "11 x 5 x 3 inches",
//   "warrantyInformation": "2 years",
//   "shippingInformation": "Free shipping",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       {
//           "user": "Laura",
//           "comment": "Excellent for sous-vide and food storage.",
//           "rating": 4.7
//       },
//       {
//           "user": "John",
//           "comment": "A bit noisy but very effective.",
//           "rating": 4.5
//       }
//   ],
//   "returnPolicy": "30-day return",
//   "minimumOrderQuantity": 1,
//   "meta": {
//       "tags": ["Sous-Vide", "Precision", "Food Preservation"]
//   },
//   "images": [
//       "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1704924446-anova-culinary-precision-vacuum-sealer-659f15036a0f0.jpg?crop=1xw:1xh;center,top&resize=980:*"
//   ],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1704924446-anova-culinary-precision-vacuum-sealer-659f15036a0f0.jpg?crop=1xw:1xh;center,top&resize=980:*"
// },
// {
//   "id": 9,
//   "title": "FoodSaver VS3150 Vacuum Sealer & Food Preservation System",
//   "description": "Comprehensive vacuum sealer system with multiple sealing options and built-in bag storage.",
//   "category": "Vacuum Sealers",
//   "price": 129.99,
//   "discountPercentage": 15,
//   "rating": 4.7,
//   "stock": 20,
//   "sku": "FS-VS3150-004",
//   "weight": "5.6 lbs",
//   "dimensions": "14 x 6 x 9 inches",
//   "warrantyInformation": "2 years",
//   "shippingInformation": "Free shipping",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       {
//           "user": "Anna",
//           "comment": "Very versatile and easy to use.",
//           "rating": 4.8
//       },
//       {
//           "user": "Daniel",
//           "comment": "Great features, but the bag storage could be improved.",
//           "rating": 4.6
//       }
//   ],
//   "returnPolicy": "30-day return",
//   "minimumOrderQuantity": 1,
//   "meta": {
//       "tags": ["Food Preservation", "Bag Storage", "Versatile"]
//   },
//   "images": [
//       "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1627052714-31JxoR2hSIL._SL500_.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
//   ],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1627052714-31JxoR2hSIL._SL500_.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
// },
// {
//   "id": 10,
//   "title": "Nesco VS-12 Deluxe Vacuum Sealer",
//   "description": "Deluxe vacuum sealer with double seal bar and adjustable settings for various foods.",
//   "category": "Vacuum Sealers",
//   "price": 99.99,
//   "discountPercentage": 10,
//   "rating": 4.6,
//   "stock": 12,
//   "sku": "NESCO-VS-005",
//   "weight": "4.2 lbs",
//   "dimensions": "12 x 6 x 15 inches",
//   "warrantyInformation": "1 year",
//   "shippingInformation": "Free shipping",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       {
//           "user": "Rachel",
//           "comment": "Reliable and easy to use.",
//           "rating": 4.7
//       },
//       {
//           "user": "Chris",
//           "comment": "Effective but a bit bulky.",
//           "rating": 4.5
//       }
//   ],
//   "returnPolicy": "30-day return",
//   "minimumOrderQuantity": 1,
//   "meta": {
//       "tags": ["Deluxe", "Double Seal", "Adjustable Settings"]
//   },
//   "images": [
//       "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1657291844-1656527710-nesco-deluxe-vacuum-s-1657291835.jpg?crop=1xw:1xh;center,top&resize=980:*"
//   ],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1657291844-1656527710-nesco-deluxe-vacuum-s-1657291835.jpg?crop=1xw:1xh;center,top&resize=980:*"
// },
// {
//   "id": 11,
//   "title": "Aeropress Go Coffee Maker",
//   "description": "A compact and portable coffee maker ideal for traveling, camping, or at-home use.",
//   "category": "Coffee Makers",
//   "price": 34.99,
//   "discountPercentage": 10,
//   "rating": 4.7,
//   "stock": 40,
//   "sku": "APG001",
//   "weight": "0.5 lbs",
//   "dimensions": "4 x 4 x 7 inches",
//   "warrantyInformation": "1 year",
//   "shippingInformation": "Ships in 1-2 business days",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       { "user": "Mason", "comment": "Perfect for on-the-go coffee lovers.", "rating": 4.8 },
//       { "user": "Olivia", "comment": "Easy to use and clean.", "rating": 4.7 }
//   ],
//   "returnPolicy": "30-day return policy",
//   "minimumOrderQuantity": 1,
//   "meta": { "tags": ["Coffee Maker", "Portable", "Aeropress"] },
//   "images": [
//       "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1696613232-51GDCIuaFUL.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
//   ],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1696613232-51GDCIuaFUL.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
// },
// {
//   "id": 12,
//   "title": "Miele CM7750 Fully Automatic Espresso Machine",
//   "description": "A high-end fully automatic espresso machine with customizable settings for a perfect cup every time.",
//   "category": "Coffee Makers",
//   "price": 1999.99,
//   "discountPercentage": 5,
//   "rating": 4.9,
//   "stock": 10,
//   "sku": "MCM7750",
//   "weight": "30 lbs",
//   "dimensions": "16 x 18 x 12 inches",
//   "warrantyInformation": "2 years",
//   "shippingInformation": "Free shipping",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       { "user": "James", "comment": "The best coffee machine I've ever owned.", "rating": 4.9 },
//       { "user": "Amelia", "comment": "Pricey but worth it for coffee lovers.", "rating": 4.8 }
//   ],
//   "returnPolicy": "60-day return policy",
//   "minimumOrderQuantity": 1,
//   "meta": { "tags": ["Espresso Machine", "Automatic", "Miele"] },
//   "images": [
//       "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1676571227-miele-cm5310-silence-coffee-system-o.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
//   ],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1676571227-miele-cm5310-silence-coffee-system-o.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
// },
// {
//   "id": 13,
//   "title": "Bosch 300 Series Fully Automatic Espresso Machine",
//   "description": "A reliable and efficient fully automatic espresso machine with intuitive controls and a sleek design.",
//   "category": "Coffee Makers",
//   "price": 899.99,
//   "discountPercentage": 8,
//   "rating": 4.6,
//   "stock": 15,
//   "sku": "B300SFAE",
//   "weight": "25 lbs",
//   "dimensions": "15 x 17 x 13 inches",
//   "warrantyInformation": "1 year",
//   "shippingInformation": "Ships in 3-5 business days",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       { "user": "Benjamin", "comment": "Great machine for daily use.", "rating": 4.6 },
//       { "user": "Charlotte", "comment": "Makes excellent espresso.", "rating": 4.7 }
//   ],
//   "returnPolicy": "30-day return policy",
//   "minimumOrderQuantity": 1,
//   "meta": { "tags": ["Espresso Machine", "Automatic", "Bosch"] },
//   "images": [
//       "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1724276764-untitled-design-pdf-66c65fb12c99b.png?crop=1xw:1xh;center,top&resize=980:*"
//   ],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1724276764-untitled-design-pdf-66c65fb12c99b.png?crop=1xw:1xh;center,top&resize=980:*"
// },
// {
//   "id": 14,
//   "title": "KitchenAid KF8 Fully Automatic Espresso Machine",
//   "description": "A versatile and stylish fully automatic espresso machine from KitchenAid, perfect for brewing barista-quality espresso at home.",
//   "category": "Coffee Makers",
//   "price": 749.99,
//   "discountPercentage": 6,
//   "rating": 4.5,
//   "stock": 20,
//   "sku": "KAF8",
//   "weight": "20 lbs",
//   "dimensions": "14 x 15 x 12 inches",
//   "warrantyInformation": "1 year",
//   "shippingInformation": "Ships in 2-4 business days",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       { "user": "Henry", "comment": "A solid choice for coffee enthusiasts.", "rating": 4.5 },
//       { "user": "Sophia", "comment": "Good machine but a bit noisy.", "rating": 4.4 }
//   ],
//   "returnPolicy": "30-day return policy",
//   "minimumOrderQuantity": 1,
//   "meta": { "tags": ["Espresso Machine", "Automatic", "KitchenAid"] },
//   "images": [
//       "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1724272121-untitled-design-pdf-66c64dc27bae7.png?crop=1xw:1xh;center,top&resize=980:*"
//   ],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1724272121-untitled-design-pdf-66c64dc27bae7.png?crop=1xw:1xh;center,top&resize=980:*"
// },
// {
//   "id": 15,
//   "title": "Nespresso Vertuo Plus Coffee and Espresso Maker",
//   "description": "A versatile coffee and espresso maker that uses Nespresso capsules to brew a range of beverages.",
//   "category": "Coffee Makers",
//   "price": 179.99,
//   "discountPercentage": 12,
//   "rating": 4.8,
//   "stock": 35,
//   "sku": "NVPCEM",
//   "weight": "9 lbs",
//   "dimensions": "9 x 12 x 13 inches",
//   "warrantyInformation": "1 year",
//   "shippingInformation": "Ships in 1-2 business days",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       { "user": "Daniel", "comment": "Convenient and makes great coffee.", "rating": 4.8 },
//       { "user": "Emily", "comment": "Love the variety of capsules.", "rating": 4.7 }
//   ],
//   "returnPolicy": "30-day return policy",
//   "minimumOrderQuantity": 1,
//   "meta": { "tags": ["Coffee Maker", "Espresso Maker", "Nespresso"] },
//   "images": [
//       "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1643490400-31xn9n62KnL._SL500_.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
//   ],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1643490400-31xn9n62KnL._SL500_.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
// },
// {
//   "id": 16,
//   "title": "Purple RestorePlus Hybrid Mattress",
//   "description": "A hybrid mattress that combines the benefits of Purple's signature GelFlex Grid with responsive coils, providing advanced pressure relief and support for a rejuvenating sleep experience.",
//   "category": "Mattresses",
//   "price": 1299.99,
//   "discountPercentage": 10,
//   "rating": 4.8,
//   "stock": 25,
//   "sku": "PRPHM1299",
//   "weight": "120 lbs",
//   "dimensions": "80 x 60 x 12 inches",
//   "warrantyInformation": "10 years",
//   "shippingInformation": "Free white-glove delivery",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       { "user": "Emily", "comment": "Best sleep I've ever had!", "rating": 5 },
//       { "user": "Mike", "comment": "Great for back pain relief.", "rating": 4.5 }
//   ],
//   "returnPolicy": "100-night trial",
//   "minimumOrderQuantity": 1,
//   "meta": { "tags": ["Hybrid", "Pressure Relief", "Support"] },
//   "images": [
//       "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1680725815-Resize1.png?crop=1.00xw:0.668xh;0,0.313xh&resize=980:*"
//   ],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1680725815-Resize1.png?crop=1.00xw:0.668xh;0,0.313xh&resize=980:*"
// },
// {
//   "id": 17,
//   "title": "Avocado Green Mattress",
//   "description": "An eco-friendly mattress made from organic materials, offering exceptional comfort and support with its latex and innerspring combination, ideal for eco-conscious sleepers.",
//   "category": "Mattresses",
//   "price": 1499.99,
//   "discountPercentage": 15,
//   "rating": 4.9,
//   "stock": 20,
//   "sku": "AVGCM1499",
//   "weight": "130 lbs",
//   "dimensions": "80 x 60 x 11 inches",
//   "warrantyInformation": "25 years",
//   "shippingInformation": "Free shipping",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       { "user": "Sarah", "comment": "Eco-friendly and extremely comfortable!", "rating": 5 },
//       { "user": "James", "comment": "Worth the investment for a healthier sleep.", "rating": 5 }
//   ],
//   "returnPolicy": "1-year trial",
//   "minimumOrderQuantity": 1,
//   "meta": { "tags": ["Eco-friendly", "Organic", "Latex"] },
//   "images": [
//       "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1660765492-avocado-green-mattress-1576090205.jpg?crop=1.00xw:0.671xh;0,0.282xh&resize=980:*"
//   ],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1660765492-avocado-green-mattress-1576090205.jpg?crop=1.00xw:0.671xh;0,0.282xh&resize=980:*"
// },
// {
//   "id": 18,
//   "title": "Bear Elite Hybrid",
//   "description": "A premium hybrid mattress that combines responsive coils with cooling gel foam, providing exceptional support and temperature regulation for an optimal sleep environment.",
//   "category": "Mattresses",
//   "price": 1599.99,
//   "discountPercentage": 20,
//   "rating": 4.7,
//   "stock": 15,
//   "sku": "BEARH1599",
//   "weight": "140 lbs",
//   "dimensions": "80 x 60 x 13 inches",
//   "warrantyInformation": "20 years",
//   "shippingInformation": "Free shipping and setup",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       { "user": "Laura", "comment": "Fantastic support and cooling effect.", "rating": 5 },
//       { "user": "Paul", "comment": "Great for my back pain and sleep quality.", "rating": 4.5 }
//   ],
//   "returnPolicy": "100-night trial",
//   "minimumOrderQuantity": 1,
//   "meta": { "tags": ["Hybrid", "Cooling", "Support"] },
//   "images": [
//       "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1705537204-1693255361-1688138448-1681153819-1679330267-1678474413-elitehybrid-enviro-frontheroedit-2067x1163-b3e93e17-e7bc-450b-aff2-3f6bbea2de24-1440x-640b7c928874c.jpg?crop=0.844xw:1xh;center,top&resize=980:*"
//   ],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1705537204-1693255361-1688138448-1681153819-1679330267-1678474413-elitehybrid-enviro-frontheroedit-2067x1163-b3e93e17-e7bc-450b-aff2-3f6bbea2de24-1440x-640b7c928874c.jpg?crop=0.844xw:1xh;center,top&resize=980:*"
// },
// {
//   "id": 19,
//   "title": "Casper Original Mattress",
//   "description": "A versatile foam mattress that combines three layers of high-quality foam to provide balanced support and comfort, suitable for all sleep positions.",
//   "category": "Mattresses",
//   "price": 999.99,
//   "discountPercentage": 10,
//   "rating": 4.6,
//   "stock": 30,
//   "sku": "CASP999",
//   "weight": "100 lbs",
//   "dimensions": "80 x 60 x 11 inches",
//   "warrantyInformation": "10 years",
//   "shippingInformation": "Free shipping",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       { "user": "Alex", "comment": "Comfortable and supportive, perfect for all sleep positions.", "rating": 4.5 },
//       { "user": "Sophia", "comment": "Great mattress for the price.", "rating": 4.6 }
//   ],
//   "returnPolicy": "100-night trial",
//   "minimumOrderQuantity": 1,
//   "meta": { "tags": ["Foam", "Support", "Comfort"] },
//   "images": [
//       "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1683820915-A1P1J2zj21L.jpg?crop=1.00xw:0.669xh;0,0.152xh&resize=980:*"
//   ],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1683820915-A1P1J2zj21L.jpg?crop=1.00xw:0.669xh;0,0.152xh&resize=980:*"
// },
// {
//   "id": 20,
//   "title": "Tuft & Needle Original Mattress",
//   "description": "A high-quality foam mattress known for its durability and supportive comfort, offering a balanced sleep experience at an affordable price.",
//   "category": "Mattresses",
//   "price": 799.99,
//   "discountPercentage": 5,
//   "rating": 4.5,
//   "stock": 40,
//   "sku": "TNN799",
//   "weight": "90 lbs",
//   "dimensions": "80 x 60 x 10 inches",
//   "warrantyInformation": "10 years",
//   "shippingInformation": "Free shipping",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       { "user": "Rachel", "comment": "Simple yet comfortable, great value.", "rating": 4.5 },
//       { "user": "Tom", "comment": "Good support and comfortable sleep.", "rating": 4.5 }
//   ],
//   "returnPolicy": "100-night trial",
//   "minimumOrderQuantity": 1,
//   "meta": { "tags": ["Foam", "Affordable", "Support"] },
//   "images": [
//       "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1685028215-91LrAGhiGgL.jpg?crop=0.998xw:0.666xh;0,0.332xh&resize=980:*"
//   ],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1685028215-91LrAGhiGgL.jpg?crop=0.998xw:0.666xh;0,0.332xh&resize=980:*"
// },
// {
//   "id": 21,
//   "title": "Breville Control Grip Immersion Blender",
//   "description": "An immersion blender with ergonomic control grip and high performance for blending, chopping, and pureeing.",
//   "category": "Kitchen Appliances",
//   "price": 129.99,
//   "discountPercentage": 10,
//   "rating": 4.7,
//   "stock": 20,
//   "sku": "BCG1299",
//   "weight": "2 lbs",
//   "dimensions": "6 x 4 x 15 inches",
//   "warrantyInformation": "1 year",
//   "shippingInformation": "Free shipping",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       { "user": "Emily", "comment": "Great for making soups and sauces.", "rating": 4.8 },
//       { "user": "John", "comment": "Powerful but a bit bulky.", "rating": 4.6 }
//   ],
//   "returnPolicy": "30-day return",
//   "minimumOrderQuantity": 1,
//   "meta": { "tags": ["Immersion Blender", "Kitchen", "Breville"] },
//   "images": [
//       "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1592873449-img70o.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
//   ],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1592873449-img70o.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
// },
// {
//   "id": 22,
//   "title": "Cuisinart Smart Stick Variable Speed Hand Blender",
//   "description": "A versatile hand blender with multiple speed settings and a comfortable grip for various blending tasks.",
//   "category": "Kitchen Appliances",
//   "price": 99.99,
//   "discountPercentage": 12,
//   "rating": 4.6,
//   "stock": 25,
//   "sku": "CSH999",
//   "weight": "1.5 lbs",
//   "dimensions": "5 x 3 x 14 inches",
//   "warrantyInformation": "3 years",
//   "shippingInformation": "Free shipping",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       { "user": "Anna", "comment": "Easy to use and clean.", "rating": 4.7 },
//       { "user": "Michael", "comment": "Good blender but a bit noisy.", "rating": 4.5 }
//   ],
//   "returnPolicy": "30-day return",
//   "minimumOrderQuantity": 1,
//   "meta": { "tags": ["Hand Blender", "Variable Speed", "Cuisinart"] },
//   "images": [
//       "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1694102391-519mkwflDiL.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
//   ],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1694102391-519mkwflDiL.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
// },
// {
//   "id": 23,
//   "title": "Vitamix Immersion Blender",
//   "description": "High-performance immersion blender from Vitamix, designed for quick and efficient blending.",
//   "category": "Kitchen Appliances",
//   "price": 149.99,
//   "discountPercentage": 8,
//   "rating": 4.8,
//   "stock": 15,
//   "sku": "VIB1499",
//   "weight": "2 lbs",
//   "dimensions": "7 x 4 x 16 inches",
//   "warrantyInformation": "7 years",
//   "shippingInformation": "Free shipping",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       { "user": "Sophia", "comment": "Powerful and durable.", "rating": 4.9 },
//       { "user": "David", "comment": "Expensive but worth it.", "rating": 4.7 }
//   ],
//   "returnPolicy": "30-day return",
//   "minimumOrderQuantity": 1,
//   "meta": { "tags": ["Immersion Blender", "High Performance", "Vitamix"] },
//   "images": [
//       "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1694092857-vitamix-hand-blender-64f9ce2ab6006.png?crop=0.713xw:1.00xh;0.147xw,0&resize=980:*"
//   ],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1694092857-vitamix-hand-blender-64f9ce2ab6006.png?crop=0.713xw:1.00xh;0.147xw,0&resize=980:*"
// },
// {
//   "id": 24,
//   "title": "KitchenAid Two-Speed Hand Blender",
//   "description": "A compact hand blender with two-speed settings for various blending tasks, from smoothies to soups.",
//   "category": "Kitchen Appliances",
//   "price": 79.99,
//   "discountPercentage": 5,
//   "rating": 4.5,
//   "stock": 30,
//   "sku": "KTH799",
//   "weight": "1.2 lbs",
//   "dimensions": "6 x 3 x 12 inches",
//   "warrantyInformation": "1 year",
//   "shippingInformation": "Free shipping",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       { "user": "Jessica", "comment": "Compact and effective.", "rating": 4.6 },
//       { "user": "James", "comment": "Basic but reliable.", "rating": 4.4 }
//   ],
//   "returnPolicy": "30-day return",
//   "minimumOrderQuantity": 1,
//   "meta": { "tags": ["Hand Blender", "Two-Speed", "KitchenAid"] },
//   "images": [
//       "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1699994404-KitchenAid-2-Speed-Hand-Blender-KHB1231_1af21fa1-952f-4da3-bb9b-9d4a6d5ff41d.518e667522160676355dba9ea14b1113.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
//   ],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1699994404-KitchenAid-2-Speed-Hand-Blender-KHB1231_1af21fa1-952f-4da3-bb9b-9d4a6d5ff41d.518e667522160676355dba9ea14b1113.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
// },
// {
//   "id": 25,
//   "title": "Cuisinart CPB-300 Personal Blender",
//   "description": "A versatile personal blender with a powerful motor and multiple blending options, ideal for smoothies and small batches.",
//   "category": "Kitchen Appliances",
//   "price": 89.99,
//   "discountPercentage": 10,
//   "rating": 4.4,
//   "stock": 22,
//   "sku": "CPB300",
//   "weight": "2.3 lbs",
//   "dimensions": "5 x 5 x 14 inches",
//   "warrantyInformation": "3 years",
//   "shippingInformation": "Free shipping",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       { "user": "Liam", "comment": "Great for personal use and easy to clean.", "rating": 4.5 },
//       { "user": "Olivia", "comment": "A bit noisy but works well.", "rating": 4.3 }
//   ],
//   "returnPolicy": "30-day return",
//   "minimumOrderQuantity": 1,
//   "meta": { "tags": ["Personal Blender", "Cuisinart", "Smoothies"] },
//   "images": [
//       "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1599765436-41J35Kfa1AL.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
//   ],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1599765436-41J35Kfa1AL.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
// },
// {
//   "id": 26,
//   "title": "Memory Foam Pillow",
//   "description": "Comfortable memory foam pillow that conforms to your head and neck.",
//   "category": "Home Pillow",
//   "price": 29.99,
//   "discountPercentage": 10,
//   "rating": 4.5,
//   "stock": 120,
//   "sku": "MFP1234",
//   "weight": "1.5 lbs",
//   "dimensions": "20x30 inches",
//   "warrantyInformation": "2 years",
//   "shippingInformation": "Free shipping on orders over $50",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       { "user": "Alice", "comment": "Best pillow I've ever used!", "rating": 5 },
//       { "user": "Bob", "comment": "Very comfortable.", "rating": 4 }
//   ],
//   "returnPolicy": "30-day return policy",
//   "minimumOrderQuantity": 1,
//   "meta": { "tags": ["Memory Foam", "Comfort", "Ergonomic"] },
//   "images": ["https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1720792576-elvirios-669135bc5c093.jpg?crop=1xw:1xh;center,top&resize=980:*"],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1720792576-elvirios-669135bc5c093.jpg?crop=1xw:1xh;center,top&resize=980:*"
// },
// {
//   "id": 27,
//   "title": "Gel Infused Pillow",
//   "description": "Cooling gel-infused pillow perfect for hot sleepers.",
//   "category": "Home Pillow",
//   "price": 34.99,
//   "discountPercentage": 15,
//   "rating": 4.7,
//   "stock": 80,
//   "sku": "GIP2345",
//   "weight": "2.0 lbs",
//   "dimensions": "20x28 inches",
//   "warrantyInformation": "3 years",
//   "shippingInformation": "Free shipping on all orders",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       { "user": "Carol", "comment": "Keeps me cool all night.", "rating": 5 },
//       { "user": "Dave", "comment": "Very comfortable and cool.", "rating": 4 }
//   ],
//   "returnPolicy": "60-day return policy",
//   "minimumOrderQuantity": 1,
//   "meta": { "tags": ["Gel", "Cooling", "Comfort"] },
//   "images": ["https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1612222726-tempurpedic-1612222625.png?crop=0.835xw:1.00xh;0.0946xw,0&resize=980:*"],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1612222726-tempurpedic-1612222625.png?crop=0.835xw:1.00xh;0.0946xw,0&resize=980:*"
// },
// {
//   "id": 28,
//   "title": "Down Alternative Pillow",
//   "description": "Soft down alternative pillow for those with allergies.",
//   "category": "Home Pillow",
//   "price": 24.99,
//   "discountPercentage": 5,
//   "rating": 4.3,
//   "stock": 95,
//   "sku": "DAP5678",
//   "weight": "1.3 lbs",
//   "dimensions": "20x26 inches",
//   "warrantyInformation": "1 year",
//   "shippingInformation": "Standard shipping available",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       { "user": "Grace", "comment": "Very soft and comfortable.", "rating": 4 },
//       { "user": "Henry", "comment": "Good value for money.", "rating": 4 }
//   ],
//   "returnPolicy": "30-day return policy",
//   "minimumOrderQuantity": 1,
//   "meta": { "tags": ["Down Alternative", "Soft", "Hypoallergenic"] },
//   "images": ["https://hips.hearstapps.com/hmg-prod/images/ghi-best-cooling-pillows-1581633594.png?crop=0.604xw:0.929xh;0.388xw,0.0714xh&resize=360:*"],
//   "thumbnail": "https://hips.hearstapps.com/hmg-prod/images/woman-sleeping-in-bedroom-at-home-royalty-free-image-1721137189.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=360:*"
// },
// {
//   "id": 29,
//   "title": "Feather Pillow",
//   "description": "Luxury feather pillow with a supportive feel.",
//   "category": "Home Pillow",
//   "price": 49.99,
//   "discountPercentage": 20,
//   "rating": 4.6,
//   "stock": 60,
//   "sku": "FP6789",
//   "weight": "2.2 lbs",
//   "dimensions": "22x32 inches",
//   "warrantyInformation": "3 years",
//   "shippingInformation": "Free shipping",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       { "user": "Isla", "comment": "Best feather pillow I've owned.", "rating": 5 },
//       { "user": "Jack", "comment": "Very high quality.", "rating": 4 }
//   ],
//   "returnPolicy": "60-day return policy",
//   "minimumOrderQuantity": 1,
//   "meta": { "tags": ["Feather", "Luxury", "Supportive"] },
//   "images": ["https://media.istockphoto.com/id/95505893/photo/anatomical-pillow.jpg?s=612x612&w=0&k=20&c=fmzJ65ACbsRrOJb17hRCn09-_IOpz-YNnnozNdjklZs="],
//   "thumbnail": "https://media.istockphoto.com/id/1773273405/photo/woman-sleeping-on-memory-foam-pillow-indoors.jpg?s=612x612&w=0&k=20&c=3tzuJ94NAdG0BDGebuQBtW_yDwu3fyaQHLNiKl5yy9Q="
// },
// {
//   "id": 30,
//   "title": "Organic Cotton Pillow",
//   "description": "Eco-friendly pillow made from 100% organic cotton.",
//   "category": "Home Pillow",
//   "price": 39.99,
//   "discountPercentage": 15,
//   "rating": 4.7,
//   "stock": 75,
//   "sku": "OCP7890",
//   "weight": "1.7 lbs",
//   "dimensions": "21x30 inches",
//   "warrantyInformation": "2 years",
//   "shippingInformation": "Free shipping over $50",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       { "user": "Kara", "comment": "I love the softness and eco-friendliness.", "rating": 5 },
//       { "user": "Leo", "comment": "Very comfortable and sustainable.", "rating": 4 }
//   ],
//   "returnPolicy": "30-day return policy",
//   "minimumOrderQuantity": 1,
//   "meta": { "tags": ["Organic", "Cotton", "Eco-friendly"] },
//   "images": ["https://hips.hearstapps.com/hmg-prod/images/screen-shot-2023-03-09-at-7-26-16-pm-640a7b1387cda.png?crop=0.832xw:1.00xh;0.0816xw,0&resize=980:*"],
//   "thumbnail": "https://hips.hearstapps.com/hmg-prod/images/screen-shot-2023-03-09-at-7-26-16-pm-640a7b1387cda.png?crop=0.832xw:1.00xh;0.0816xw,0&resize=980:*"
// },
// {
//   "id": 31,
//   "title": "Williams Sonoma Ceramic Nonstick 11-Piece Cookware Set",
//   "description": "A premium 11-piece cookware set featuring ceramic nonstick surfaces for easy cooking and cleaning.",
//   "category": "kitchen",
//   "price": 399.95,
//   "discountPercentage": 5.00,
//   "rating": 4.8,
//   "stock": 25,
//   "tags": ["cookware", "ceramic", "nonstick"],
//   "sku": "WSCN11",
//   "weight": 15.3,
//   "dimensions": { "width": 22.0, "height": 13.5, "depth": 10.0 },
//   "warrantyInformation": "Lifetime warranty",
//   "shippingInformation": "Ships in 2-3 business days",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       {"user": "Alice Johnson","comment": "Amazing quality, worth the price!","rating" :5},
//       {"reviewerName": "Bob Smith","comment": "Great set, but a bit heavy.","rating": 4}
//   ],
//   "returnPolicy": "30 days return policy",
//   "minimumOrderQuantity": 1,
//  "meta": { "tags": ["Food Dehydrator", "Electric", "Excalibur"] },
//   "images": [
//       "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1705942851-screenshot-2024-01-22-at-11-59-00-am-65ae9edd3be2a.png?crop=0.941xw:0.972xh;0.0465xw,0.0281xh&resize=980:*"
//   ],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1705942851-screenshot-2024-01-22-at-11-59-00-am-65ae9edd3be2a.png?crop=0.941xw:0.972xh;0.0465xw,0.0281xh&resize=200:*"
// },
// {
//   "id": 32,
//   "title": "OXO Professional Hard Anodized Cookware Set",
//   "description": "Durable hard-anodized cookware set from OXO, designed for professional-grade cooking.",
//   "category": "kitchen",
//   "price": 299.95,
//   "discountPercentage": 10.00,
//   "rating": 4.6,
//   "stock": 40,
//   "tags": ["cookware", "hard-anodized", "nonstick"],
//   "sku": "OXOHD12",
//   "weight": 13.7,
//   "dimensions": { "width": 20.5, "height": 12.0, "depth": 9.5 },
//   "warrantyInformation": "10 years warranty",
//   "shippingInformation": "Ships in 2-4 business days",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       {"user": "Charlie Davis","comment": "Fantastic set, cooks evenly!","rating": 5  },
//       {"user": "Dana Lee","comment": "Good quality, but the handles get hot.","rating": 4}
//   ],
//   "returnPolicy": "30 days return policy",
//   "minimumOrderQuantity": 1,
//   "meta": { "tags": ["Food Dehydrator", "Electric", "Excalibur"] },
//   "images": [
//       "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1705941888-71r7YV4OZvL.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
//   ],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1705941888-71r7YV4OZvL.jpg?crop=1xw:1.00xh;center,top&resize=200:*"
// },
// {
//   "id": 33,
//   "title": "Caraway Ceramic Cookware Set",
//   "description": "Eco-friendly ceramic cookware set by Caraway, designed for healthy, non-toxic cooking.",
//   "category": "kitchen",
//   "price": 395.00,
//   "discountPercentage": 7.50,
//   "rating": 4.7,
//   "stock": 30,
//   "tags": ["cookware", "ceramic", "non-toxic"],
//   "sku": "CARA11",
//   "weight": 14.2,
//   "dimensions": { "width": 21.0, "height": 13.0, "depth": 9.8 },
//   "warrantyInformation": "2 years warranty",
//   "shippingInformation": "Ships in 3-5 business days",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       {"user": "Emily Thompson","comment": "Beautiful and functional!","rating": 5},
//       {"user": "Frank Miller","comment": "Great set, but a bit pricey.","rating": 4}
//   ],
//   "returnPolicy": "30 days return policy",
//   "minimumOrderQuantity": 1,
//  "meta": { "tags": ["Food Dehydrator", "Electric", "Excalibur"] },
//   "images": [
//       "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1574865483-gh-ceramic-cookware-2-1574865468.png?crop=1.00xw:0.975xh;0,0.0250xh&resize=980:*"
//   ],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1574865483-gh-ceramic-cookware-2-1574865468.png?crop=1.00xw:0.975xh;0,0.0250xh&resize=200:*"
// },
// {
//   "id": 34,
//   "title": "Farberware EcoAdvantage Ceramic Nonstick Cookware Set",
//   "description": "Farberware's eco-friendly cookware set made with ceramic nonstick surfaces, ideal for sustainable cooking.",
//   "category": "kitchen",
//   "price": 149.99,
//   "discountPercentage": 12.00,
//   "rating": 4.4,
//   "stock": 50,
//   "tags": ["cookware", "ceramic", "eco-friendly"],
//   "sku": "FARBCS12",
//   "weight": 12.5,
//   "dimensions": { "width": 19.5, "height": 11.5, "depth": 8.0 },
//   "warrantyInformation": "5 years warranty",
//   "shippingInformation": "Ships in 2-4 business days",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       { "user": "Grace Wilson", "comment": "Good value for the price.", "rating": 4},
//       { "user": "Henry Adams","comment": "Nonstick works well, but needs care.","rating": 4}
//   ],
//   "returnPolicy": "30 days return policy",
//   "minimumOrderQuantity": 1,
//   "meta": { "tags": ["Food Dehydrator", "Electric", "Excalibur"] },
//   "images": [
//       "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1722439188-71JptsIBH0L.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
//   ],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1722439188-71JptsIBH0L.jpg?crop=1xw:1.00xh;center,top&resize=200:*"
// },
// {
//   "id": 35,
//   "title": "GreenPan Valencia Pro Hard Anodized Healthy Ceramic Nonstick 16 Piece Cookware Set",
//   "description": "Comprehensive 16-piece cookware set from GreenPan, featuring healthy ceramic nonstick surfaces.",
//   "category": "kitchen",
//   "price": 499.95,
//   "discountPercentage": 8.50,
//   "rating": 4.9,
//   "stock": 20,
//   "tags": ["cookware", "ceramic", "healthy"],
//   "sku": "GPPRO16",
//   "weight": 18.0,
//   "dimensions": { "width": 23.0, "height": 14.0, "depth": 10.5 },
//   "warrantyInformation": "Lifetime warranty",
//   "shippingInformation": "Ships in 2-3 business days",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       {"user": "Ivy Evans","comment": "Best cookware set I've ever owned!","rating": 5},
//       {"user": "Jack Williams","comment": "High quality and easy to clean.","rating": 5}
//   ],
//   "returnPolicy": "30 days return policy",
//   "minimumOrderQuantity": 1,
//  "meta": { "tags": ["Food Dehydrator", "Electric", "Excalibur"] },
//   "images": [
//       "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1722441636-41KupIdbFML._SL500_.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
//   ],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1722441636-41KupIdbFML._SL500_.jpg?crop=1xw:1.00xh;center,top&resize=200:*"
// },
// {
//   "id": 36,
//   "title": "Harlem Candle Co. Speakeasy Reed Diffuser",
//   "description": "A luxurious reed diffuser that brings the ambiance of the Jazz Age into your home.",
//   "category": "Diffusers",
//   "price": 48.00,
//   "discountPercentage": 10,
//   "rating": 4.8,
//   "stock": 20,
//   "sku": "HARLEMCANDLECO-001",
//   "weight": "1.5 lbs",
//   "dimensions": "3 x 3 x 10 inches",
//   "warrantyInformation": "1 year",
//   "shippingInformation": "Free shipping on orders over $50",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       {
//           "user": "Sophia",
//           "comment": "Elegant scent, perfect for my living room.",
//           "rating": 4.9
//       },
//       {
//           "user": "Liam",
//           "comment": "Lasts a long time and smells great.",
//           "rating": 4.7
//       }
//   ],
//   "returnPolicy": "30-day return",
//   "minimumOrderQuantity": 1,
//   "meta": {
//       "tags": ["Reed Diffuser", "Luxury", "Home Decor"]
//   },
//   "images": [
//       "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1698860716-0400017245425_NOCOLOR.jpg?crop=1.00xw:0.751xh;0,0.201xh&resize=980:*"
//   ],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1698860716-0400017245425_NOCOLOR.jpg?crop=1.00xw:0.751xh;0,0.201xh&resize=980:*"
// },
// {
//   "id": 37,
//   "title": "AYDRY Japanese Yuzu Room Diffuser",
//   "description": "A refreshing room diffuser with the zesty scent of Japanese Yuzu.",
//   "category": "Diffusers",
//   "price": 40.00,
//   "discountPercentage": 12,
//   "rating": 4.6,
//   "stock": 25,
//   "sku": "AYDRY-002",
//   "weight": "1.2 lbs",
//   "dimensions": "2.5 x 2.5 x 9 inches",
//   "warrantyInformation": "6 months",
//   "shippingInformation": "Free shipping on orders over $45",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       {
//           "user": "Emily",
//           "comment": "The scent is so refreshing, I love it!",
//           "rating": 4.8
//       },
//       {
//           "user": "Oliver",
//           "comment": "Nice diffuser, but a bit expensive for the size.",
//           "rating": 4.4
//       }
//   ],
//   "returnPolicy": "30-day return",
//   "minimumOrderQuantity": 1,
//   "meta": {
//       "tags": ["Room Diffuser", "Yuzu", "Japanese Scent"]
//   },
//   "images": [
//       "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1700067105-screen-shot-2023-11-15-at-11-51-20-am-6554f7161b54a.png?crop=0.997080291970803xw:1xh;center,top&resize=980:*"
//   ],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1700067105-screen-shot-2023-11-15-at-11-51-20-am-6554f7161b54a.png?crop=0.997080291970803xw:1xh;center,top&resize=980:*"
// },
// {
//   "id": 38,
//   "title": "Brooklyn Candle Studio Italia Reed Diffuser",
//   "description": "Transport yourself to the Italian countryside with this elegant reed diffuser.",
//   "category": "Diffusers",
//   "price": 55.00,
//   "discountPercentage": 15,
//   "rating": 4.9,
//   "stock": 15,
//   "sku": "BROOKLYNCANDLESTUDIO-003",
//   "weight": "1.8 lbs",
//   "dimensions": "3 x 3 x 12 inches",
//   "warrantyInformation": "1 year",
//   "shippingInformation": "Free shipping on orders over $55",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       {
//           "user": "Mia",
//           "comment": "Beautiful fragrance, very sophisticated.",
//           "rating": 5.0
//       },
//       {
//           "user": "Noah",
//           "comment": "A bit pricey, but worth it for the quality.",
//           "rating": 4.8
//       }
//   ],
//   "returnPolicy": "30-day return",
//   "minimumOrderQuantity": 1,
//   "meta": {
//       "tags": ["Reed Diffuser", "Italian Scent", "Elegant"]
//   },
//   "images": [
//       "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1719428078-italia-reed-diffuser-brooklyn-candle-studio-396153.jpg?crop=1.00xw:0.801xh;0,0.116xh&resize=980:*"
//   ],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1719428078-italia-reed-diffuser-brooklyn-candle-studio-396153.jpg?crop=1.00xw:0.801xh;0,0.116xh&resize=980:*"
// },
// {
//   "id": 39,
//   "title": "Lake & Skye 11 11 Reed Diffuser",
//   "description": "A clean and uplifting scent, perfect for any space.",
//   "category": "Diffusers",
//   "price": 50.00,
//   "discountPercentage": 10,
//   "rating": 4.7,
//   "stock": 18,
//   "sku": "LAKEANDSKYE-004",
//   "weight": "1.4 lbs",
//   "dimensions": "3 x 3 x 10 inches",
//   "warrantyInformation": "1 year",
//   "shippingInformation": "Free shipping on orders over $50",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       {
//           "user": "Ava",
//           "comment": "Lovely scent, not overpowering.",
//           "rating": 4.8
//       },
//       {
//           "user": "Ethan",
//           "comment": "A bit subtle, but great for a calm atmosphere.",
//           "rating": 4.6
//       }
//   ],
//   "returnPolicy": "30-day return",
//   "minimumOrderQuantity": 1,
//   "meta": {
//       "tags": ["Reed Diffuser", "Clean Scent", "Uplifting"]
//   },
//   "images": [
//       "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1700066902-screen-shot-2023-11-15-at-11-48-01-am-6554f64d58691.png?crop=0.9954128440366973xw:1xh;center,top&resize=980:*"
//   ],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1700066902-screen-shot-2023-11-15-at-11-48-01-am-6554f64d58691.png?crop=0.9954128440366973xw:1xh;center,top&resize=980:*"
// },
// {
//   "id": 40,
//   "title": "Mainstays Glass Diffuser with Reeds",
//   "description": "A stylish glass diffuser that adds a touch of elegance to your decor.",
//   "category": "Diffusers",
//   "price": 20.00,
//   "discountPercentage": 5,
//   "rating": 4.5,
//   "stock": 25,
//   "sku": "MAINSTAYS-005",
//   "weight": "1.3 lbs",
//   "dimensions": "2.8 x 2.8 x 9 inches",
//   "warrantyInformation": "6 months",
//   "shippingInformation": "Free shipping on orders over $25",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       {
//           "user": "Isabella",
//           "comment": "Great value for the price, looks nice.",
//           "rating": 4.6
//       },
//       {
//           "user": "Mason",
//           "comment": "Decent scent, but doesn't last as long as I hoped.",
//           "rating": 4.4
//       }
//   ],
//   "returnPolicy": "30-day return",
//   "minimumOrderQuantity": 1,
//   "meta": {
//       "tags": ["Glass Diffuser", "Elegant", "Affordable"]
//   },
//   "images": [
//       "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1700066963-screen-shot-2023-11-15-at-11-48-54-am-6554f684b9e81.png?crop=1.00xw:0.818xh;0,0.182xh&resize=980:*"
//   ],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1700066963-screen-shot-2023-11-15-at-11-48-54-am-6554f684b9e81.png?crop=1.00xw:0.818xh;0,0.182xh&resize=980:*"
// },
// {
//   "id": 41,
//   "title": "Halo Capsule X Cordless Vacuum Cleaner",
//   "description": "Cordless vacuum cleaner with award-winning performance, 60 mins run time, and a 2.0-litre capacity.",
//   "category": "Vacuum Cleaners",
//   "price": 299.99,
//   "discountPercentage": 15,
//   "rating": 4.5,
//   "stock": 20,
//   "sku": "HCX-CVC-001",
//   "weight": "2.5 lbs",
//   "dimensions": "10 x 8 x 40 inches",
//   "warrantyInformation": "2 years",
//   "shippingInformation": "Free shipping",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       {
//           "user": "James",
//           "comment": "Great battery life and lightweight.",
//           "rating": 4.7
//       },
//       {
//           "user": "Olivia",
//           "comment": "A bit noisy but works well.",
//           "rating": 4.3
//       }
//   ],
//   "returnPolicy": "30-day return",
//   "minimumOrderQuantity": 1,
//   "meta": {
//       "tags": ["Cordless", "Lightweight", "High Performance"]
//   },
//   "images": [
//       "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1720730483-Halo-Capsule-X-Cordless-Vacuum-Cleaner-Mini-Power-Brush-Hard-Floor-Roller-10-Bags-Wall-Dock-Award-Winning-Performance-60-Mins-Run-Time-Huge-2-0-Litre_53db7017-16a8-4c6d-9d82-7b9b04aff77e.7aae131ec9290bb029b374d9434cd875.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
//   ],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1720730483-Halo-Capsule-X-Cordless-Vacuum-Cleaner-Mini-Power-Brush-Hard-Floor-Roller-10-Bags-Wall-Dock-Award-Winning-Performance-60-Mins-Run-Time-Huge-2-0-Litre_53db7017-16a8-4c6d-9d82-7b9b04aff77e.7aae131ec9290bb029b374d9434cd875.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
// },
// {
//   "id": 42,
//   "title": "Tineco S10 ZT Smart Stick Vacuum",
//   "description": "Smart cordless stick vacuum with ZeroTangle brush head for hard floors and carpet.",
//   "category": "Vacuum Cleaners",
//   "price": 399.99,
//   "discountPercentage": 12,
//   "rating": 4.6,
//   "stock": 15,
//   "sku": "TS10-ZT-SCV-002",
//   "weight": "3.1 lbs",
//   "dimensions": "11 x 9 x 43 inches",
//   "warrantyInformation": "2 years",
//   "shippingInformation": "Free shipping",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       {
//           "user": "Sophia",
//           "comment": "Perfect for pet hair and easy to clean.",
//           "rating": 4.8
//       },
//       {
//           "user": "Liam",
//           "comment": "A bit heavy but powerful.",
//           "rating": 4.4
//       }
//   ],
//   "returnPolicy": "30-day return",
//   "minimumOrderQuantity": 1,
//   "meta": {
//       "tags": ["Smart", "ZeroTangle", "Pet Hair"]
//   },
//   "images": [
//       "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1720874936-Tineco-S10-ZT-Smart-Cordless-Stick-Vacuum-Cleaner-with-ZeroTangle-Brush-Head-for-Hard-Floors-Carpet_12078712-f226-432a-b09f-4d22d8989fcb.465fbd828a5011290ae08c99b542d76a.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
//   ],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1720874936-Tineco-S10-ZT-Smart-Cordless-Stick-Vacuum-Cleaner-with-ZeroTangle-Brush-Head-for-Hard-Floors-Carpet_12078712-f226-432a-b09f-4d22d8989fcb.465fbd828a5011290ae08c99b542d76a.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
// },
// {
//   "id": 43,
//   "title": "BISSELL ICONpet Turbo Edge",
//   "description": "Cordless vacuum cleaner with powerful suction and edge cleaning technology for pet hair.",
//   "category": "Vacuum Cleaners",
//   "price": 349.99,
//   "discountPercentage": 10,
//   "rating": 4.4,
//   "stock": 25,
//   "sku": "BIT-EVC-003",
//   "weight": "4.0 lbs",
//   "dimensions": "12 x 10 x 45 inches",
//   "warrantyInformation": "3 years",
//   "shippingInformation": "Free shipping",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       {
//           "user": "Mason",
//           "comment": "Excellent for pet owners, easy to maneuver.",
//           "rating": 4.5
//       },
//       {
//           "user": "Isabella",
//           "comment": "Suction is great, but battery life could be better.",
//           "rating": 4.3
//       }
//   ],
//   "returnPolicy": "30-day return",
//   "minimumOrderQuantity": 1,
//   "meta": {
//       "tags": ["Pet Hair", "Powerful Suction", "Edge Cleaning"]
//   },
//   "images": [
//       "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1688758063-0719aec0-87bb-4620-ab42-8255200309e2.36e3fcd38fcf56aee916c195805c99b1.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
//   ],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1688758063-0719aec0-87bb-4620-ab42-8255200309e2.36e3fcd38fcf56aee916c195805c99b1.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
// },
// {
//   "id": 44,
//   "title": "Electrolux WellQ7 Hard Floor Stick Cleaner",
//   "description": "Hard floor stick cleaner with powerful suction and long battery life.",
//   "category": "Vacuum Cleaners",
//   "price": 249.99,
//   "discountPercentage": 8,
//   "rating": 4.3,
//   "stock": 18,
//   "sku": "EQ7-HFSC-004",
//   "weight": "3.8 lbs",
//   "dimensions": "11 x 8 x 42 inches",
//   "warrantyInformation": "2 years",
//   "shippingInformation": "Free shipping",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       {
//           "user": "Charlotte",
//           "comment": "Lightweight and easy to handle, perfect for hardwood floors.",
//           "rating": 4.4
//       },
//       {
//           "user": "Oliver",
//           "comment": "Suction power is good, but a bit noisy.",
//           "rating": 4.2
//       }
//   ],
//   "returnPolicy": "30-day return",
//   "minimumOrderQuantity": 1,
//   "meta": {
//       "tags": ["Hard Floor", "Lightweight", "Long Battery Life"]
//   },
//   "images": [
//       "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1720793111-21A6Eb-rd8L._SL500_.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
//   ],
//   "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1720793111-21A6Eb-rd8L._SL500_.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
// },
// {
// "id": 45,
// "title": "SAMSUNG BESPOKE Jet AI Cordless Stick Vacuum Cleaner",
// "description": "A powerful and versatile cordless stick vacuum cleaner with AI-powered cleaning technology.",
// "category": "Vacuum Cleaners",
// "price": 799.99,
// "discountPercentage": 5,
// "rating": 4.7,
// "stock": 15,
// "sku": "SB-JetAI-010",
// "weight": "6.2 lbs",
// "dimensions": "10 x 10 x 44 inches",
// "warrantyInformation": "2 years",
// "shippingInformation": "Free shipping",
// "availabilityStatus": "In Stock",
// "reviews": [
//   {
//       "user": "Sophia",
//       "comment": "Excellent suction power and very easy to use.",
//       "rating": 4.8
//   },
//   {
//       "user": "Liam",
//       "comment": "A bit pricey but worth it for the performance.",
//       "rating": 4.6
//   }
// ],
// "returnPolicy": "30-day return",
// "minimumOrderQuantity": 1,
// "meta": {
//   "tags": ["AI", "Cordless", "Powerful", "Versatile"]
// },
// "images": [
//   "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1720466029-1695745272-screen-shot-2023-09-26-at-12-20-06-pm-651304cace1fa.png?crop=1xw:0.961xh;center,top&resize=980:*"
// ],
// "thumbnail": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1720466029-1695745272-screen-shot-2023-09-26-at-12-20-06-pm-651304cace1fa.png?crop=1xw:0.961xh;center,top&resize=980:*"
// }
// ];

  constructor(private http:HttpClient) { }
  
  
  getAllProducts():Observable<any>{
    return this.http.get<any>('')
  }
  getProductByID(prodId:number):Observable<any>{
    return this.http.get<any>(''${prodId})
  }
}
