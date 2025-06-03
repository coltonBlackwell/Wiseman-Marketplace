export const products = [
    { id: 1,
        name: "THE FACE OFF by Stewart Sherwood Kids Hockey Plate, Limited Edition 1989 Vintage",
        price: 29.99,
        inCart: false,
        details: "-Plate diameter is 8.5 -First plate in “The Face Off” collection by Stewart Sherwood -Limited edition strictly limited to a maximum of 150 firing days -Fired on Dominion china -Excellent condition: no chips, no cracks, no colour fading -Plate number: 18189B -Made in 1989",
        imageUrl: "/images/plate/plate_thumbnail.png",
        featurePhoto1: "/images/plate/img1.png",
        featurePhoto2: "/images/plate/img2.png"
    },
    { id: 2,
        name: "1st Edition RARE 1953 HOWARD CLEWES An Epitaph for Love VINTAGE HARDBACK DJ",
        price: 66.00,
        inCart: false,
        details: "First edition -Published in 1953 by Doubleday and Company, New York -Preowned in very good condition -Subscription inside front cover (photo) -Dust jacket in very good condition - evidence of price sticker on back and spine (photos) -Binding in excellent condition -Pages clean, completely bound, and in excellent condition -Hardcover",
        imageUrl: "/images/epitaph/thumbnail.png",
        featurePhoto1: "/images/epitaph/img1.png",
        featurePhoto2: "/images/epitaph/img2.png"
    },
    { id: 3,
        name: "Jimmy Choo Blue Leather Mave Foldover Zippered Clutch Wristlet Purse Handbag",
        price: 283.00,
        inCart: false,
        details: "-Luxurious Jimmy Choo vintage wristlet with detachable leather strap to become a clutch, made in Italy with denim blue coloured leather, black suede accents, gold hardware, and a light blue soft interior fabric in excellent condition -Exterior front zippered pocket, flap with magnetic closures, zippered main enclosure with interior zippered pocket and a slip pocket. -10”W x 6”H x 2”D -9.5” strap drop (removable) -Preowned in excellent condition with minimal scuffs and leather creasing with wear.",
        imageUrl: "/images/jimmy/thumbnail.png",
        featurePhoto1: "/images/jimmy/img1.png",
        featurePhoto2: "/images/jimmy/img2.png"
    },
    { id: 4,
        name: "RICK NASH McFarlane NHL Series 10, Columbus Blue Jackets #61 White Jersey ~ NEW",
        price: 29.00,
        inCart: false,
        details: "McFarlane's Sportspicks -Series 10 -NHL -Rick Nash -Columbus Blue Jackets -Completely sealed in box -Brand new",
        imageUrl: "/images/rick/thumbnail.png",
        featurePhoto1: "/images/rick/img1.png",
        featurePhoto2: "/images/rick/img2.png"
    },
];
export const getProducts = (_req, res) => {
    res.json(products);
};
//# sourceMappingURL=productController.js.map