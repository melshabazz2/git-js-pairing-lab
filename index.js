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
