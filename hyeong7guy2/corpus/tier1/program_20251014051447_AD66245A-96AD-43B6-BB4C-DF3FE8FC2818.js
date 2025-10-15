function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function f4() {
    return F0;
}
function f5() {
    function f6(a7) {
        for (let i9 = 0;
            i9 < 10000;
            (() => {
                const v13 = i9 + i9;
                v13 >> v13;
                ~(F0 / i9++);
            })()) {
        }
        return a7;
    }
    return f6;
}
function f19(a20) {
    return F0;
}
Object.defineProperty(f4, Symbol.iterator, { configurable: true, enumerable: true, get: f5, set: f19 });
try { new Uint16Array(f4); } catch (e) {}
