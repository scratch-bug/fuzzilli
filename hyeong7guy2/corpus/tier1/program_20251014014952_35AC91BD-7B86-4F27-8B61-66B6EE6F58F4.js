const v0 = class {
    static get g() {
    }
}
const v2 = new v0();
function f3() {
    return v2;
}
const v4 = [3.0,4.0,-0.0,0.7904647985396398];
try { v4.toReversed(); } catch (e) {}
class C6 {
    set c(a8) {
    }
}
const v9 = new C6();
const v10 = v9.constructor;
new v10();
function f12() {
    return v10;
}
function f13() {
    function f14(a15) {
        function f16(a17, a18) {
            return C6;
        }
        const v21 = ["function"];
        v21.toJSON = f14;
        v21[1] = v21;
        Worker(f16, { type: "function", arguments: v21 });
        return v9;
    }
    return f14;
}
function f24(a25) {
    return f3;
}
Object.defineProperty(f12, Symbol.iterator, { configurable: true, enumerable: true, get: f13, set: f24 });
let v29;
try { v29 = new Uint16Array(f12); } catch (e) {}
v29 ?? v29;
