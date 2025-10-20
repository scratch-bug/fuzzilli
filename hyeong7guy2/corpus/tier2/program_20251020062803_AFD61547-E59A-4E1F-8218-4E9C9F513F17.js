function f1() {
    return f1;
}
function f2() {
    function f3() {
        with (d8) {
            const t6 = test.FastCAPI;
            const v8 = new t6(d8, f1, f2);
            v8.clamp_compare_u64(true);
        }
        return { done: true };
    }
    return { next: f3 };
}
const v12 = Symbol.iterator;
f1.bind(null, ...{ [v12]: f2 });
