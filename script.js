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

  