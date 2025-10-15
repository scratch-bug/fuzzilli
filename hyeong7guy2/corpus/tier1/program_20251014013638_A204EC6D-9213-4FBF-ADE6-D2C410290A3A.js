function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        this.e = a4;
    }
    new F2();
    this.f = 9007199254740990;
}
new F0();
const v9 = new F0();
new F0();
const v11 = new F0();
const v13 = new Int8Array(v9, Int8Array, Int8Array);
function f14(a15) {
    new BigUint64Array(1073741825);
    Uint8ClampedArray.toString();
    return v11;
}
Object.defineProperty(v13, "valueOf", { configurable: true, enumerable: true, value: f14 });
v13[8] = v13;
