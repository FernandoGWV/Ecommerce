import Product1 from "../Assets/image-product-1.jpg";
import Product2 from "../Assets/image-product-2.jpg";
import Product3 from "../Assets/image-product-3.jpg";
import Product4 from "../Assets/image-product-4.jpg";
import Product1Thumb from "../Assets/image-product-1-thumbnail.jpg";
import Product2Thumb from "../Assets/image-product-2-thumbnail.jpg";
import Product3Thumb from "../Assets/image-product-3-thumbnail.jpg";
import Product4Thumb from "../Assets/image-product-4-thumbnail.jpg";

const ProdutosDB = [
  {
    titulo: "Fall Limited Edition Sneakers",
    id: 1,
    description:
      "These low-pr ofile sneakrs are you perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer",
    preco: 250.0,
    promo: 125.0,
    desconto: 50,
    OthersImage: [
      {
        linkSmall: Product1Thumb,
        linkLarge: Product1,
      },
      {
        linkSmall: Product2Thumb,
        linkLarge: Product2,
      },
      {
        linkSmall: Product3Thumb,
        linkLarge: Product3,
      },
      {
        linkSmall: Product4Thumb,
        linkLarge: Product4,
      },
    ],
  },

  {
    titulo: "Fall Limited Edition Sneakers",
    id: 2,
    description:
      "These low-pr ofile sneakrs are you perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer",
    preco: 250.0,
    promo: 125.0,
    desconto: 50,
    OthersImage: [
      {
        linkSmall: Product1Thumb,
        linkLarge: Product1,
      },
      {
        linkSmall: Product2Thumb,
        linkLarge: Product2,
      },
      {
        linkSmall: Product3Thumb,
        linkLarge: Product3,
      },
      {
        linkSmall: Product4Thumb,
        linkLarge: Product4,
      },
    ],
  },
];

export default ProdutosDB;
