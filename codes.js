var quote = [
'Change your thoughts and you change your world.', 
'Knitting not only relaxes me, it also brings a feeling of being at home.',
'My life motto is \'Do my best, so that I can\'t blame myself for anything.',
'I knew what I wanted to do in sport from the age of nine.',
'I can\'t change the direction of the wind, but I can adjust my sails to always reach my destination.',
'Put your heart, mind, and soul into even your smallest acts. This is the secret of success.',
'The best preparation for tomorrow is doing your best today.',
'Let us remember: One book, one pen, one child, and one teacher can change the world.',
'If opportunity doesn\'t knock, build a door.',
'Let us make our future now, and let us make our dreams tomorrow\'s reality.',
'I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.'
]

function newQuote(){
   var randomNumber = Math.floor(Math.random()*10);
}
document.getElementById('quoteDisplay').innerHTML = quote[randomNumber];