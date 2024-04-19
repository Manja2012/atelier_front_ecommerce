export interface Product {
    name: string,
    category: string,
    brand: string,
    price: number,
    content: string,
    stock: number,
    online: boolean,
    // avis: Avis,
    picture: Picture[]
  }
  
  interface Picture {
    img1: string,
    img2: string,
    img3: string,
    img4: string,
  }
  
//   interface Avis {
//     stars: number,
//     nb: number
//   }
  
//   export type RootState = {
//     sneakers: {
//       data: Sneaker[]
//     }
//   }