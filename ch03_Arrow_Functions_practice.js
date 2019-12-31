// Curried Function
// Closure 생성

const getDiscount = rate => price => rate * price

const getTenpercentOff = getDiscount(0.1)

console.log(getTenpercentOff(10000))
