const itemlist = [
  {
    name: "burger",
    img: "./img/burger.png"
  },
  {
    name: "pizza",
    img: "./img/pizza.png"
  },
  {
    name: "colddrink",
    img: "./img/colddrink.png"
  },
  {
    name: "mobile",
    img: "./img/mobile.png"
  },
  {
    name: "fries",
    img: "./img/fries.png"
  },
  {
    name: "sword",
    img: "./img/sword.png"
  },
  {
    name: "burger",
    img: "./img/burger.png"
  },
  {
    name: "pizza",
    img: "./img/pizza.png"
  },
  {
    name: "colddrink",
    img: "./img/colddrink.png"
  },
  {
    name: "mobile",
    img: "./img/mobile.png"
  },
  {
    name: "fries",
    img: "./img/fries.png"
  },
  {
    name: "sword",
    img: "./img/sword.png"
  }

];

itemlist.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");

let cardChoosen = [];
let cardChoosenId = [], cardWon = [];

function board() {
  for (let i = 0; i < itemlist.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "img/blank.png");
    card.setAttribute("alt", `img-${i}`);
    card.setAttribute("data-id", i);

    gridDisplay.appendChild(card);

    card.addEventListener("click", flipcard);
  }
}

function checkMatch() {
  const cards = document.querySelectorAll("#grid img");

  const optionOneId = cardChoosenId[0];
  const optionTwoId = cardChoosenId[1];

  if (cardChoosen[0] == cardChoosen[1]) {
    // alert("success");
    cards[optionOneId].setAttribute("src", "img/white.png");
    cards[optionTwoId].setAttribute("src", "img/white.png");
    cards[optionOneId].removeEventListener("click", flipcard);
    cards[optionTwoId].removeEventListener("click", flipcard);

    cardWon.push(cardChoosen);
  }
  else {
    setTimeout(reverse, 300);
  }

  resultDisplay.textContent = cardWon.length;

  cardChoosen = [];
  cardChoosenId = [];

  function reverse() {
    cards[optionOneId].setAttribute("src", "img/blank.png");
    cards[optionTwoId].setAttribute("src", "img/blank.png");
    // alert("sorry Try again!!")
  }

  if (cardWon.length == (itemlist.length / 2)) {
    resultDisplay.textContent = "congrats";
  }
}

function flipcard() {
  const cardId = this.getAttribute("data-id");
  this.setAttribute("src", itemlist[cardId].img);

  const cardName = itemlist[cardId].name;
  cardChoosen.push(cardName);
  cardChoosenId.push(cardId);

  if (cardChoosen.length == 2) {
    setTimeout(checkMatch, 500);
  }

}

board();