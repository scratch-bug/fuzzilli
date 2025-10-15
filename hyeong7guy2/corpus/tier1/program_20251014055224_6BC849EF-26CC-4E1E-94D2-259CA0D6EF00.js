const v2 = new Float64Array(5);
const v4 = [-2147483648];
function f5() {
    function f6() {
        return 5;
    }
    return f6;
}
function f7(a8) {
}
Object.defineProperty(v4, Symbol.toPrimitive, { get: f5, set: f7 });
class C11 {
    [v4] = v2;
}
const v12 = new C11();
function f13() {
    const v15 = new Uint32Array();
    v15.toJSON = v12;
    const v16 = class extends Uint32Array {
    }
    function f17(a18, a19) {
    }
    const v22 = [v16,v15];
    new Worker(f17, { arguments: v22, type: "function" });
    return f13;
}
const t26 = ({ next: f13 }).next;
new t26();
