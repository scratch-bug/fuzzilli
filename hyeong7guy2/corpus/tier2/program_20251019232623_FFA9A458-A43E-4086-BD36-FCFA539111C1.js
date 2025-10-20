function f1(a2, a3) {
}
new Worker(f1, { type: "function" });
const v8 = class extends Int8Array {
}
class C9 extends v8 {
}
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    function f14() {
        function f15(a16) {
            function f17(a18, a19, a20) {
                function f22(a23) {
                    return this;
                }
                this.onmessage = f22;
                Object.defineProperty(C9, this, { set: f22 });
                return v8;
            }
            const v26 = new Worker(f17, { type: "function" });
            v26.constructor = f17;
            v26.constructor();
        }
        return f15;
    }
    Object.defineProperty(this, "toString", { get: f14 });
}
const v28 = new F10();
class C29 {
    static [v28](a31, a32, a33) {
    }
}
