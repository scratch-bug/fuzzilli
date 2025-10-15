const v0 = class {
}
function f3() {
    return v0;
}
function f4() {
    function f5() {
        const v6 = {};
        for (let i8 = 0;
            (() => {
                const v10 = i8 < 20000;
                v6.d >>>= 100000;
                return v10;
            })();
            (() => {
                const v13 = typeof f5;
                const v14 = v0 <= f5;
                function f15(a16, a17, a18, a19) {
                    return v13;
                }
                f15(f3, v6, v14, v13);
                i8++;
            })()) {
        }
        return { done: WeakMap };
    }
    return { next: f5 };
}
const v25 = Symbol.iterator;
f3.bind(null, ...{ [v25]: f4 });
