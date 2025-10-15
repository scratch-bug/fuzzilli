function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -256;
    function poc(a4) {
        let a = arguments;
        function poc(a12) {
            let a = arguments;
            let arr = [1.1,2.2,3.3,4.4];
            a[1];
        }
        for (let i23 = 0; i23 < 20000; i23++) {
            poc();
        }
        poc();
        let arr = [1.1,2.2,3.3,4.4];
        return a[1];
    }
    function f36() {
        return f36;
    }
    f36.bind(null);
    this.e = -256;
    this.c = -256;
}
new F0();
const v40 = new F0();
const v41 = new F0();
new Uint8Array(1678);
function f45() {
    return v40;
}
function f46() {
    return v41;
}
[-675.6831681305762,609.3193658685889,-7.371843542049434e+307,-2.5847149575003803,3.149703702769171e+306,1000000000.0,-319621.16936842015,941209.071315085,-6.768618932579564e+307];
function outer(a49) {
    function inner() {
        return val;
    }
    eval("var confuse = 1.1;");
    var val = { p: 0 };
    let r = inner();
    if (a49) {
        r.p = 42;
    }
}
for (let i62 = 0; i62 < 10000; i62++) {
    outer();
}
outer(true);
