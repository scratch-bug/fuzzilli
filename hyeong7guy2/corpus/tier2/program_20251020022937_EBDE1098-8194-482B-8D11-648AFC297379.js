function f1() {
    return f1;
}
function f2() {
    function f3() {
        for (let i6 = 0;
            (() => {
                const v8 = i6 < 20000;
                v8 instanceof WeakSet;
                return v8;
            })();
            i6++) {
        }
        return { done: f3 };
    }
    return { next: f3 };
}
const v15 = Symbol.iterator;
f1.bind(null, ...{ [v15]: f2 });
