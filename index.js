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

const untilNum = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i)
    }
}

//untilNum(42)