function f4() {
    return f4;
}
function f5() {
    function f6() {
        const v7 = {};
        v7.d = 5;
        for (let i8 = 10;
            (() => {
                -i8;
                const v11 = i8 < 20000;
                v7.d >>>= 100000;
                return v11;
            })();
            i8++) {
        }
        return { done: WeakMap };
    }
    return { next: f6 };
}
const v18 = Symbol.iterator;
f4.bind(null, ...{ [v18]: f5 });
