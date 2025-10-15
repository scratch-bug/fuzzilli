function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = new F0();
v3.e;
const v6 = class extends Date {
    static #valueOf(a8, a9, a10) {
    }
    e;
    set a(a12) {
    }
}
const v13 = new v6();
v13.toUTCString();
function f15(a16, a17, a18) {
    this.terminateAndWait();
    this.toString = f15;
    function f21(a22) {
        return v2;
    }
    Object.defineProperty(F0, this, { set: a16 });
    return f21;
}
const v25 = { type: "function" };
const v26 = new Worker(f15, v25);
v26.constructor = f15;
let v27;
try { v27 = v26.constructor(v26, v25); } catch (e) {}
v27 ?? v27;
