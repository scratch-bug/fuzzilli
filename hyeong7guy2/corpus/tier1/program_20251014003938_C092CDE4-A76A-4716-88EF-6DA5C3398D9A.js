class C0 {
}
const v1 = [1659782887,10000,1073741823,-1,-2147483649,8,1073741824];
function f2() {
    return f2;
}
for (let i = 0; i < 5; i++) {
    function f3() {
        return C0;
    }
    function f4() {
        Object.defineProperty(C0, v1, { configurable: true, get: f2, set: f3 });
        return C0;
    }
    ({ next: f4 }).next();
}
