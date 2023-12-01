
import bigMealCombo from '../images/Bucket_COB.png'
import BigBox_Zinger from '../images/Zinger_Sandwich.png'
import bigBucket from '../images/Zinger_Stacker.png'
import Box_2pc from '../images/Box_2pcFeed.png'
import Popcorn from '../images/PopcornChicken.png'


export const BigMeal = [
  {
    id: "1",
    name: "Family Bucket",
    price: 5500,
    desc: "25 pieces of chicken with large fries and a soda",
    image: bigMealCombo,
  },
  {
    id: "2",
    name: "Big Box x4",
    price: 5500,
    desc: "5 chicken burgers with large fries and a soda",
    image: BigBox_Zinger,
  },
  {
    id: "3",
    name: "KFC Bonus",
    price: 5500,
    desc: "5 pieces of chicken, 3 burgers and soda",
    image: bigBucket,
  },
];

export const StreetWise = [
  {
    id: "1",
    name: "Burger Combo",
    price: 9500,
    desc: "Chicken burger with regular fries and a soda",
    image: BigBox_Zinger,
  },
  {
    id: "2",
    name: "Streetwise 2",
    price: 5500,
    desc: "Chicken wings with regular fries and a soda",
    image: Box_2pc,
  },
  {
    id: "3",
    name: "KFC special",
    price: 5500,
    desc: "Bucket with fries and chicken nuggets with soda",
    image: Popcorn,
  },
];

export const MenuCategories = [
  {
    id: "1",
    slug: "streetwise",
    name: "Streetwise Combos",
    desc: "Streetwise",
    image: BigBox_Zinger,
  },
  {
    id: "2",
    slug: "bigMeals",
    name: "Meals For Occassions",
    desc: "Meals for big occasions",
    image: bigBucket,
  },
];