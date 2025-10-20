const v2 = new Float64Array();
const v3 = [-2147483648];
function f4() {
    function f5() {
        return 5;
    }
    return f5;
}
function f6(a7) {
    return v3;
}
Object.defineProperty(v3, Symbol.toPrimitive, { get: f4, set: f6 });
class C10 {
    [v3] = v2;
}
const v11 = new C10();
function f12() {
    const v14 = new Uint32Array(C10, 5, 5);
    v14.toJSON = v11;
    const v15 = class extends Uint32Array {
    }
    function f16(a17, a18) {
        return v15;
    }
    const v21 = [v15,v14];
    const v23 = new Worker(f16, { arguments: v21, type: "function" });
    return v23;
}
const v24 = { next: f12 };
v24.next(v24, f6);
const t29 = v24.next;
t29();
