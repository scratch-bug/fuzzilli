function f0() {
}
class C1 extends f0 {
}
new C1();
for (let i5 = 0; i5 < 1000; i5++) {
    async function f11() {
        await Symbol;
    }
    f11();
}
function f16() {
}
function f17() {
    function f18() {
        return { done: true };
    }
    const v22 = { next: f18 };
    with (WeakSet) {
        try { v22.getUTCFullYear(); } catch (e) {}
        for (let v24 = 0; v24 < 250; v24++) {
            Object.defineProperty(v22, 2, { configurable: true, get: f16 });
        }
    }
    return v22;
}
const v25 = Symbol.iterator;
f16.bind(null, ...{ [v25]: f17 });
