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

    //falls es einen kleinen Buchstaben beinhaltet, soll dieser gross an die Liste anhgehängt werden.
    currentElement=currentElement.toUpperCase ()
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
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement === "-") {}

    else if (currentElement === "+") {}

     else {
      result.push(currentElement)
    }
  }

  const clearedString = result.join("")

  const tmp = clearedString.split(" ")

  print.tmp
  return tmp.length
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
  if (input[0] !== "#") return false

  for (let i = 1; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    if(48 <= ascii && ascii <= 57) { 
    // ist eine Ziffer
    }else if (65<= ascii && ascii <= 70) {
    // ist A-F
    
    } else {
      return false
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
    const result = []
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      if (currentElement === "e")
      return 2
    }
    
    return -1
  }

  export function aufgabe15 (args) {
    const input = args
    const result = []

    if (input.lastIndexOf(" ") == input.length -1) {
      for (let i = 0; i < input.length; i++) {
        const currentElement = input[i]
        result.push(currentElement)
    }
  } else {
  for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      
      if (currentElement !== " " ) {
        result.push(currentElement)
      } else {
        return result.join("")
      }
      
    }
    return result.join("")
  }
}