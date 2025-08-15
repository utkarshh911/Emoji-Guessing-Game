const emojiList = [
  { emoji: "👍", name: "Thumbs Up" },
  { emoji: "😂", name: "Face with Tears of Joy" },
  { emoji: "❤️", name: "Red Heart"},
  { emoji: "🔥", name: "Fire"},
  { emoji: "😊", name: "Smiling Face with Smiling Eyes",},
  { emoji: "😎", name: "Smiling Face with Sunglasses" },
  { emoji: "🥺", name: "Pleading Face" },
  { emoji: "🎉", name: "Party Popper" },
  { emoji: "😢", name: "Crying Face"},
  { emoji: "🤔", name: "Thinking Face"},
  { emoji: "🙌", name: "Raising Hands" },
  { emoji: "😡", name: "Angry Face"},
  { emoji: "🤯", name: "Exploding Head"},
  { emoji: "🥳", name: "Partying Face"},
  { emoji: "😴", name: "Sleeping Face" },
  { emoji: "💩", name: "Pile of Poo" },
  { emoji: "🤮", name: "Face Vomiting" },
  { emoji: "🤓", name: "Nerd Face" },
  { emoji: "🥶", name: "Cold Face" },
  { emoji: "😇", name: "Smiling Face with Halo" },
  { emoji: "😜", name: "Winking Face with Tongue"},
  { emoji: "🤗", name: "Hugging Face"},
  { emoji: "👀", name: "Eyes"},
  { emoji: "👻", name: "Ghost"},
  { emoji: "🧠", name: "Brain"}

  // add more
];

// some intilazation
let EmojiIndex=0;
let value=0;
let seconds=45;
let Timer;


//apne to kya kya manipulate karna hai!!

const guessInput=document.getElementById('guess-input');

const answer=document.getElementById('result');

const Score=document.getElementById('Score');

const timerElement=document.getElementById('Timer');


//display emoji in web-page !!

function displayEmoji(){
    const descriptionElement=document.getElementById('Emojis-Container');

    descriptionElement.textContent=emojiList[EmojiIndex].emoji;
}



function chackGuess(){
 const guess=guessInput.value.trim().toLowerCase();

 const CorrectEmoji=emojiList[EmojiIndex].name.trim().toLowerCase();

 if(guess===CorrectEmoji){
  answer.textContent='Correct! ';
  value +=1;
 }else{
  answer.style.color='red';
  answer.textContent='Wrong! ';
 }

 Score.textContent=`Score :${value}`
 guessInput.value='';
 nextEmoji();
}

function nextEmoji(){
  EmojiIndex++;

  setInterval(()=>{
    answer.textContent='';
  },1000);

  timerElement.textContent='';

  if(EmojiIndex===emojiList.length){
    EmojiIndex=0;
  }

  displayEmoji();
}



document.getElementById('guess-input').addEventListener('keydown',(event)=>{
  if(event.key==='Enter'){
    chackGuess();
  }
});


document.addEventListener('DOMContentLoaded',()=>{
  displayEmoji();
  startTimer();
});


function startTimer(){
 Timer= setInterval(()=>{
  seconds--;
  timerElement.textContent=`Time: ${seconds}s`


  if(seconds<=0){
    end();
  }
  },1000);
}

function end(){
  clearInterval(Timer);
  timerElement.textContent="";
}