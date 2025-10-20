function f2() {
    return Symbol;
}
function f3() {
    function f4() {
        for (let i7 = 0;
            (() => {
                const v9 = i7 < 20000;
                d = v9 instanceof WeakSet;
                return v9;
            })();
            i7++) {
        }
        return { done: f4 };
    }
    return { next: f4 };
}
const v16 = Symbol.iterator;
f2.bind(null, ...{ [v16]: f3 });
