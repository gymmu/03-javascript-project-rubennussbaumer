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
     if (currentElement.toUpperCase() === currentElement){
      return true
     }
     
    
  }
  return false 
}

  