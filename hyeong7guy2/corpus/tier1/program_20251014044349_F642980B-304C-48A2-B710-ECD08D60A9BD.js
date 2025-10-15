function f1() {
    function f2(a3, a4, a5, a6) {
        return Map;
    }
    return f2;
}
Map[Symbol.toPrimitive] = f1;
class C9 extends Map {
}
function f10() {
    return f10;
}
Object.defineProperty(f10, "initial", { value: C9 });
const v12 = WebAssembly.Memory;
try { new v12(f10); } catch (e) {}
