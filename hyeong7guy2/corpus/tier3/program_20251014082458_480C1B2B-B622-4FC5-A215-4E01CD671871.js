function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i3 = 0;
    i3 < 20000;
    (() => {
        const v7 = i3++;
        v7 < v7;
    })()) {
}
class C10 {
}
let v11;
try { v11 = new C10(F0, ...F0); } catch (e) {}
v11 ?? v11;
