function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 {
}
const v3 = class extends F0 {
}
class C4 extends C2 {
}
function f5(a6) {
    function f8() {
        return f5;
    }
    Object.defineProperty(arguments, 2, { configurable: true, get: f8 });
    return arguments;
}
f5(f5, v3, C4);
