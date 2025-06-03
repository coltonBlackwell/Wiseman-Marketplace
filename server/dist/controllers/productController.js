export const products = [
    { id: 1,
        name: "THE FACE OFF by Stewart Sherwood Kids Hockey Plate, Limited Edition 1989 Vintage",
        price: 29.99,
        inCart: false,
        imageUrl: "/images/plate/plate_thumbnail.png",
        featurePhoto1: "/images/plate/img1.png",
        featurePhoto2: "/images/plate/img2.png"
    },
    { id: 2,
        name: "1st Edition RARE 1953 HOWARD CLEWES An Epitaph for Love VINTAGE HARDBACK DJ",
        price: 66.00,
        inCart: false,
        imageUrl: "/images/epitaph/thumbnail.png",
        featurePhoto1: "/images/epitaph/img1.png",
        featurePhoto2: "/images/epitaph/img2.png"
    },
    { id: 3,
        name: "Jimmy Choo Blue Leather Mave Foldover Zippered Clutch Wristlet Purse Handbag",
        price: 283.00,
        inCart: false,
        imageUrl: "/images/jimmy/thumbnail.png",
        featurePhoto1: "/images/jimmy/img1.png",
        featurePhoto2: "/images/jimmy/img2.png"
    },
    { id: 4,
        name: "RICK NASH McFarlane NHL Series 10, Columbus Blue Jackets #61 White Jersey ~ NEW",
        price: 29.00,
        inCart: false,
        imageUrl: "/images/rick/thumbnail.png",
        featurePhoto1: "/images/rick/img1.png",
        featurePhoto2: "/images/rick/img2.png"
    },
];
export const getProducts = (_req, res) => {
    res.json(products);
};
//# sourceMappingURL=productController.js.map