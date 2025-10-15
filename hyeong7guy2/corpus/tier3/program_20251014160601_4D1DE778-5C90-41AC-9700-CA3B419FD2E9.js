const v0 = class {
}
const v1 = new v0();
function f2(a3, a4) {
    a4--;
    a4 | a4;
    try { v1.constructor(v1, "o"); } catch (e) {}
    let v10;
    try { v10 = arguments["o"](); } catch (e) {}
    return v10;
}
f2();
const v12 = f2();
%OptimizeMaglevOnNextCall(f2);
f2(v12, f2);
