function f1() {
    return "8";
}
function F4() {
    if (!new.target) { throw 'must be called with new'; }
}
function f6() {
    return f1;
}
function f7(a8) {
    return a8;
}
Object.defineProperty(F4, "valueOf", { get: f6, set: f7 });
const v13 = Temporal.PlainDateTime;
try { new v13(7, F4, 10, 5, 6, 2957); } catch (e) {}
