const v1 = [-1.1966447954268067e+308,-2.0,1e-15];
const v2 = [NaN,-1000000.0,0.5359856233399012,4.0,2.2250738585072014e-308];
class C3 {
    ["2"](a5, a6) {
        return this;
    }
    static 3;
    ["2"] = v1;
}
new C3();
const v8 = new C3();
function f9() {
    return v8;
}
const v10 = [v2,v2];
v10[1] = v10;
const v14 = Proxy?.constructor;
try { new v14(v8); } catch (e) {}
v10 - 257;
function f17() {
    return arguments;
}
f17();
const v21 = [512];
v21[0];
-Infinity;
const v28 = Date(16, 16, 16);
try { v28.fixed(); } catch (e) {}
function F30(a32, a33, a34) {
    if (!new.target) { throw 'must be called with new'; }
    a34 ?? a34;
}
try { F30.toString(); } catch (e) {}
const v37 = new F30();
const v38 = v37?.constructor;
try { new v38(257, v37, v37); } catch (e) {}
const v40 = {};
for (let v41 = 0; v41 < 50; v41++) {
    v41 + v41;
    const v45 = Object in Object;
    const v46 = {};
    function F47(a49, a50) {
        if (!new.target) { throw 'must be called with new'; }
        a50 ?? a50;
        const v53 = globalThis?.Uint16Array;
        try { new v53(v41, F30, v41); } catch (e) {}
        const v55 = globalThis.console;
        v55.profileEnd(a49, globalThis, v55, this);
    }
    try { new F47(v45, v45); } catch (e) {}
    const v58 = new F47();
    v58.length = v58;
    -96;
    127 >= 127;
    3 % 3;
    0 / 0;
    5 | 5;
    127 - 127;
    2 | 2;
    1 * 1;
    function F104(a106, a107, a108, a109) {
        if (!new.target) { throw 'must be called with new'; }
        try { this.__defineSetter__(a109, 96); } catch (e) {}
        try { a107.at(120); } catch (e) {}
    }
    new F104(v10, v1, v58, v1);
    new F104(v2, v21, v58, v21);
}
