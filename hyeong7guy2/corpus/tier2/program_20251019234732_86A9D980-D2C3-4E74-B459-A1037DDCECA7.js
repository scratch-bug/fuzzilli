function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = new F0();
const v5 = Math.expm1(v3);
for (let i7 = 0; i7 != 20000; i7++) {
    const v14 = -256 >>> i7;
    function f15(a16, a17, a18) {
        a17.d /= v5;
        return -256;
    }
    f15(v2, v3);
    Math.clz32(v14);
}
