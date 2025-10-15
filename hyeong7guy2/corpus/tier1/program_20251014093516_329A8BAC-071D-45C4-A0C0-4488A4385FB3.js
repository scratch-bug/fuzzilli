class C0 {
    #m(a2) {
    }
}
class C3 extends C0 {
}
const v6 = class {
}
function f7() {
    for (let i8 = 3; i8 < 25000; i8++) {
        new C3();
    }
    return f7;
}
Object.defineProperty(v6, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f7 });
try { new Int32Array(v6); } catch (e) {}
