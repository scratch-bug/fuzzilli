function f0() {
    return f0;
}
function f1() {
    function f2() {
        for (let i5 = 0; i5 < 20000; i5++) {
        }
        const v16 = {
            done: true,
            [true](a12, a13, a14, a15) {
            },
        };
        return v16;
    }
    return { next: f2 };
}
const v19 = Symbol.iterator;
f0.bind(null, ...{ [v19]: f1 });
