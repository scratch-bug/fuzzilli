for (let i3 = 10, i4 = 10; i4; i4--) {
}
function f10(a11, a12, a13) {
    try { new a12(f10, Symbol); } catch (e) {}
    let v15;
    try { v15 = a13.constructor(Symbol); } catch (e) {}
    return v15;
}
const v18 = { type: "function" };
v18[f10] -= 28013.921505882754;
const v19 = new Worker(f10, v18);
v19.postMessage(v18);
