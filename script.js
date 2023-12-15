export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    //falls es ein e ist ist, soll es nicht angehängt werden an die Liste.
    if (currentElement === "e")  {
      //result.push("")
    } 
    //falls es ein grosses E ist, soll es nicht angehängt werden an die Liste.
    else if (currentElement === "E") {
      //result.push("")
    }
     else {
      result.push(currentElement)
    }
    
  }
  return result.join("")
}
export function aufgabe02 (args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    let currentElement = input[i]

    currentElement=currentElement.toUpperCase ()//falls es einen kleinen Buchstaben beinhaltet, soll dieser gross an die Liste anhgehängt werden.
    result.push(currentElement)

  }
  return result.join("")
}

export function aufgabe03 (args) {
  const input = args
  const result = []

  let countE = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "E") {
      countE++
      //Zähle grosse E
    }
    else if (currentElement === "e") {
    countE++
    //zähle auch kleine e
    }
  }
  return countE
}

export function aufgabe04 (args) {
  const input = args
  const result = []

  // lösche alle sonderzeichen ausser den leerzeichen aus input
  const cleanText = []
    for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    // wenn der ascii wert kein sonderzeichen ist, soll der wert angehängt werden.
    if (32 === ascii) {
      cleanText.push(currentElement)
    } else if (65 <= ascii && ascii <= 90) { // wenn der ascii wert eine großbuchstabe ist
      cleanText.push(currentElement) // soll der wert angehängt werden
    } else if (97 <= ascii && ascii <= 122) { // wenn der ascii wert eine kleinbuchstabe ist
      cleanText.push(currentElement) // soll der wert angehängt werden
    }
  }

  const tmp = cleanText.join("")
  const tmpText = []

  for (let i = 0; i < tmp.length; i++) {
    const currentElement = tmp[i] 
    const nextElement = tmp[i + 1] 
    if (currentElement === " " && nextElement === " ") {
      // ignoriert mehrere Leerzeichen nacheinander
    } else {
      tmpText.push(currentElement) 
    }
  }



 const clean = tmpText.join("")


 
  let words = 0
  for (let i = 0; i < clean.length; i++) {
    const currentElement = clean[i]
    if (currentElement === " ") { // wenn es ein Leerzeichen ist
      words++ // steigt die Zahl der Wörter um 1
    }
  }
  return words + 1 // die Anzahl der Wörter plus 1 zurückgeben

}




 export function aufgabe05 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if(currentElement === " "){
      //ignoriert, wenn ein Leerzeichen steht.
    }
    else if (currentElement === "."){
      //ignoriert, wenn ein Punkt steht.

    }
     else if (currentElement.toUpperCase() === currentElement){
      return true // wenn die Buchstaben mit der Grossgeschriebenen Version übereinstimmen, soll es als richtig angegeben werden.
     }
     
  }
  return false // wenn die Buchstaben mit der Grossgeschriebenen Version nicht übereinstimmen, soll es als falsch angegeben werden.
}

export function aufgabe06 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //gib mir den ascii wert von currentelement
    const ascii = currentElement.charCodeAt(0)
    // prüfe ob ascii eine ziffer ist
    if (ascii >= 48 && ascii <= 57) {
     
    } else if (ascii >= 65 && ascii <= 90) {
      // prüft ob ascii eine großbuchstabe ist
    } else if (ascii >= 97 && ascii <= 122) {
      // prüft ob ascii eine kleinbuchstabe ist
    } else if (ascii === 32) {
      // prüft ob ascii ein Leerzeichen ist
    } else {
      return true
      //gebe true zurück wenn es ein Sonderzeichen beinhaltet
    }



  }
  return false
  //gebe false zurück wenn der Satz gar nichts beinhaltet
}

export function aufgabe07 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //prüfe ob das Wort "und" vorkommt

    if (currentElement === "u" && input[i+1] === "n" && input[i+2] === "d") {
      return true
     //prüft ob das Wort "und" vorkommt das Input i+1 zeigt an, dass der nächste Buchstabe im Wort immer an der nächstgelegenen Position sein soll.

    }
    }
  
  return result.join("")
}

export function aufgabe08(args) {
  const input = args        
  const result = []                     

  for (let i = 0; i < input.length; i++) {      
    const currentElement = input[i]        

    if (currentElement === "e") {    
      // wenn es ein e ist, soll es nicht angehängt werden an die Liste.
      result.push(3)                                                           
    } else {                                                 
      result.push(currentElement)      
      // wenn es kein e ist, soll es angehängt werden an die Liste.                       
    }
  }
  return result.join("")                                        
}


