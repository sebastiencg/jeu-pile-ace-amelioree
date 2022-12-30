let scoreAfficher= document.querySelector('.score')
let button= document.querySelector('.button')
let lancerDirectement = document.querySelector('.lancer-directement')
let lancerConnection = document.querySelector('.lancer-connection')
let afficherManche = document.querySelector('.afficherManche')
let affiche1= document.querySelector('.affiche1')
let affiche2= document.querySelector('.affiche2')
let affiche3= document.querySelector('.affiche3')
pseudo = document.querySelector('.pseudo')
lancerDemandee = document.querySelector('.lancer')
let score = [IA=0,player=0]

button.addEventListener('click',()=>{
    StarAndStopGame();
})
function StarAndStopGame(){
    if(lancerDemandee.value>=1 && lancerDemandee.value<=9 ){
        if(pseudo.value!=""){
            button.disabled=true
            startGame()
        }
        else {
            let template =`<h4> vous avez pas indiquer votre pseudo</h4>`
            affiche1.innerHTML=template
        }
    }
    else{
        let template =`<h4> vous avez pas indiquer le nombre de manche </h4>`
        affiche1.innerHTML=template
    }
}
function startGame(){
    function lancer(){
        afficherManche.innerHTML=`<br><p>${lancerDemandee.value} manche restante</p>
            `
        if(lancerDemandee.value!= 0){
            choix()
        }
        else {
            endGame()
        }

    }
    function choix() {
        let templateValide =`<button class="btn btn-primary valideChoix "   type="button">  valide</button>`
        let templatePossibilite = `<button class="btn btn-primary choixPile "   type="button">pile</button>
                      <button class="btn btn-primary choixFace "   type="button">face</button> 
                      `
        affiche2.innerHTML = templatePossibilite
        affiche3.innerHTML = templateValide

        let possibleChoix =""
        let choixPile=document.querySelector('.choixPile')
        let choixFace=document.querySelector('.choixFace')
        let valideChoix=document.querySelector('.valideChoix')

        choixPile.addEventListener('click',()=>{
            choixPile.classList.toggle('red')
            choixFace.classList.remove('red')
            let red = document.querySelector('.red')
            if(red){
                possibleChoix=choixPile.textContent
            }
            else {
                possibleChoix=""
            }
        })
        choixFace.addEventListener('click',()=>{
            choixFace.classList.toggle('red')
            choixPile.classList.remove('red')
            let red = document.querySelector('.red')
            if(red){
                possibleChoix=choixFace.textContent
            }
            else {
                possibleChoix=""
            }
        })
        valideChoix.addEventListener('click',()=>{
            if(possibleChoix==""){
                alert("il faut faire un choix entre pile et face ")
            }
            else {
                game(possibleChoix)
                possibleChoix=""
                choixFace.classList.remove('red')
                choixPile.classList.remove('red')
            }
        })
    }
    function game(possibleChoix){
        let randomNumber=Math.floor(Math.random()*2)
        let randomChoix
        let imageChargement=`<img src="image/loading_noehu7zw.gif" class="pile">`
        affiche1.innerHTML=imageChargement
        setTimeout(chargement,700)
        function chargement(){
            if(randomNumber==0){
                randomChoix="pile"
                let pile=`
            <img src="image/euro_face_commune_2.png" class="pile">
            `
                affiche1.innerHTML=pile
                if(randomChoix==possibleChoix){
                    player++
                }
                else{
                    IA++
                }
                scoreOfGame()
            }
            else{
                let face=`
            <img src="image/Nouvelle-piece-1-euro-france-2022.jpg" class="face">
            `
                affiche1.innerHTML=face
                randomChoix="face"
                if(randomChoix==possibleChoix){
                    player++
                }
                else{
                    IA++
                }
                scoreOfGame()
            }
            lancerDemandee.value--
            lancer()
        }

    }
    function scoreOfGame(){
        template=`<p>${pseudo.value} ${player} - ${IA} ordinateur</p>`
        scoreAfficher.innerHTML=template
    }
    //----------------------------------------------------------------
    affiche1.innerHTML=""
    lancer()
}
function endGame(){
    button.disabled=false
    button.innerHTML="recommencer"
    button.classList.toggle('button2')
    button.classList.remove('button')
    affiche3.innerHTML=""
    affiche2.innerHTML=""
    if(player>IA){
        let template =`<h2> felicitaion ${pseudo.value} vous avez gagnée l'ordinatateur</h2>`
        affiche3.innerHTML=template
    }
    else if(player==IA){
        let template =`<h2> match nul</h2>`
        affiche3.innerHTML=template
    }
    else {
        let template =`<h2> désolé ${pseudo.value} vous avez perdu contre l'ordinateur </h2>`
        affiche3.innerHTML=template
    }
    let button2=document.querySelector('.button2')
    button2.addEventListener('click',()=>{
        location.reload();
    })
}