function f3(a4) {
    return 71;
}
Int8Array[Symbol.toPrimitive] = f3;
function f6(a7) {
    function F8(a10) {
        if (!new.target) { throw 'must be called with new'; }
        this.__defineGetter__(Int8Array, Int8Array);
    }
    const v12 = new F8();
    function f13(a14) {
        return f6;
    }
    const v17 = [v12];
    Worker(f13, { arguments: v17, type: "function" });
    return 71;
}
try { f6(Int8Array); } catch (e) {}
