import { cloneString } from "./cloneString";

const original = {
  name: "Green Mueller",
  email: "Rigoberto_Muller47@yahoo.com",
  address: "575 Aiden Forks",
  bio: "Tenetur voluptatem odit labore et voluptatem vel qui placeat sit.",
  active: false,
  salary: 37993,
  birth: new Date("1965-04-18T11:38:00Z"),
  bankInformation: {
    amount: "802.04",
    date: new Date("2012-02-02T00:00:00Z"),
    business: "Bernhard, Kuhn and Stehr",
    name: "Investment Account 8624",
    type: "payment",
    account: "34889694",
  },
};

const clonedString = cloneString(original);
clonedString.name = "Blue Mueller";

console.log(`Original Name: ${original.name}`);
console.log(`Cloned Name: ${clonedString.name}`);
console.log("Original Object:", original);
console.log("Cloned Object:", clonedString);
