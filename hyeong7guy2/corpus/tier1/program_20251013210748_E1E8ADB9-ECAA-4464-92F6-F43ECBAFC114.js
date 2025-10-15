function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -256;
    function f3() {
        return f3;
    }
    f3.bind(null, -256);
    this.e = -256;
    this.c = -256;
}
const v6 = new F0();
const v7 = new F0();
const v8 = new F0();
const v11 = new Uint8Array(1678);
function f12() {
    return v7;
}
function f14() {
    return v8;
}
[f14,v6,v11];
function f16() {
    return v6;
}
[-675.6831681305762,609.3193658685889,-7.371843542049434e+307,-2.5847149575003803,3.149703702769171e+306,1000000000.0,-319621.16936842015,941209.071315085,-6.768618932579564e+307];
function outer(a21) {
    function inner() {
        return val;
    }
    if (a21) {
        eval("var confuse = 1.1;");
    }
    var val = { p: 0 };
    let r = inner();
    if (a21) {
        r.p = 42;
    }
}
for (let i34 = 0; i34 < 10000; i34++) {
    outer(false);
}
outer(true);
