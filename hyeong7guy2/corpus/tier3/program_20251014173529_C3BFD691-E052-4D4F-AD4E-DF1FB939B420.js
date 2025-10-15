const v0 = [2147483647,-668824853,30080,64,-2147483649,3,-6,-2147483647,18724];
const v2 = new WeakSet();
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    a8.add(this);
}
new F4(v0, null, v2);
for (let i13 = 0;
    i13 < 20000;
    (() => {
        i13++;
        let v18 = 0;
        v18++;
    })()) {
}
