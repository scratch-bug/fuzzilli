function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
for (let i5 = 0; i5 != 20000; i5++) {
    const v12 = 127 >>> i5;
    function f13(a14, a15, a16) {
    }
    f13(v2);
    Math.clz32(v12);
}
