const quoteList = [
    "Software is like sex: it’s better when it’s free. – Linus Torvalds",
    "If we want users to like our software, we should design it to behave like a likable person. – Alan Cooper",
    "Quality is a product of a conflict between programmers and testers. ― Yegor Bugayenk",
    "Everybody should learn to program a computer because it teaches you how to think. – Steve Jobs",
    "I taught myself how to program computers when I was a kid, bought my first computer when I was 10, and sold my first commercial program when I was 12. – Elon Musk",
    "Web development is difficult, only then it is fun to do. You just have to set your standards. If it were to be easy, would anyone do it? ― Olawale Daniel",
    "Programmers seem to be changing the world. It would be a relief, for them and for all of us, if they knew something about it. – Ellen Ullman",
    "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program. – Linus Torvalds",
    "When I wrote this code, only God and I understood what I did. Now only God knows. – Anonymous",
    "I’m not a great programmer; I’m just a good programmer with great habits. ― Kent Beck",
    "You might not think that programmers are artists, but programming is an extremely creative profession. It’s logic-based creativity. – John Romero",
    "Software comes from heaven when you have good hardware. – Ken Olsen",
    "There is always one more bug to fix. – Ellen Ullman",
    "If debugging is the process of removing bugs, then programming must be the process of putting them in. – Sam Redwine",
    "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code. – Dan Salomon",
    "Computers are fast; developers keep them slow. – Anonymous",
    "The best thing about technology is that it allows you to concentrate on your vision and forget the machinery. – John Landis",
    "The world will not wait for us. The technological revolution will leave us behind if we do not catch up. – Kofi Annan"
];

const quoteBtn = document.querySelector("button");

quoteBtn.addEventListener('click', () => {
    const randomQuotes = Math.floor(Math.random() * quoteList.length);
    const quotes = quoteList[randomQuotes];
    const quotesContainer = document.querySelector("#quotes");
    quotesContainer.textContent = quotes;
})