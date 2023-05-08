const containerEl = document.getElementById("container");
const cards__length = 16;
const cards = [];


let previousShownCard = undefined;

let icons = [
    "fa-house",
    "fa-heart",
    "fa-truck",
    "fa-tree",
    "fa-dumbbell",
    "fa-tractor",
    "fa-tablet-screen-button",
    "fa-jet-fighter-up",
];


// copy the icons again (double them)
icons.push(...icons);

for(let i = 0; i < 100; i++) {
    const idx1 = Math.floor(Math.random() * icons.length);
    const idx2 = Math.floor(Math.random() * icons.length);

    const temp = icons[idx1];
    icons[idx1] = icons[idx2];
    icons[idx2] = temp;
}

for(let i = 0; i < cards__length; i++) {
    const cardEl = document.createElement("div");
    cardEl.classList.add("card");
    cardEl.innerHTML = `
      <div class = "front">
        <i class="fa-solid ${icons[i]}"></i>
      </div>
      <div class="back"> <small> Click me </small> </div>
    `

    cardEl.addEventListener("click", () => {
        if(!cardEl.classList.contains("show")) {
            cardEl.classList.add("show");
        } 

        if(!previousShownCard) {
            previousShownCard = cardEl;
        } else {
            const iconOne = previousShownCard.querySelector("i").classList[1];
            const iconTwo = cardEl.querySelector("i").classList[1];

            if(iconOne !== iconTwo) {
                const temp = previousShownCard;
                setTimeout(() => {
                    temp.classList.remove("show");
                    cardEl.classList.remove("show");
                }, 1000);
            }
            previousShownCard = undefined;
        }

    });

    cards.push(cardEl);

    containerEl.appendChild(cardEl);
}


