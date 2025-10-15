const v0 = class {
}
new v0();
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
new F2();
for (let i9 = 0; i9 < 20000; ++i9) {
    Symbol();
}
