function f1() {
    return Symbol;
}
function f2() {
    function f3() {
        const v6 = new Date();
        const v7 = v6.setYear();
        with (d8) {
            const t8 = test.FastCAPI;
            const v11 = new t8();
            v11.clamp_compare_i32(d8, test, v7);
        }
        return { done: true };
    }
    return { next: f3 };
}
const v15 = Symbol.iterator;
f1.bind(null, ...{ [v15]: f2 });
