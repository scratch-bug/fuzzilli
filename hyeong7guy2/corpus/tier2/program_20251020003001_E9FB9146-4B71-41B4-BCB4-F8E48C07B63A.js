function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
}
new C2();
const v5 = class extends Uint8Array {
}
const v7 = class {
}
function f8() {
    function f10() {
        return v7;
    }
    function f11() {
        function f12() {
            f12.arguments;
            return { done: true };
        }
        const v16 = { next: f12 };
        v16.next(v5);
        return v16;
    }
    const v18 = Symbol.iterator;
    f10.bind(null, ...{ [v18]: f11 });
    const v22 = Symbol.dispose;
    const v25 = {
        [v22]() {
            f8();
        },
    };
    using v26 = v25;
    return v25;
}
Object.defineProperty(v7, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f8 });
try { new Int32Array(v7); } catch (e) {}
