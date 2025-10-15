function f2() {
    return f2;
}
Object.defineProperty(f2, Symbol.species, { value: Object });
const v4 = [Symbol,Symbol,Symbol,Symbol];
function f5() {
    return f2;
}
function f6(a7) {
    return f5;
}
Object.defineProperty(v4, "constructor", { get: f5, set: f6 });
v4.concat();
