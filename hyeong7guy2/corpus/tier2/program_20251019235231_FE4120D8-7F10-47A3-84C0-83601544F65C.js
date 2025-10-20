function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
function f3() {
    function f4(a5) {
        return 3055 in arguments;
    }
    return f4;
}
function f8(a9) {
    return a9;
}
Object.defineProperty(F1, "toString", { get: f3, set: f8 });
F1 >>>= F1;
