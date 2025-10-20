const v0 = /\x01?/dsygmvi;
function f1() {
    return v0;
}
function f3(a4) {
    Object.defineProperty(v0, 10, { get: f1 });
    return a4;
}
BigInt64Array[Symbol.toPrimitive] = f3;
const v12 = {
    construct(a8, a9) {
        return Reflect.has(Reflect, BigInt64Array);
    },
};
v12.construct(Symbol, BigInt64Array);
function f14() {
    function F16(a18, a19, a20) {
        if (!new.target) { throw 'must be called with new'; }
        a18.replace(v0, a19);
    }
    new F16("NFKC", F16);
    return "NFKC";
}
try { f14(); } catch (e) {}
