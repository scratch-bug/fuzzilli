const v0 = class {
}
const v1 = new v0();
try { v1.constructor(); } catch (e) {}
function f3() {
    return v1;
}
let v4 = -211695100n;
v4++;
const v6 = [3.0,4.0,-0.0,0.7904647985396398];
try { v6.toReversed(); } catch (e) {}
class C8 {
}
const v9 = new C8();
const v10 = v9.constructor;
try { v10(); } catch (e) {}
function f12() {
    return v9;
}
function f13() {
    function f14(a15) {
        function f16(a17, a18) {
            return f14;
        }
        const v21 = [f14,f14,f14,f14];
        v21.toJSON = f14;
        v21[1] = v21;
        Worker(f16, { type: "function", arguments: v21 });
        return f16;
    }
    return f14;
}
function f24(a25) {
    return a25;
}
Object.defineProperty(f12, Symbol.iterator, { configurable: true, enumerable: true, get: f13, set: f24 });
let v29;
try { v29 = new Uint16Array(f12); } catch (e) {}
v29 ?? v29;
