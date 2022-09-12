
const fib = (num) => {
    let a = 0;
    let b = 1;
    let c = 0;

    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push(a);
        c = a + b;
        a = b;
        b = c;
    }

    return arr;
}

const fibRec = (num) => {
    if (num < 2) {
        return num;
    }
    return fibRec(num - 1) + fibRec(num - 2);
}

export { fib, fibRec }