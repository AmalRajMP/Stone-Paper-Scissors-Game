const textElement=document.querySelector('.text');

let getImg1=document.querySelector("#img1");
let getImg2=document.querySelector("#img2");
let getImg3=document.querySelector("#img3");

let resultBoard=document.querySelector("#result");

let yourScore=document.querySelector(".yourScore");
let compScore=document.querySelector(".compScore");
let yScore=0;
let cScore=0;

let resetBtn=document.querySelector("#reload");

const audioBtn=document.querySelector("#playAudio");
const audio=document.querySelector("#bgMusic");

let update=document.querySelector("#who");
audioBtn.addEventListener("click",()=>{
    audio.play();
    audioBtn.style.backgroundImage="url('icon.webp')";
})
audioBtn.addEventListener("dblclick",()=>{
    audio.pause();
    audioBtn.style.backgroundImage="url('mute.png')";
})

resetBtn.addEventListener("click",()=>{
    location.reload();
})

setInterval(()=>{
    const randomColor=getRandomColor();
    textElement.style.color=randomColor;
},2000);

function getRandomColor()
{
    const letters='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++)
        {
            color+=letters[Math.floor(Math.random()*16)];
        }   
        return color;
}

function getComputerChoice(){
    const choices=["Rock","Paper","Scissors"];
    const randomIndex=Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

getImg1.addEventListener("click",()=>{
    console.log("Rock");
    let str=getComputerChoice();
    if(str==="Rock")
    {
       resultBoard.innerHTML="Draw";
    }
    else if(str==="Paper")
    {
        resultBoard.innerHTML="Computer Wins"
        cScore+=1;
        compScore.innerHTML=cScore;
        update.innerHTML=`Computer's ${str} beats your Rock`;
    }
    else{
         resultBoard.innerHTML="You Win"
         yScore+=1;
         yourScore.innerHTML=yScore;
          update.innerHTML=`Your Rock beats Computer's ${str} `;
    }
})
getImg2.addEventListener("click",()=>{
    console.log("Paper");
    let str=getComputerChoice();
    if(str==="Rock")
        {
           resultBoard.innerHTML="You Win";
           yScore+=1;
           yourScore.innerHTML=yScore;
           update.innerHTML=`Your Paper beats Computer's ${str} `;
        }
        else if(str==="Paper")
        {
            resultBoard.innerHTML="Draw";
        }
        else{
             resultBoard.innerHTML="Computer Wins";
             cScore+=1;
             compScore.innerHTML=cScore;
             update.innerHTML=`Computer's ${str} beats your Paper`;
        }
})
getImg3.addEventListener("click",()=>{
    console.log("Scissor");
    let str=getComputerChoice();
    if(str==="Rock")
        {
           resultBoard.innerHTML="Computer Wins";
           cScore+=1;
           compScore.innerHTML=cScore;
           update.innerHTML=`Computer's ${str} beats your Scissors`;
        }
        else if(str==="Paper")
        {
            resultBoard.innerHTML="You Win";
            yScore+=1;
            yourScore.innerHTML=yScore;
            update.innerHTML=`Your Scissors beats Computer's ${str} `;
        }
        else{
             resultBoard.innerHTML="Draw";
        }
})


