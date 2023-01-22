const genererNombreAleatoire = () => {
    // Générer un nombre entre 1 et 100
    const nombreDecimal = (Math.random() * 100) + 1
    const nombre = Math.trunc(nombreDecimal)
  
    // Retourner ce nombre
    return nombre
  }
  
  let numeroTentative = 1
  let nombreBas = 1
  let nombreHaut = 100
  
  const nombreATrouver = genererNombreAleatoire()
  
  console.log(nombreATrouver)
  
  const ajouterTextAuContainer = texte => {
    const divTexte = document.createElement('div')
    divTexte.textContent = texte
  
    const container = document.getElementById('container')
    container.insertBefore(divTexte, container.firstChild)
  }
  
  var test = 1;

  const proposerNombre = () => {
    // Récupérer le champs avec le nombre
    const input = document.getElementById('input-nombre')
    document.getElementById("test").innerText = test++;

    // Récupérer la valeur du champs
    const valeur = input.value
  
    // Vérifier que la valeur n'est pas vide
    if (valeur === '') {
      // Si elle est vide, ne rien faire
      return
    }
  
    // Transformer la valeur texte en nombre
    const nombrePropose = parseInt(valeur, 10)
  
    ajouterTextAuContainer(   '_______ Attempt ' + numeroTentative+ ' _______ '    )

    // Comparer le nombre avec le nombre à trouver
    // Le nombre est égal au nombre à trouver
    if (nombrePropose === nombreATrouver) {
      // La partie est finie
      // Afficher Bravo
      console.log('Well done !')
  
      ajouterTextAuContainer('Well done ! 👏🏼👏🏼, the answer was '+ nombrePropose)
  

      // METTRE UNE ANIMATION 


      
      const elementCentre = document.getElementById('centre')
      elementCentre.textContent = 'it was : ' + nombrePropose + '👏🏼👏🏼 !'
    } else {
      // Le nombre est pas faux
      // Si le nombre est plus grand
      if (nombreATrouver > nombrePropose) {
        // Afficher plus grand
        console.log(nombrePropose + ' ? -> The number is greater ')
  
        ajouterTextAuContainer(nombrePropose + ' ? -> The number is greater 😝')
  
        // Si le nombre est supérieur au plus bas déjà trouvé
        if (nombrePropose > nombreBas) {
          const elementBas = document.getElementById('bas')
          elementBas.textContent = nombrePropose + ' 📈'
  
          nombreBas = nombrePropose
        }
      } else {
        // Si le nombre est plus petit
        // Afficher plus petit
        console.log(nombrePropose + ' -> The number is less  ')
  
        ajouterTextAuContainer(nombrePropose + ' -> The number is less 😆')
  
        // Si le nombre est inférieur au plus haut déjà trouvé
        if (nombrePropose < nombreHaut) {
          const elementBas = document.getElementById('haut')
          elementBas.textContent = nombrePropose + ' 📉'
  
          nombreHaut = nombrePropose
        }
      }
  
      numeroTentative += 1
    }
  }
  
  // Récupérer le bouton
  // Lorsqu'il y a un click, effectuer une proposition de nombre
  const bouton = document.getElementById('button-proposer')
  bouton.addEventListener('click', proposerNombre)