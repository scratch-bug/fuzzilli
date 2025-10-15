function f1() {
}
function f2() {
    function f3() {
        const v14 = {
            done: true,
            value: 0,
            set a(a7) {
                super.a;
            },
            __proto__: Uint8Array,
            [true](a10, a11, a12, a13) {
            },
        };
        return v14;
    }
    return { next: f3 };
}
const v17 = Symbol.iterator;
f1.bind(null, ...{ [v17]: f2 });
