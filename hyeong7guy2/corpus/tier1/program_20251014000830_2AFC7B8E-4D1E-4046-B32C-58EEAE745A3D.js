const v1 = class {
}
const v4 = v1.__lookupSetter__;
function f6() {
    return -4294967295;
}
function f7(a8) {
    return a8;
}
Object.defineProperty(Symbol, "g", { configurable: true, enumerable: true, get: f6, set: f7 });
const t10 = Symbol.g.constructor;
t10[Symbol] = Date;
Object.defineProperty(v4, "e", { configurable: true, value: "slice" });
function f11() {
    return Symbol;
}
function f12(a13) {
    return "slice";
}
Object.defineProperty(v4, "e", { configurable: true, enumerable: true, get: f11, set: f12 });
