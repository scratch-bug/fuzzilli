const v0 = class {
}
function f2() {
    return Symbol;
}
function f3() {
    function f4() {
        const v6 = class {
        }
        for (let v7 = 0; v7 < 1000; v7++) {
            v6[4294967295] /= 0;
        }
        return { done: true };
    }
    return { next: f4 };
}
const v11 = Symbol.iterator;
f2.bind(null, ...{ [v11]: f3 });