export function aufgabe09 (args) {
  const input = args

   let countLetter = 0
  for (let i = 0; i < input.length; i++) {
    countLetter++ // zähle die Buchstaben der Variabel countLetter
  }
  if(countLetter === 6){
    return true //wenn es 6 Buchstaben hat gebe true zurück.
  }
  return false
  
}

export function aufgabe10 (args) {
  const input = args
  
  if (input.length !== 7) return false 
   // wir fügen ein function guard hinzu, damit kontrolliert wird, dass nur 7 Zeichen akzeptiert werden.
  if (input[0] !== "#") return false // wir fügen ein function guard hinzu, damit kontrolliert wird, dass das erste Zeichen # ist.

  for (let i = 1; i < input.length; i++) {
    const currentElement = input[i] 
    const ascii = currentElement.charCodeAt(0) // ascii code ausgeben
    if(48 <= ascii && ascii <= 57) { 
    // ist eine Ziffer
    }else if (65<= ascii && ascii <= 70) {
    // ist A-F
    
    } else {
      return false // gibt falsch zurück wenn nicht nur 0-9 und A-F in der Eingabe vorkommen.
    }
  }



  return true 
}

export function aufgabe11 (args) {
  const input = args

  if (input.length > 1) return null 
  // der function guard sagt hier, dass nur maximal ein Zeichen eingegeben werden kann.

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    return ascii 
    //das zeigt auf, dass es den ascii code für den ersten Buchstaben zurück geben soll.
  }
  
  return null
}

  export function aufgabe12 (args) {
    const input = args
    
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      if (currentElement === "e") {
        return i
      // geht zurück zum Anfang wenn es kein e hat auf der Position.
      }
    }
    return -1
    //gibt die Position in einer Zahl an.
  }

  export function aufgabe13 (args) {
    const input = args
    const result = []
    for (let i = input.length-1; i >= 0; i--) {
      //wir stellen den Zählanfang auf -1, damit er zur letzten Position geht und dort anfängt zu zählen und wir machen i ist grösser gleich 0, damit er Rückwärts zählt.
      const currentElement = input[i]
      if (currentElement === "e")
      return i
    }
    return -1
    //gibt die letzte Position von "e" in einer Zahl an
  }

  export function aufgabe14 (args) {
    const input = args
    let count = 0
  
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      if (currentElement == "e") { 
        count++ //zähle die e
      }
    }
    if (count == input.length) return(2) //gibt 2, wenn es nur e gibt
    else return(-1)  //gibt -1, wenn es keine e gibt
  }
  

  export function aufgabe15 (args) {
    const input = args
    const result = []

    if (input.lastIndexOf(" ") == input.length -1) {
      //wenn das letzte Element der Eingabe ein Leerzeichen ist
      for (let i = 0; i < input.length; i++) { 
        const currentElement = input[i]
        result.push(currentElement)
    }
  } else {
  for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      
      if (currentElement !== " " ) { 
        result.push(currentElement)
        //wenn das aktuelle Element kein Leerzeichen ist, soll es angehngen werden an die Liste
      } else {
        return result.join("")
      }
      
    }
    return result.join("")
  }
}

export function aufgabe16(args) {
  const input = args
  const result1 = [] // Leerer Array für die erste Ergebnisgruppe
  const result2 = [] // Leerer Array für die zweite Ergebnisgruppe
  let readText = true // Boolean-Variable, die angibt, ob Text gelesen werden soll

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "$" && readText !== false) {
      readText = false // Wenn das aktuelle Element "$" ist und readText nicht false ist, wird readText auf false gesetzt
    } else {
      if (readText === true) {
        result1.push(currentElement) // Wenn readText true ist, wird das aktuelle Element zur ersten Ergebnisgruppe hinzugefügt
      } else if (readText === false) {
        result2.push(currentElement) // Wenn readText false ist, wird das aktuelle Element zur zweiten Ergebnisgruppe hinzugefügt
      }
    }
  }

  if (result2.join("") !== "") {
    return result1.join("") + "," + result2.join("") // Wenn die zweite Ergebnisgruppe nicht leer ist, werden die Elemente der ersten und zweiten Ergebnisgruppe mit einem Komma verbunden und zurückgegeben
  } else {
    return result1.join("") // Wenn die zweite Ergebnisgruppe leer ist, werden nur die Elemente der ersten Ergebnisgruppe zurückgegeben
  }
}

