
const buttonElement = document.getElementById("btn");
const quoteElement = document.getElementById("quote");

const partOne = ['I feel ', 'I attract ', 'I embody ', 'I enjoy ', 'I visualize ', 'I imagine ', 'I own ', 'I prioritize '];
const partTwo = ['ideas ', 'the strength ', 'success ', 'abundance ', 'my dreams ', 'freedom ', 'perseverance ', 'creativity '];
const partThree = ['so heavenly!', 'so unapologetically!', 'so beautifully!', 'so vividly!', 'so freely!', 'so easily!' ];

function randomMessage() {
    const firstPart = partOne[Math.floor(Math.random() * partOne.length)];
    const secondPart = partTwo[Math.floor(Math.random() * partTwo.length)];
    const thirdPart = partThree[Math.floor(Math.random() * partThree.length)];

    const message = firstPart + secondPart + thirdPart;

    quoteElement.innerHTML = message;
}



buttonElement.addEventListener("click", randomMessage);