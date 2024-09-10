export interface Product {
 

  id: number,
  title: string,
  description: string,
  category: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  sku:string,
  weight: string,
  dimensions: string,
  warrantyInformation: string,
  shippingInformation: string,
  availabilityStatus: string,
  reviews: [
      {
          user: string,
          comment:string,
          rating: number
      }
  ],
  returnPolicy: string,
  minimumOrderQuantity: number,
  meta: {
      tags: string[]
  },
  images: [
    string
  ],
  thumbnail:string
  }
  