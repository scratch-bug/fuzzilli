function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function f4(a5) {
    return 4;
}
Object.defineProperty(F1, "toString", { enumerable: true, value: f4 });
function f6() {
    return f6;
}
const v7 = class extends f6 {
    static [F1] = F1;
}
