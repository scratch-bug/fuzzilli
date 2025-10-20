function f3() {
}
function f4() {
    function f5() {
        for (let i8 = 0;
            i8 < 20000;
            (() => {
                const v12 = i8++;
                v12 | v12;
            })()) {
        }
        return { done: true };
    }
    return { next: f5 };
}
const v17 = Symbol.iterator;
f3.bind(null, ...{ [v17]: f4 });
new Uint32Array(268435440);
function f22() {
}
const v23 = Symbol.iterator;
f22.bind(null, ...{ [v23]: f4 });
