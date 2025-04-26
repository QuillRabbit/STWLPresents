const bundleTable = document.getElementById("bundle-table-row");
const sortSelector = document.getElementById("sort-selector");
const seasonQuery = document.getElementsByClassName("season-query");
// console.log(seasonQuery);

const bundleList = [
    {
        image: "2020Winter.png",
        title: "Santa's Secret Transfic Anthology Vol 1",
        release: "December 2020",
        idNumber: 1,
        quarter: "winter",
        entries: 28,
        words: "164,000",
        price: "5.00",
        linkTo: "https://itch.io/b/773/santas-secret-transfic-stash",
        description: "A bundle of short stories originating from a Secret Santa writing exchange in December 2020. These stories span a wide variety of styles and subjects, including fantasy, sci-fi, and realistic fiction, but most of them in some way deal with transgender themes."
    },
    {
        image: "2021Winter.png",
        title: "Santa's Secret Transfic Anthology Vol 2",
        release: "December 2021",
        idNumber: 2,
        quarter: "winter",
        entries: 31,
        words: "267,000",
        price: "6.00",
        linkTo: "https://itch.io/b/1268/santas-secret-transfic-stash-vol-2",
        description: "A bundle of short stories originating from a Secret Santa writing exchange in December 2021. These stories span a wide variety of styles and subjects, including fantasy, sci-fi, and realistic fiction, but most of them in some way deal with transgender themes."
    },
    {
        image: "2022Fall.png",
        title: "Secret Transfic Autumn Anthology",
        release: "October 2022",
        idNumber: 3,
        quarter: "autumn",
        entries: 18,
        words: "138,000",
        price: "10.00",
        linkTo: "https://itch.io/b/1566/secret-transfic-autumn-anthology",
        description: "An anthology of stories, some Autumn-themed, some Halloween-themed, and some horror. These stories span a wide variety of styles and subjects, including fantasy, sci-fi, and realistic fiction, but most of them in some way deal with transgender themes."
    },
    {
        image: "2022Winter.png",
        title: "Santa's Secret Transfic Stash Volume 3",
        release: "December 2022",
        idNumber: 4,
        quarter: "winter",
        entries: 21,
        words: "180,000",
        price: "18.00",
        linkTo: "https://itch.io/b/1681/santas-secret-transfic-stash-vol-3",
        description: "A bundle of short stories originating from a Secret Santa writing exchange in December 2022. These stories span a wide variety of styles and subjects, including fantasy, sci-fi, and realistic fiction, but most of them in some way deal with transgender themes."
    },
    {
        image: "2023 May.png",
        title: "Mermay",
        release: "May 2023",
        idNumber: 5,
        quarter: "spring",
        entries: 8,
        words: "94,000",
        price: "8.00",
        linkTo: "https://itch.io/b/1837/secret-trans-writing-lair-presents-mermay",
        description: "Camping in the woods, the deep sea, creatures both beautiful and haunting. This is an anthology of queer-lit short stories and novelettes, ready for your beach reading season! These stories span a wide variety of styles and subjects, including fantasy, horror, romance, and realistic fiction, all centered on a summery theme!"
    },
    {
        image: "2023Fall.png",
        title: "One Prompt, Many Paths",
        release: "October 2023",
        idNumber: 6,
        quarter: "autumn",
        entries: 10,
        words: "100,000",
        price: "10.00",
        linkTo: "https://itch.io/b/2049/secret-trans-writing-lair-presents-one-prompt-many-paths",
        description: `Ten different branches, one seed! See how the minds of ten different queer authors take the same prompt. As varied as we all are, different as paths could possibly be. With your purchase, you get access to ten stories: Superheroes and Villains, Monsters and Demons, Murder and Romance, Heartache and Growth, Euphoria and Dysphoria. They're united by the seed of one idea, but they all shine on their own!</p><br><p>All stories included were inspired by the same prompt: Two people are hiding a secret from each other, but believe that the other has the same secret! But when the secrets are revealed, it turns out they aren't the same. When the truth is revealed to one or both, how does it change the way the characters see each other - and the world at large?`
    },
    {
        image: "2023Winter.png",
        title: "Santa's Secret Transfic Stash Volume 4",
        release: "December 2023",
        idNumber: 7,
        quarter: "winter",
        entries: 30,
        words: "240,000",
        price: "15.00",
        linkTo: "https://itch.io/b/2211/stwl-presents-santas-secret-transfic-stash-vol-4",
        description: `The season is upon us! For the fourth year in a row, the members of the Secret Trans Writing Lair have exchanged Secret Santa stories, and now is your chance read them! Thirty stories and over 240,000 words of fiction, ranging from short stories to novella, all in one collection. And, new to this bundle and available only to purchases here, there is a convenient collected Epub with all of the stories gathered together!</p><br><p>In this collection you'll find action packed tales, sweet romances, spiritual awakenings, elves and pixies, demons and deergirls, and much much more! A wide variety of festive queer fiction from thirty trans authors await you in Santa's Secret Transfic Stash vol 4!`
    },
    {
        image: "2024Spring.png",
        title: "Spring Cleaning",
        release: "March 2024",
        idNumber: 8,
        quarter: "spring",
        entries: 9,
        words: "145,000",
        price: "5.00",
        linkTo: "https://itch.io/b/2360/secret-trans-writing-lair-presents-spring-cleaning",
        description: `Spring is in the air! The flowers are in bloom, the chill is receding, and renewal is all around us. Why not take a break from cleaning out those dusty rafters and curl up with nine brand new stories from some of your favorite queerlit authors?</p><br><p>Every writer has an idea which has languished in a corner of their mind or in their drafts folder, sometimes for years on end. An idea that's just too good to completely discard, but which you don't know how to start or finish writing. Well, as it turns out, this year we had the perfect chance to do it! Several trans writers stepped up to the challenge, delved deep into their trove of unfinished products, and are now presenting you the results.`
    },
    {
        image: "2024Fall.png",
        title: "The Fruit of Our Effforts",
        release: "October 2024",
        idNumber: 9,
        quarter: "autumn",
        entries: 11,
        words: "148,000",
        price: "6.00",
        linkTo: "https://itch.io/b/2684/stwl-presents-the-fruit-of-our-efforts",
        description: `Fall has come around, and with a turn of the season comes an all new anthology from the Secret Trans Writing Lair! Grab your pumpkin spice, snuggle up in the crisp air, and tuck into eleven all new stories from some of your favorite queerlit authors.</p><br><p>A romance with a knight who may not be all they claim to be, love and war in the far flung galaxy, the horror of a serial killer's obsession, schoolgirls trapped in an endless timeloop. All this plus vampires, witches, mad scientists, and more await you in this autumnal anthology spanning genres from romance and comedy to horror and drama.`
    },
    {
        image: "2024Winter.png",
        title: "Santa's Secret Transfic Stash Volume 5",
        release: "December 2024",
        quarter: "winter",
        entries: "19",
        words: "176,000",
        price: "10.00",
        link: "https://itch.io/b/2807/stwl-presents-santas-secret-transfic-stash-vol-5",
        description: `Time for a little holiday magic! As is the annual tradition, the members of the Secret Trans Writing Lair have exchanged Secret Santa stories, and now is your chance to read them! Eighteen all new stories collected into one anthology!</p><br><p>In this collection you'll find holiday cheer after the apocalypse, family reunions through time, superheroics that change the status quo, angels who get more than they bargain for, world-ending and gender-bending romances,  and much much more! Plus, as a bonus to bundle purchasers, you also get the entire collection in one convenient epub release~</p><br><p>A wide variety of festive queer fiction across style and genre from nineteen trans authors await you in Santa's Secret Transfic Stash volume 5!`
    },
    {
        image: "2025March.jpg",
        title: "Hope for Today",
        release: "March 2025",
        quarter: "spring",
        entries: "10",
        words: "N/A",
        price: "5.00",
        link: "https://itch.io/b/2961/stwl-presents-hope-for-today",
        description: `Brand new stories from your favorite queer lit authors to help brighten your days, and remind you that there's still Hope for Today.`
    },
];

