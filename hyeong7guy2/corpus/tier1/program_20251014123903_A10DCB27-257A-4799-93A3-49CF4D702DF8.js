const v1 = {};
v1.a = null;
const v4 = {};
function f5() {
    return v4;
}
function f6() {
    function f7() {
        const v17 = {
            [v4](a11, a12, a13, a14) {
            },
            value: 0,
            set a(a16) {
            },
            done: true,
            ...v1,
            value: 2147483649,
        };
        return v17;
    }
    return { next: f7 };
}
const v19 = Symbol.iterator;
f5.bind(null, ...{ [v19]: f6 });
