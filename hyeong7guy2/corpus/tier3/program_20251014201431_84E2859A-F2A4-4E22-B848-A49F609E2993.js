function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = [];
v5[3] = F0;
for (let i7 = 0;
    (() => {
        for (let v8 = 0; v8 < 5; v8++) {
        }
        return i7 < 100000;
    })();
    i7++) {
}
function F14(a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    a16.unshift(this);
}
new F14(v5);
new F14(v5);
