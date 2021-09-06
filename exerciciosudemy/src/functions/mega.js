export function mega(totalBets = 6, value = []) {

    let total = +totalBets

    if(total < 6 && total > 60) {
        throw "Invalid quantity!"
    }
    
    if(value.length === total) {
        return value.sort((n1, n2) => n1 - n2)
    }

    const randomNumber = parseInt(Math.random() * 60) + 1
    if(!value.includes(randomNumber)) {
        return mega(total, [...value, randomNumber])
    } else {
        return mega(total, value)
    }
}