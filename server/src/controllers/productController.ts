import { Request, Response } from 'express';

export interface Product {
  id: number;
  name: string;
  price: number;
  inCart: boolean;
  details: string;
  imageUrl: string;
  featurePhoto1: string;
  featurePhoto2: string;
}

export const products: Product[] = [
  { id: 1, 
    name: "THE FACE OFF by Stewart Sherwood Kids Hockey Plate, Limited Edition 1989 Vintage", 
    price: 29.99 , 
    inCart: false , 
    details: "-Plate diameter is 8.5 -First plate in “The Face Off” collection by Stewart Sherwood -Limited edition strictly limited to a maximum of 150 firing days -Fired on Dominion china -Excellent condition: no chips, no cracks, no colour fading -Plate number: 18189B -Made in 1989",
    imageUrl: "/images/plate/plate_thumbnail.png", 
    featurePhoto1: "/images/plate/img1.png", 
    featurePhoto2: "/images/plate/img2.png"
  },

  // { id: 2, 
  //   name: "1st Edition RARE 1953 HOWARD CLEWES An Epitaph for Love VINTAGE HARDBACK DJ", 
  //   price: 66.00, 
  //   inCart: false, 
  //   imageUrl: "/images/epitaph/thumbnail.png", 
  //   featurePhoto1: "/images/epitaph/img1.png", 
  //   featurePhoto2: "/images/epitaph/img2.png"
  // },
  
  // { id: 3, 
  //   name: "Jimmy Choo Blue Leather Mave Foldover Zippered Clutch Wristlet Purse Handbag", 
  //   price: 283.00, 
  //   inCart: false, 
  //   imageUrl: "/images/jimmy/thumbnail.png", 
  //   featurePhoto1: "/images/jimmy/img1.png", 
  //   featurePhoto2: "/images/jimmy/img2.png"
  // },

  // { id: 4, 
  //   name: "RICK NASH McFarlane NHL Series 10, Columbus Blue Jackets #61 White Jersey ~ NEW", 
  //   price: 29.00, 
  //   inCart: false, 
  //   imageUrl: "/images/rick/thumbnail.png", 
  //   featurePhoto1: "/images/rick/img1.png", 
  //   featurePhoto2: "/images/rick/img2.png"
  // },

];

export const getProducts = (_req: Request, res: Response) => {
  res.json(products);
};