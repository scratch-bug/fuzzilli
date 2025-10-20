const v1 = class extends WeakMap {
}
const v2 = new v1();
class C5 extends Uint16Array {
}
function f6() {
    return Symbol;
}
function f7() {
    function f8() {
        for (let v9 = 0; v9 < 5; v9++) {
            const v11 = new SharedArrayBuffer(v9, v1);
            v2.set(v11, -4);
        }
        return { done: C5 };
    }
    return { next: f8 };
}
const v16 = Symbol.iterator;
f6.bind(null, ...{ [v16]: f7 });
