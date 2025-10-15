let v0 = 13;
v0--;
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = this.constructor;
    try { new v7(); } catch (e) {}
    this.c = v0;
}
new F2();
new F2();
new F2();
const v12 = [-2.928828814688467,1000.0,-765.022038120574,1000000.0,-1.7976931348623157e+308,500.7285266448557,2.0,2.2250738585072014e-308,-778413.4462004448];
v12[5] = v12;
new Uint16Array(v12);
class C15 {
}
function f16(a17, a18) {
    return f16;
}
const v22 = new Worker(f16, { type: "function" });
try { v22.postMessage(); } catch (e) {}
