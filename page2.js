let creeCompte= document.querySelector('.cree-compte')
let dejaCompte= document.querySelector('.deja-compte')
let affiche2 = document.querySelector('.affiche2')
let mdp = document.querySelector('.mdp')
let mdp2= document.querySelector('.mdp-2')
let envoyer = document.querySelector('.envoyer')

dejaCompte.addEventListener('click',()=>{
    let template = `  <div class="main">
    <form action="login.php" method="post" class="login">
      <label for="nom">nom</label>
      <input type="text" name="nom" id="nom" placeholder="nom" required>
      <br>
      <label  for="mdp"> votre mot de passe</label>
      <div class="for-mdp">
        <input type="password" id="mdp" name="mdp" autocomplete="current-password" maxlength="8" size="8" required>
        <i class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye " viewBox="0 0 16 16">
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
          </svg></i>
      </div>
      <br>
      <button type="submit" class="connection" name="connection">connection</button>
    </form>
  </div>`
    affiche2.innerHTML= template
})
creeCompte.addEventListener('click',()=>{
    let template =`<div  class="main">
    <form action="main.php"  method="post" class="formulaire" required>
      <label for="nom"> nom :</label>
      <input type="text" id="nom" name="nom" placeholder="votre nom" required>
      <br>
      <label for="prenom">prenom :</label>
      <input type="text" id="prenom" name="prenom" placeholder="votre prenom" required>
      <br>
      <label  for="telephone">telephone :</label>
      <input type="number" id="telephone" name="telephone" size="10" maxlength="10" placeholder="telephone" required>
      <br>
      <label  for="mail">mail :</label>
      <input type="email" id="mail" name="mail" placeholder="votre mail" required>
      <br>
      <label  for="date">jour de naissance</label>
      <input type="date" id="date" name="date" required>
      <br>
      <div>
        <label  for="mdp"> votre mot de passe</label>
        <div class="for-mdp">
          <input type="password" class="mdp" id="mdp" name="mdp" placeholder="mot de passe" autocomplete="new-passeword" maxlength="8" size="8" required>
        </div>
      </div>
       <input type="password" class="mdp-2" placeholder="confirmation" autocomplete="new-passeword" maxlength="8" size="8" required>
      <br>
      <button type="submit" class="envoyer" name="envoyer">envoyer</button>
    </form>
  </div>`
    affiche2.innerHTML=template
})
