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
    const currentElement = input[i]
    
  }
  return result.join("")
}


