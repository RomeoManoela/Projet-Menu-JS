'use strict';
const btnAll = document.querySelector('.All');
const btnBreakfast = document.querySelector('.Breakfast');
const btnLunch = document.querySelector('.Lunch');
const btnShakes = document.querySelector('.Shakes');
const btnDinner = document.querySelector('.Dinner');

const img = document.querySelectorAll('img');
const prixEL = document.querySelectorAll('span');
const infoEl = document.querySelectorAll('p');
const titre = document.querySelectorAll('h5');
const sectionEl = document.querySelectorAll('section');

// const butt =
//   "I'm baby woke milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-presed";

// const Diner =
//   'vapoware iPhone mumblecore selage raw denim slow-carb leggings gochujang helvetica man braid jiambing.Marfa thundercats';
const Buttermilk = {
  titre: 'Buttermilk Pancakes',
  prix: '$ 15.99',
  plus: "I'm baby woke milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-presed",
};
const Diner = {
  titre: 'Diner Double',
  prix: '$ 13.99',
  plus: 'vapoware iPhone mumblecore selage raw denim slow-carb leggings gochujang helvetica man braid jiambing.Marfa thundercats',
};
const Godzilla = {
  titre: 'Godzilla Milkshakes',
  prix: '$ 6.99',
  plus: 'ombucha chillwave fanny pack 3 wolf moon street art photo booth bfore they sold out organic viral',
};
const Country = {
  titre: 'Country Delight',
  prix: '$ 20.99',
  plus: 'Shabby chic keffyeh neutra snackware pork belly shoredicth.Prism austin milkshk truffaut',
};
const Egg = {
  titre: 'Egg Attack',
  prix: '$ 22.99',
  plus: "franzen vegan pabst bicycle rihts kickstarter pinterest meditation farm-to-table 90's pop-up",
};
const Oreo = {
  titre: 'Oreo Dream',
  prix: '$ 18.99',
  plus: 'Portant chicharrones ethical edison bulb palo santo craft beer chia heirloom iPhone everyday',
};
const Bacon = {
  titre: 'Bacon Overflow',
  prix: '$ 8.99',
  plus: 'carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird',
};
const American = {
  titre: 'American Classic',
  prix: '$ 12.99',
  plus: 'on it tumbir kickstarter thundercats migas everyday carry squid palo santo leggings Food truck truffaut',
};
const Quarantine = {
  titre: 'Quaratine Buddy',
  prix: '$ 16.99',
  plus: 'shateboard fam synth authentic semiatics.Live-edge lyft af, edison bulb yuccie crucifix microodosing',
};
const Steak = {
  titre: 'Steak Dinner',
  prix: '$ 39.99',
  plus: 'skateboad fam synth authentic semiotics.Live-edge lyft af,edison bulb yuccie crucifix microodosing',
};

const tablEL = [
  Buttermilk,
  Diner,
  Godzilla,
  Country,
  Egg,
  Oreo,
  Bacon,
  American,
  Quarantine,
  Steak,
];

// const prix = [15.99, 13.99];
// const info = [butt, Diner];
const allFunction = function () {
  for (let i = 0; tablEL.length > i; i++) {
    img[i].src = `images/item-${i + 1}.jpeg`;
    titre[i].textContent = tablEL[i].titre;
    infoEl[i].textContent = tablEL[i].plus;
    prixEL[i].textContent = tablEL[i].prix;
  }
};
allFunction();
const ClickBouttonAction = function (a, b, c) {
  for (let i = 0; tablEL.length > i; i++) sectionEl[i].classList.add('hidden');
  sectionEl[a].classList.remove('hidden');
  sectionEl[b].classList.remove('hidden');
  sectionEl[c].classList.remove('hidden');
};

btnAll.addEventListener('click', function () {
  for (let i = 0; tablEL.length > i; i++)
    sectionEl[i].classList.remove('hidden');
});
btnBreakfast.addEventListener('click', function () {
  ClickBouttonAction(0, 3, 6);
});
btnLunch.addEventListener('click', function () {
  ClickBouttonAction(1, 4, 7);
});
btnShakes.addEventListener('click', function () {
  ClickBouttonAction(2, 5, 8);
});
btnDinner.addEventListener('click', function () {
  ClickBouttonAction(9);
});
