let v0 = 2489;
function f1(a2, a3) {
    v0++;
    return v0;
}
const proxy = Proxy;
for (let i8 = 0; i8 < 25000; i8++) {
    f1(2, proxy);
}
