function f1() {
    return f1;
}
function f2() {
    function f3() {
        const v5 = Array.fromAsync();
        v5.then(Array, Array);
        return v5;
    }
    ({ next: f3 }).next();
    return Symbol;
}
f1[Symbol.toPrimitive] = f2;
class C10 extends f1 {
}
function f11() {
    return C10;
}
Object.defineProperty(f11, "initial", { value: C10 });
const v13 = WebAssembly.Memory;
try { new v13(f11); } catch (e) {}
