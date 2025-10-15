const v1 = class {
    [64];
}
const v2 = new v1();
function f3() {
    return f3;
}
function f4() {
    function f5(a6) {
        function f7(a8, a9) {
            return f5;
        }
        const v12 = [v2];
        v12.toJSON = f5;
        v12[1] = v12;
        Worker(f7, { type: "function", arguments: v12 });
        return 64;
    }
    return f5;
}
function f15(a16) {
    return v2;
}
Object.defineProperty(f3, Symbol.iterator, { configurable: true, enumerable: true, get: f4, set: f15 });
try { new Uint16Array(f3); } catch (e) {}
