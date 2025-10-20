function f0(a1, a2) {
}
const t2 = WebAssembly.Suspending;
const v5 = new t2(f0);
let v6;
try { v6 = v5(v5); } catch (e) {}
function f7() {
    gc();
}
const v10 = { construct: f7 };
v10.construct(v5, v10, v6, WebAssembly);
