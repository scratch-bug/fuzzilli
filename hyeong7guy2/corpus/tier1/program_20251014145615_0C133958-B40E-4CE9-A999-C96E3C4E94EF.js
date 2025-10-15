const v3 = {};
function f4() {
    return 2147483649;
}
function f5() {
    function f6() {
        const v16 = {
            [v3](a10, a11, a12, a13) {
            },
            value: 0,
            set a(a15) {
            },
            done: true,
            a: -880768.8810546339,
            value: 2147483649,
        };
        return v16;
    }
    f6.call(f6);
    return { next: f6 };
}
const v19 = Symbol.iterator;
f4.bind(null, ...{ [v19]: f5 });
