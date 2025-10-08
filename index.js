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
    return (a * b)
}
// console.log(multiply(2, 4))
// console.log(multiply(10, -5))
// console.log(multiply(3, 7.5))

//Question 6:

const add = (a, b) => {
    if (a === b) {
        return ((a + b) * 3)
    } else {
        return a + b
    }
}
// console.log(add(2, 4))
// console.log(add(10, -5))
// console.log(add(3, 7.5))
// console.log(add(5, 5))
// console.log(add(6, 6))

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
    return ((a * b) / 2)
}

// console.log(triangleArea(5, 7))
// console.log(triangleArea(6, 8))

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
        return a
    } else if (b > a && b > c) {
        return b
    } else if (c > a && c > b) {
        return c
    }
}

// console.log(largest(4, 6, 8))     
// console.log(largest(30, 22, 17))  
// console.log(largest(41, 108, 86))   



//Bonus Challenges:

//Question 11

const printTime = () => {
    const now = new Date()
    let hours = `${now.getHours()}`.padStart(2, '0')
    let minutes = `${now.getMinutes()}`.padStart(2, '0')
    let seconds = `${now.getSeconds()}`.padStart(2, '0')
    console.log(`${hours}:${minutes}:${seconds}`)
}

//printTime()



// Question 12:
const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
}
// console.log(isLeapYear(2000))
// console.log(isLeapYear(1900))
// console.log(isLeapYear(2020))
// console.log(isLeapYear(1999))



//Question 13

const getExtention = (fileName) => {
    const dot = fileName.lastIndexOf('.')
    if (dot !== -1) {
        console.log(fileName.substring(dot))
    } else {
        console.log('')
    }
}

getExtention("hello.txt")
getExtention("app.js")
getExtention("README.md")



// Question 14:
const absoluteNineteen = (n) => {
    const difference = Math.abs(n - 19)
    if (n > 19) {
        return (difference * 3)
    } else {
        return difference
    }
}
// console.log(absoluteNineteen(25))


//Question 15

const switchLetters = (str) => {
    if (str.length <= 1) {
        console.log(str)
    } else {
        const firstLetter = str[0]
        const middleLetters = str.slice(1, -1)
        const lastLetter = str[str.length - 1]
        console.log(lastLetter + middleLetters + firstLetter)
    }
}

// switchLetters('anne')
// switchLetters('hello world')
// switchLetters('a')
// switchLetters('')


// Question 16:
const changeString = (str) => {
    return str
        .split('')
        .map(char => {
            const charCode = char.charCodeAt(0)
            if (char === 'z') {
                return 'a'
            }
            if ((charCode >= 97 && charCode <= 122)) {
                return String.fromCharCode(charCode + 1)
            }
            return char
        })
        .join('')
}
// console.log(changeString("abc"))