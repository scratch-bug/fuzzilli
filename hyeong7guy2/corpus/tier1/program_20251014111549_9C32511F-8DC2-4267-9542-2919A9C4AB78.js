const v2 = {};
function f3() {
    return f3;
}
function f4() {
    function f5() {
        const v16 = {
            [v2](a9, a10, a11, a12) {
            },
            value: 0,
            done: true,
            get c() {
                return f5;
            },
            set c(a15) {
            },
            value: 2147483649,
        };
        return v16;
    }
    return { next: f5 };
}
const v18 = Symbol.iterator;
f3.bind(null, ...{ [v18]: f4 });
