const v1 = class extends Int8Array {
}
class C2 {
    static {
    }
    static get d() {
    }
}
class C5 extends v1 {
    static toString(a7, a8, a9, a10) {
    }
    static #o(a12, a13) {
    }
}
const v14 = [C5,C5,C5,C5,C5];
function f15() {
    return C2;
}
function F16(a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    function f20() {
        function f21(a22) {
            function f23(a24, a25, a26) {
                this.onmessage;
                this.toString = f23;
                function f29(a30) {
                    return a30;
                }
                this.onmessage = f29;
                Object.defineProperty(v14, this, { set: f29 });
                return F16;
            }
            const v34 = new Worker(f23, { type: "function" });
            v34.constructor = f23;
            try { v34.constructor(Worker, a19, "function", f23, f23); } catch (e) {}
        }
        f21(f20);
        return f21;
    }
    Object.defineProperty(this, "toString", { get: f20 });
}
const v37 = new F16();
class C38 {
    static [v37](a40, a41, a42) {
    }
}