const displayTiles = (arr = bundleList, param, verse) => {
    bundleTable.innerHTML = "";
    
    let arr2 = arr.toSorted((a, b) => Number(a[param]) - Number(b[param]));
    if(verse === 1){
        arr2.reverse();
    }

    arr2.forEach((element) => 
        bundleTable.innerHTML +=
        `<td class="entry">
        <img src="${element.image}" class="FitPicture">
        <h3>${element.title}</h3>
        <h4>${element.release}</h4>
        <p>${element.entries} Entries</p>
        <p>${element.words} Words</p>
        <p>US$${element.price}</p>
        <br>
        <a href="${element.linkTo}" class="button bundleLink">Visit the Bundle</a>
        <p>${element.description}</p>
        </td>`    
    );
};


const selectorSwitch = (val) => {
    switch(val) {
        case "oldest-first":
            displayTiles(bundleList, "idNumber", 0);
            break;
        case "cost-high":
            displayTiles(bundleList, "price", 1);
            break;
        case "cost-low":
            displayTiles(bundleList, "price", 0);
            break;
        case "most-entries":
            displayTiles(bundleList, "entries", 1);
            break;
        case "least-entries":
            displayTiles(bundleList, "entries", 0);
            break;
        default:
            displayTiles(bundleList, "idNumber", 1);
    };
};

sortSelector.addEventListener("change", () => selectorSwitch(sortSelector.value));

const seasonFilter = () => {
    const toInclude = Array.from(seasonQuery).filter((element) => element.classList.includes("included"));

    console.log(toInclude);
}

Array.from(seasonQuery).forEach((element) => element.addEventListener("click", () => {element.classList.toggle("included"); console.log(element.innerText); console.log(element.classList)}));