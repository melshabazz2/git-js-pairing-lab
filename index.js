// Odd number functions done by : Majeed
// Even number functions done by : Ashar

//Question 1:

const fiveToOneHundred = () => {
    for (let i = 5; i <= 100; i++) {
        console.log(i)
    }
}
//fiveToOneHundred();

//Question 2:

const multiplesOfThree = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i)
        }
    }
}
//multiplesOfThree()

//Question 3

const multiplesOfThreeOrFive = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i)
        } else if (i % 5 === 0) {
            console.log(i)
        }
    }
}
//multiplesOfThreeOrFive()

//Question 4:

const untilNum = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i)
    }
}

//untilNum(42)

//Question 5:

const multiply = (a, b) => {
    console.log(a * b)
}
//multiply(2, 4)
// multiply(10, -5)
// multiply(3, 7.5)

//Question 6:

const add = (a, b) => {
    if (a === b) {
        console.log((a + b) * 3)
    } else {
        console.log(a + b)
    }
}
// add(2, 4)
// add(10, -5)
// add(3, 7.5)
// add(5, 5)
// add(6, 6)

//Question 7:

const isNegative = (n) => {
    if (n < 0) {
        return true
    } else {
        return false
    }
}
// console.log(isNegative(3))
// console.log(isNegative(-2))
// console.log(isNegative(Math.PI))

//Question 8:

const triangleArea = (a, b) => {
    console.log((a * b) / 2)
}

// triangleArea(5, 7)
// triangleArea(6, 8)

//Question 9:

const betweenTwentyAndFourty = (n) => {
    if (n > 20 && n < 40) {
        return true
    } else
        return false
}
// console.log(betweenTwentyAndFourty(20))
// console.log(betweenTwentyAndFourty(21))
// console.log(betweenTwentyAndFourty(39))
// console.log(betweenTwentyAndFourty(40))

//Question 10:

const largest = (a, b, c) => {
    if (a > b && a > c) {
        console.log(a)
    } else if (b > a && b > c) {
        console.log(b)
    } else if (c > a && c > b) {
        console.log(c)
    }
}

// largest(4, 6, 8)        
// largest(30, 22, 17)     
// largest(41, 108, 86)    

//Bonus Challenges:

const printTime = () => {
    const now = new Date()
    let hours = `${now.getHours()}`.padStart(2, '0')
    let minutes = `${now.getMinutes()}`.padStart(2, '0')
    let seconds = `${now.getSeconds()}`.padStart(2, '0')
    console.log(`${hours}:${minutes}:${seconds}`)
}

printTime()