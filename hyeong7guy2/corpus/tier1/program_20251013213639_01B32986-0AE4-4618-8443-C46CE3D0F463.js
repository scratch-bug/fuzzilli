function f0() {
    return f0;
}
function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function f4() {
    return f0;
}
Object.defineProperty(F1, "p20", { enumerable: true, value: f4 });
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    a8 & a8;
}
function f12(a13, a14) {
    for (let v15 = 0; v15 < 25; v15++) {
        F1["p" + v15] = v15;
    }
    return a14;
}
F5.valueOf = f12;
new F5(f0, F5);
