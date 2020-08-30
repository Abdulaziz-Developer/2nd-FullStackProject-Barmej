// 1st Project
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".main-nav");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

// 2nd Project

//  const meetYourMatch = document.getElementsByClassName("meetYourMatch")[0];

//  const hyperlink = document.getElementsByClassName("button")[0];

//  function Go() {
//   hyperlink.setProperty(propertyName, value, priority);
//  }

let pets = [
  {
    type: "Cat",
    gender: "Male",
    age: 5,
    name: "Oliver",
    location: "Kuwait",
    img:
      "https://www.rover.com/blog/wp-content/uploads/2019/03/cat-4070059_1920-1024x765.jpg",
  },
  {
    type: "Dog",
    gender: "Female",
    age: 8,
    name: "Max",
    location: "Bahrain",
    img:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-puppy-lying-down-on-grass-royalty-free-image-1587052215.jpg?crop=0.668xw:1.00xh;0.255xw,0&resize=640:*",
  },
  {
    type: "Bird",
    gender: "Female",
    age: 12,
    name: "Silver",
    location: "Kuwait",
    img:
      "https://scontent.fkwi9-1.fna.fbcdn.net/v/t1.0-9/58376582_2550099781689701_900862844805840896_n.jpg?_nc_cat=101&_nc_sid=110474&_nc_ohc=RpoEgdjS_YEAX_cM2mJ&_nc_ht=scontent.fkwi9-1.fna&oh=2d41c343f9b7a92544c53c8ddf2e9d03&oe=5F670259",
  },
  {
    type: "Snake",
    gender: "Male",
    age: 2,
    name: "Asmodeus",
    location: "Saudi Arabia",
    img:
      "https://cf.ltkcdn.net/small-pets/images/std/261927-675x450-Albino_Darwin_Python.jpg",
  },
];

let stories = [
  {
    title: "The Life with Cats",
    location: "Omman",
    theStory:
      "Cats is a sung-through musical composed by Andrew Lloyd Webber, based on the 1939 poetry collection Old Possum's Book of Practical Cats by T. S. Eliot. It tells the story of a tribe of cats called the Jellicles and the night they make the, deciding which cat will ascend to the Heaviside Layer and come back to a new life. The musical includes the well-known song  as sung by Grizabella. As of 2019, Cats remains the fourth-longest-running Broadway show and the sixth-longest-running West End show.",
    img:
      "https://ichef.bbci.co.uk/news/1024/cpsprodpb/83D7/production/_111515733_gettyimages-1208779325.jpg",
  },
  {
    title: "The Life with Dogs",
    location: "USA",
    theStory:
      "The dog is a pet animal. A dog has sharp teeth so that it can eat flesh very easily, it has four legs, two ears, two eyes, a tail, a mouth, and a nose. It is a very clever animal and is very useful in catching thieves.",
    img:
      "https://i.pinimg.com/originals/21/09/6a/21096aa9f5b2fbe19a1b3d02fe6ea84e.jpg",
  },
  {
    title: "The Life with Snakes",
    location: "British",
    theStory:
      "Snakes are elongated, legless, carnivorous reptiles of the suborder Serpentes.[2] Like all other squamates, snakes are ectothermic, amniote vertebrates covered in overlapping scales.",
    img:
      "https://newscdn2.weigelbroadcasting.com/TmZ1p-1544635270-125083-blog-SnakeRescue.jpg",
  },
];

let submit = document.getElementById("submit");
let cityfield = document.getElementById("cityfield");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementsByClassName("widgets")[0].innerHTML = null;
  for (let i = 0; i < pets.length; i++) {
    if (cityfield.value.toUpperCase() == pets[i].location.toUpperCase()) {
      let card = `<div class="widget">
      <div class="widget__image">
        <img src="${pets[i].img}" alt="pet image" />
      </div>
      <div class="widget__desc">
        <h4>${pets[i].name}</h4>
        <p>${pets[i].gender}</p>
        <p>${pets[i].location}</p>
      </div>
    </div>`;
      document.getElementsByClassName("widgets")[0].innerHTML += card;
    }
  }
});

for (let i = 0; i < stories.length; i++) {
  let card2 = `<div class="widget">
            <div class="widget__image">
              <img src=${stories[i].img} alt="graphic-image" />
            </div>
            <div class="widget__desc">
              <h1>${stories[i].title}</h1>
              <a class="link">Read More</a>
              <p id="thestories">${stories[i].theStory}</p>
            </div>
            </div>`;
  document.getElementsByClassName("widgets")[1].innerHTML += card2;
}

// for (let i = 0; i < Read_More.length; i++) {
//   Read_More[i].addEventListener("click", () => {
//     let desc = document.getElementById("thestories");
//     if (desc) {
//       desc.style.display = "none";
//     } else {
//       desc.style.display = "block";
//     }
//   });
// }

let _ReadMore = document.getElementsByClassName("link");
let i;

for (i = 0; i < _ReadMore.length; i++) {
  _ReadMore[i].addEventListener("click", function () {
    let para = this.nextElementSibling;
    if (para.style.maxHeight) {
      para.style.maxHeight = null;
    } else {
      para.style.maxHeight = para.scrollHeight + "px";
    }
  });
}
