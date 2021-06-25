let cardsP1=[]
let cardsP2=[]
let h='Hearts'
let c='Clubs'
let d='Diamonds'
let s='Spades'

let deckArr=[
    ['A',h],[2,h],[3,h],[4,h],[5,h],[6,h],[7,h],[8,h],[9,h],[10,h],['J',h],['Q',h],['K',h],
    ['A',c],[2,c],[3,c],[4,c],[5,c],[6,c],[7,c],[8,c],[9,c],[10,c],['J',c],['Q',c],['K',c],
    ['A',s],[2,s],[3,s],[4,s],[5,s],[6,s],[7,s],[8,s],[9,s],[10,s],['J',s],['Q',s],['K',s],
    ['A',d],[2,d],[3,d],[4,d],[5,d],[6,d],[7,d],[8,d],[9,d],[10,d],['J',d],['Q',d],['K',d],
]   

function drawCards(){
    while(deckArr.length>0){
        let randNum=Math.floor(Math.random()*deckArr.length)
        console.log(randNum)
        cardsP1.push(deckArr[randNum])
        deckArr.splice(randNum,1)
        randNum=Math.floor(Math.random()*deckArr.length)
        cardsP2.push(deckArr[randNum])
        deckArr.splice(randNum,1)
    }
    updateCount()
}

function updateCount(){
    document.getElementById('scoreP1').innerHTML=cardsP1.length
    document.getElementById('scoreP2').innerHTML=cardsP2.length
}

function p1flip(){
    document.getElementById('p1Card').innerHTML=cardsP1[0]
    checkColor(cardsP1[0][1], 'p1Card')
    if(isNaN(cardsP1[0][0]))changeFace(cardsP1)
    checkResult()
}
function p2flip(){
    document.getElementById('p2Card').innerHTML=cardsP2[0]
    checkColor(cardsP2[0][1], 'p2Card')
    if(isNaN(cardsP2[0][0]))changeFace(cardsP2)
    checkResult()
}

function checkResult(){
    let c1=document.getElementById('p1Card').innerHTML
    let c2=document.getElementById('p2Card').innerHTML
    let res=document.getElementById('results')
    if(c1!='' && c2!=''){
     (cardsP1[0][0] < cardsP2[0][0])? res.innerHTML='P2 WINS': res.innerHTML='P1 WINS'  
    }
}
function changeFace(card){
    switch(card[0][0]){
        case 'A':
            card[0][0]=14
            break;
        case 'K':
            card[0][0]=13
            break;
        case 'Q':
            card[0][0]=12
            break;
        case 'J':
            card[0][0]=11
            break;
    }
}

//change color based on card played
function checkColor(card, player){
    let plyr=document.getElementById(player)
    switch(card){ 
        case 'Clubs':
            plyr.style.borderColor='black'            
            plyr.style.color='black'            
            break;
        case 'Diamonds':
            plyr.style.borderColor='red'
            plyr.style.color='red'            
            break;
        case 'Hearts':
            plyr.style.borderColor='red'
            plyr.style.color='red'            
            break;
        case 'Spades':
            plyr.style.borderColor='black'
            plyr.style.color='black'            
            break;
    }
        
        
}


updateCount()