const v2 = new Uint8ClampedArray(256);
let v3;
try { v3 = v2.join(256); } catch (e) {}
function f4() {
    eval(++v3);
    return eval;
}
const v8 = { next: f4 };
v8.next(v8, v2, v8);
