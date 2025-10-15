function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    a4.caller;
}
const v6 = new F2(F2);
const v7 = v6.constructor;
try { new v7(WeakMap); } catch (e) {}
new F2(339351.14776193444);
Symbol.iterator;
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v21 = 0; v21 < 250; v21++) {
        v21++;
        53856 >> 82;
        v21 < 10000;
        -v21;
    }
}
new F12();
