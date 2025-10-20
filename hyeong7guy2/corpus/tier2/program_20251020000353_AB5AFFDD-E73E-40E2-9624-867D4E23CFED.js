const v1 = {};
v1.a = null;
const v4 = {};
function f5() {
    return 2147483649;
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
    f7();
    return { next: f7 };
}
const v20 = Symbol.iterator;
f5.bind(null, ...{ [v20]: f6 });
