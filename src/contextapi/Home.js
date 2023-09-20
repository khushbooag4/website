import React from "react";
import { faker } from "@faker-js/faker";

const Home = () => {
  const productArray = [...Array(20)].map(() => ({
    id: faker.datatype.number(),
    name: faker.commerce.productName(),
    desc: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    image: faker.image.url(),
  }));
  console.log(productArray);
  return <></>;
};

export default Home;