export function aufgabe17 (args) {
 
  const text = args
  const phrases = []
  let currentPhrase = []
  for (let i = 0; i < text.length; i++) {
    const currentElement = text[i]
    if (currentElement === ',') {
      phrases.push(currentPhrase.join("")) //Wir speichern den aktuellen Satz als ein Element in phrases
      currentPhrase = []  // Hiermit löschen wir alles was im aktuellen Satz beinhaltet war.
    } else {
      // Wenn wir kein "," lesen, dann hängen wir die Zeichen an den aktuellen Satz.
      currentPhrase.push(currentElement)
    }
  }  
  phrases.push(currentPhrase.join(""))
  return phrases
}  

export function aufgabe18 (args) {
  const input = args
  const inputName = []
  const inputAge = []
  let readText = true

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement === " " && readText !== false) {
      // Überprüft, ob das aktuelle Element ein Leerzeichen ist und ob wir noch Text lesen
      readText = false
      // Wenn ein Leerzeichen gefunden wird und wir noch Text lesen, wechseln wir zum Alter
    } else {
      if (readText === true) {
        inputName.push(currentElement)
      }
      else if (readText === false) {
        inputAge.push(currentElement)
        // Wenn wir das Alter lesen, fügen wir das aktuelle Element zum inputAge Array hinzu
      }
    }
  }
  if (inputName.join("") !== "" && inputAge.join("") !== "") return "Sie heissen " + inputName.join("") + " und sind " + inputAge.join("") + " Jahre alt"
  if (inputName.join("") == "" && inputAge.join("") !== "") return "Sie heissen" + inputName.join("") + " und sind " + inputAge.join("") + " Jahre alt"
  if (inputName.join("") !== "" && inputAge.join("") == "") return "Sie heissen " + inputName.join("") + " und sind " + inputAge.join("") + "Jahre alt"
  if (inputName.join("") == "" && inputAge.join("") == "") return "Sie heissen" + inputName.join("") + " und sind " + inputAge.join("") + "Jahre alt"
  // Überprüft die Werte der inputName- und inputAge-Arrays und gibt entsprechende Sätze zurück
}

export function aufgabe20 (args) {
  const input = args
  const result = []
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if(currentElement == "." && input[i+1] !== " ") return false // wenn nach einem Punkt kein Leerzeichen steht, wird false zurückgegeben
    else if(currentElement == "." && input[i+1] == " ") return true // wenn nach einem Punkt ein Leerzeichen steht, wird true zurückgegeben
  }

  return result.join("") // Wenn kein Punkt gefunden wurde, wird die Eingabe zurückgegeben
}

export function aufgabe24 (args) {
  const input = args
  const result = []
  if (input.length == 1) return input 
  // Wenn die Eingabe nur ein Zeichen lang ist, wird dieses Zeichen zurückgegeben

  const firstElement = input[0]
  // Speichert das erste Element der Eingabe
  const lastElement = input[input.length - 1] 
  // Speichert das letzte Element der Eingabe


result.push(lastElement)
  for (let i = 1; i < input.length -1; i++) {
     // Startet mit dem zweiten Element der Eingabe
    const currentElement = input[i]
    result.push(currentElement)
  }
  result.push(firstElement)
  return result.join("")
}


export function aufgabe27 (args) {
  const input = args

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i].charCodeAt(0) // Konvertiert das aktuelle Element in einen Unicode-Wert
    
    if (input.length == 0) return false // Wenn die Eingabe leer ist, wird false zurückgegeben
    if (47 >= currentElement || currentElement >= 58) return false // Wenn das aktuelle Element keine Zahlist, wird false zurückgegeben
  }
return true // Wenn alle Elemente eine Zahl sind, wird true zurückgegeben
}


export function bubbleSort (args) {
  const text = args
  const list = text.split ("") 
  for (let i = 0; 1 < list.length - 1; i++) {
  const currentElement = list[i]
  const nextElement = list[i + 1]
  if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
  const tmp = list[i + 1]  
  list[i + 1] = list[i]
  list[i] = tmp
  i = -1 
  }
}
  const result = list.join("")
  return result
}
