
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

const keys = document.querySelectorAll('.key')  //Getting all the keys

const whiteKeys = document.querySelectorAll('.key.white') //Taking all white keys
const blackKeys = document.querySelectorAll('.key.black') //Taking all black keys

// keys.forEach((key) => {   // forEach key that we got in keys array 
//   key.addEventListener('click', () => playNote(key))  // on clicking it calls an anonymous function, which calls playNote
// })

keys.forEach(elementFunction);

function elementFunction(element) {   // forEach key that we got in keys array 
  element.addEventListener('click', elementClickedFunction);
}

//event is an object which is returned by 'addEventListener' inside our function parameter. Here the object is 'MouseEvent', because 'click' event belongs to it.
function elementClickedFunction(event) {
  elementClicked = event.target;  // event.target returns the element that triggered the event
  playNote(elementClicked);   //Play a note when our key is clicked 

}

// document.addEventListener('keydown', e => {
//   if (e.repeat) return
//   const key = e.key
//   const whiteKeyIndex = WHITE_KEYS.indexOf(key)
//   const blackKeyIndex = BLACK_KEYS.indexOf(key)

//   if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
//   if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
// })


document.addEventListener('keydown', keyDownFunction);

function keyDownFunction(event) {     //Inside 'event' we have 'KeyboarEvent' object
  if (event.repeat) return;   //Without this, if i press down lets say 'z' button, then there is a annoying repeated sound. Its because the keydown event is repeated.
  const keyboardButtonPressed = event.key; //Gives the key pressed

  const whiteKeyIndex = WHITE_KEYS.indexOf(keyboardButtonPressed);    //indexOf return -1 if it cant find it
  const blackKeyIndex = BLACK_KEYS.indexOf(keyboardButtonPressed);

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);

  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);

}





function playNote(elementClicked) {
  const noteAudio = document.getElementById(elementClicked.dataset.note) //getting audio note for that key
  noteAudio.currentTime = 0 //To play the notes even if we hit the keys faster
  noteAudio.play()  //Playing note
  elementClicked.classList.add('active')    //Adding a class to our keys, so as to change the color when pressed

  // noteAudio.addEventListener('ended', () => { 
  //   keyClicked.classList.remove('active')
  // })


  //Notice here the 'event' object returned is of no use, but we writing it because we know the eventlistener returns it.
  noteAudio.addEventListener('ended', (event) => {
    elementClicked.classList.remove('active')
  })
}

