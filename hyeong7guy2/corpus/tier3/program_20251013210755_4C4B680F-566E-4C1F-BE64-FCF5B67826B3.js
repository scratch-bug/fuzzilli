function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -256;
    function poc(a4) {
        let a = arguments;
        if (a4) {
        }
        let arr = [1.1,2.2,3.3,4.4];
        return a[1];
    }
    function f14() {
        return f14;
    }
    f14.bind(null, -256);
    this.e = -256;
    this.c = -256;
}
const v17 = new F0();
const v18 = new F0();
const v19 = new F0();
const v22 = new Uint8Array(1678);
function f23() {
    return v18;
}
function f25() {
    return v19;
}
[f25,v17,v22];
function f27() {
    return v17;
}
[-675.6831681305762,609.3193658685889,-7.371843542049434e+307,-2.5847149575003803,3.149703702769171e+306,1000000000.0,-319621.16936842015,941209.071315085,-6.768618932579564e+307];
function outer(a32) {
    function inner() {
        return val;
    }
    if (a32) {
        eval("var confuse = 1.1;");
    }
    var val = {};
    let r = inner();
    if (a32) {
        r.p = 42;
    }
}
for (let i45 = 0; i45 < 10000; i45++) {
    outer(false);
}
outer(true);
