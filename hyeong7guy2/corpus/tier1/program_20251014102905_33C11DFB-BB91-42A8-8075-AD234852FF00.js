function f0() {
    return f0;
}
const v2 = Array.prototype;
function f3() {
    return Array;
}
Object.defineProperty(v2, 546, { get: f3 });
[f0];
