const v3 = {};
function f4() {
    return f4;
}
function f5() {
    function f6() {
        const v18 = {
            [v3](a10, a11, a12, a13) {
            },
            value: 0,
            set a(a15) {
            },
            done: true,
            set f(a17) {
            },
            a: -880768.8810546339,
            value: 2147483649,
        };
        return v18;
    }
    f6.call();
    return { next: f6 };
}
const v21 = Symbol.iterator;
f4.bind(null, ...{ [v21]: f5 });
