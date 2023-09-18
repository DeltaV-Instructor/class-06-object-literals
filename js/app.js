'use strict';
console.log('app js is connected');


// Problem Domain: the Cedar Rapids Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.


//Each Kitten's profile should have:
// Name
// Breed
// - gender   -- isFixed.
// - random age assigned
// a list of what they like.
// an image
// is good with kids
// is good with dogs
// is good with other animals


// let emptyObject = {};
let petOne = {
  name: 'Fluffy',
  breed: 'Tabby',
  imageName: 'diabloBlanco',
  intertests: ['Sun Light', 'Mouse Toys', 'Red Dots'],
  isGoodWithKids: true,
  isGoodWithCats: true,
  isGoodWithDogs: true,
  setAge: function(){
    this.age = randomAge(3,12) + ' Months old.';
    console.log('did we get a month old from our randomAge:',this.age);
  }
};

//                   3          12
function randomAge(minMonth, maxMonth){
  //do the math... return a random number for a months old..
  return Math.floor(Math.random() * (maxMonth - minMonth) + minMonth);
}
