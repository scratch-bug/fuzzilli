function f(selector) {
    let a = arguments;
    switch (selector) {
        case 0:
            break;
        default:
            return a[2];
    }
}

for (let i = 0; i < 100000; i++) {
    f(0, 1, 2);
}

f(0, 3, 4);
let result = f(1);