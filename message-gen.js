const partOne = ['I have ', 'I desire ', 'I yearn for ', 'I enjoy ', 'I visualize ', 'I imagine ', 'I own ', 'I prioritize '];
const partTwo = ['ideas ', 'the strength ', 'success ', 'money ', 'water ', 'freedom ', 'nothing ', 'creativity '];
const partThree = ['so heavenly!', 'so unapologetically!', 'so beautifully!', 'so vividly!', 'so freely!', 'so easily!' ];

function randomMessage() {
    const firstPart = partOne[Math.floor(Math.random() * partOne.length)];
    const secondPart = partTwo[Math.floor(Math.random() * partTwo.length)];
    const thirdPart = partThree[Math.floor(Math.random() * partThree.length)];

    return firstPart + secondPart + thirdPart;
}

console.log(randomMessage());





