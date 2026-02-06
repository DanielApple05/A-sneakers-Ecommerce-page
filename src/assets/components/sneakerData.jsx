// sneakerData.js

const Sneakers = {
  adidas: [
    {
      id: "adidas-1",
      name: "Adidas Ultraboost 22",
      price: 180,
      gender: "male",
      image: "../src/images/male-imgfolder/addidas1-m-b.png",
      category: "running",
    },
    {
      id: "adidas-2",
      name: "Adidas Forum Low",
      price: 120,
      gender: "female",
      image: "/images/adidas/forum-low.jpg",
      category: "lifestyle",
    },
    {
      id: "adidas-3",
      name: "Adidas NMD R1",
      price: 160,
      gender: "male",
      image: "/images/adidas/nmd.jpg",
      category: "casual",
    },
  ],

  jordans: [
    {
      id: "jordan-1",
      name: "Air Jordan 1 Retro High",
      price: 200,
      gender: "male",
      image: "/images/jordans/jordan1.jpg",
      category: "basketball",
    },
    {
      id: "jordan-2",
      name: "Air Jordan 4 Retro",
      price: 220,
      gender: "female",
      image: "/images/jordans/jordan4.jpg",
      category: "basketball",
    },
    {
      id: "jordan-3",
      name: "Jordan Delta",
      price: 170,
      gender: "male",
      image: "/images/jordans/delta.jpg",
      category: "lifestyle",
    },
  ],

  nikeAirforce: [
    {
      id: "airforce-1",
      name: "Nike Air Force 1 Low",
      price: 150,
      gender: "male",
      image: "/images/nike/airforce1.jpg",
      category: "lifestyle",
    },
    {
      id: "airforce-2",
      name: "Nike Air Force 1 Shadow",
      price: 155,
      gender: "female",
      image: "/images/nike/airforce-shadow.jpg",
      category: "lifestyle",
    },
    {
      id: "airforce-3",
      name: "Nike Air Force 1 '07",
      price: 140,
      gender: "male",
      image: "/images/nike/airforce07.jpg",
      category: "casual",
    },
  ],
};

export default Sneakers;


// Gender filters
export const maleSneakers = [
  ...Sneakers.adidas.filter(item => item.gender === "male"),
  ...Sneakers.jordans.filter(item => item.gender === "male"),
  ...Sneakers.nikeAirforce.filter(item => item.gender === "male"),
];

export const femaleSneakers = [
  ...Sneakers.adidas.filter(item => item.gender === "female"),
  ...Sneakers.jordans.filter(item => item.gender === "female"),
  ...Sneakers.nikeAirforce.filter(item => item.gender === "female"),
];

