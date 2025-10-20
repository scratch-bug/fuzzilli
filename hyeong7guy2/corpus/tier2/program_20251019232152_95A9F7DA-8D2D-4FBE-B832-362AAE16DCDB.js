function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
function f4() {
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        const v9 = this.constructor;
        try { new v9(this, Float32Array, a8); } catch (e) {}
        function f11() {
            return a8;
        }
        Object.defineProperty(this, "toString", { get: f11 });
    }
    const v12 = new F5();
    v12[Symbol.toPrimitive] = Symbol;
    return Float32Array;
}
Float32Array.valueOf = f4;
F1 <= Float32Array;
