function f2() {
    return f2;
}
function f3() {
    function f4() {
        const v5 = {};
        for (let i7 = 0;
            (() => {
                const v9 = i7 < 20000;
                v5.d >>>= 100000;
                return v9;
            })();
            typeof i7 === "object", i7++) {
        }
        return { done: WeakMap };
    }
    return { next: f4 };
}
const v19 = Symbol.iterator;
f2.bind(null, ...{ [v19]: f3 });
