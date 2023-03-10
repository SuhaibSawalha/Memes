function hideEveryThing () {
    document.querySelector('#textsRepresentButtonsContent').textContent = '';
    document.querySelector('#imgOfTheMeme').width = 0;
    document.querySelector('#imgOfTheMeme').height = 0;
    document.querySelector('#imgOfTheMeme').style.border = "";
    document.querySelector('#JokeQuoteRiddle').textContent = '';
    document.querySelector('#theAnswerOfTheRiddle').textContent = '';
    currentRiddle = 'notPressed';
}
function getRandom (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

const Memes = [
    'https://pbs.twimg.com/media/Enm7QC7XYAEO-4L.jpg',
    'https://res.cloudinary.com/practicaldev/image/fetch/s--483z6xBg--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nklexsqp82ylqyzlljm5.jpg',
    'https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33be8cf4ba7565123c8bc_YPD3ulQQAGQpOcnqIm3QzSTRgzmr1SexpW9ZjMpJ1mAnUxx4iF05XOTu44sk0qQG-8XgBcYmGZGAD-5SAZvJl3TjtmhgWnn-w0C2XKwhBscV78RVvhwZfyp0v_Pa6sNj5zxpOvRW.png',
    'https://miro.medium.com/v2/resize:fit:439/1*ZYyXvhYDGvELzYoXYpPLMg.png',
    'https://remote-tools-images.s3.amazonaws.com/programmer-memes/10.jpg',
    'https://i.pinimg.com/originals/8c/36/50/8c3650e5343c3289b353125155640fcd.jpg',
    'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Programmer-while-sleeping.jpg?x86257',
    'https://www.boredpanda.com/blog/wp-content/uploads/2022/03/clipimage-6228c8e3cbb20__700.jpg',
    'https://gitpiper.com/assets/memes/programming-meme-ff7166d5-d272-4fce-8e30-cef42a514420.webp'
]
function whenPressShowAMeme () {
    hideEveryThing();
    document.getElementById('imgOfTheMeme').src = getRandom(Memes);
    document.getElementById('imgOfTheMeme').width = 500;
    document.getElementById('imgOfTheMeme').height = 500;
    document.getElementById('imgOfTheMeme').style.border = "10px solid rgb(152, 133, 24)";
    document.getElementById('imgOfTheMeme').style.borderRadius = "40px";
}

const Jokes = [
    'What do kids play when their mom is using the phone? Bored games.',
    'What do you call an ant who fights crime? A vigilANTe!', 
    'Why are snails slow? Because the are carrying a house on their back.',
    'What is the smartest insect? A spelling bee!',
    'What does a storm cloud wear under his raincoat? Thunderwear.',
    'What is fast, loud and crunchy? A rocket chip.'
]
function whenPressTellMeAJoke () {
    hideEveryThing();
    document.getElementById('JokeQuoteRiddle').textContent = getRandom(Jokes);
}

const Quotes = [
    'Be yourself; everyone else is already taken.   -Oscar Wilde',
    'I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can not handle me at my worst, then you sure as hell do not deserve me at my best.  -Marilyn Monroe',
    'Two things are infinite: the universe and human stupidity; and I am not sure about the universe.  -Albert Einstein',
    'So many books, so little time.  -Frank Zappa',
    'A room without books is like a body without a soul.  -Marcus Tullius Cicero'
]
function whenPressRandomQuote () {
    hideEveryThing();
    console.log(typeof getRandom(Quotes));
    document.getElementById('JokeQuoteRiddle').textContent = getRandom(Quotes);
}

const Riddles = [
    {riddle: 'I am the rare case when today comes before yesterday. What am I?', answer: 'A dictionary'},
    {riddle: 'What goes all the way around the world but stays in a corner?', answer: 'A stamp'},
    {riddle: 'You cannot keep me until you have given me. What am I?', answer: 'Your word'},
    {riddle: 'What gets bigger the more you take away?', answer: 'A hole'},
    {riddle: 'What has four fingers and a thumb, but is not alive?', answer: 'A glove'}
]
let currentRiddle = 'notPressed';
function whenPressRiddleMe () {
    hideEveryThing();
    currentRiddle = getRandom(Riddles);
    document.getElementById('JokeQuoteRiddle').textContent = currentRiddle.riddle;
}
function whenPressRevealRiddleAnswer () {
    if (currentRiddle !== 'notPressed') {
        document.getElementById('theAnswerOfTheRiddle').textContent = currentRiddle.answer;
    }
}