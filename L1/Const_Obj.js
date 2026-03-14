const product={
    name:"Parker Jotter standard ball pen",
    rating:4.5,
    price: 270,
    offer: 5,
};
console.log(product);

console.log("Offer:",product.offer); //access the value of offer key
product["rating"]=product["rating"]-0.5; //update the value of rating key
console.log("Rating:",product["rating"]); //access the value of rating key


let a="123";
let b=1;
console.log(a+b); //string concatenation  output: 1231
console.log(Number(a)+b); //number addition output: 124

const profile={
    username:"@yash",
    posts:105,
    followers:596000,
    following:4, 
    isFollow:false
}
console.log(profile);
console.log("Followers:",profile.followers);
console.log(typeof profile); //object
console.log(typeof profile.posts); // number