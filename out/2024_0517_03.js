function f(p) {
    let a1 = [1.1];
    let a2 = new Object();
    a2.x = p.x;
    let a3 = [2.2];
}

for (let i = 0; i < 20000; i++) {
    f({x: 1});
}

let trigger = {
    get x() {
        for (let i = 0; i < 100; i++) {
            new Array(10000);
        }
        return 42;
    }
};

f(trigger);