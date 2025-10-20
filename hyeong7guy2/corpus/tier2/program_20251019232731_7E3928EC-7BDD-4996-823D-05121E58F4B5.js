const v0 = /\x01?/dsygmvi;
function f1() {
    return f1;
}
function f3(a4) {
    Object.defineProperty(v0, 10, { get: f1 });
    return a4;
}
BigInt64Array[Symbol.toPrimitive] = f3;
const v12 = {
    construct(a8, a9) {
        Reflect.has(Reflect, BigInt64Array);
        return a8;
    },
};
v12.construct(f3, v12);
function f14() {
    function F16(a18, a19, a20) {
        if (!new.target) { throw 'must be called with new'; }
        a18.replace(v0, a19);
    }
    new F16("NFKC", Symbol);
    return v12;
}
try { f14(); } catch (e) {}
