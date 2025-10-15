const v1 = new BigUint64Array();
const t1 = v1.constructor;
const v4 = new t1();
v4.propertyIsEnumerable(2);
function f6() {
    return f6;
}
function f7() {
    function f8(a9) {
        function f10(a11, a12) {
            return BigUint64Array;
        }
        const v15 = ["function"];
        v15[1] = v15;
        Worker(f10, { type: "function", arguments: v15 });
        return v4;
    }
    return f8;
}
function f18(a19) {
    return a19;
}
Object.defineProperty(f6, Symbol.iterator, { configurable: true, enumerable: true, get: f7, set: f18 });
try { new Uint16Array(f6); } catch (e) {}
