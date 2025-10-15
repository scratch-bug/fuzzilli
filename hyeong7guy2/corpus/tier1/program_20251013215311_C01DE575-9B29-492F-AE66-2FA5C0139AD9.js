function f0() {
}
new Int32Array(9);
const v6 = new Uint16Array(1);
const v7 = class extends f0 {
    static {
        f0();
        %PrepareFunctionForOptimization(f0);
        f0();
        f0();
        %OptimizeFunctionOnNextCall(f0);
        f0();
    }
}
const v13 = new v7();
const v14 = new v7();
const v15 = new v7();
function F18(a20, a21, a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v14;
    this.g = 1;
}
const v24 = new F18(v13, -9223372036854775807, v14, 9, v13, v14, 1);
new F18(v24, v15, v24, -9223372036854775807);
new F18(v13, v6, v14, 1);
new F18(v14, f0, v15, 9);
new Array();
class C32 {
}
class C34 {
}
function f35() {
}
function f36(a37) {
}
class C38 {
}
function f39(a40, a41) {
}
for (let v42 = 0; v42 < 100; v42++) {
    v42 * v42;
    const v44 = {};
    C34[1073741825];
    const t41 = "zRGm";
    t41[Symbol.hasInstance] = f36;
    Object.defineProperty(C34, "a", { get: f39 });
    let v49 = v42 % 2;
    const v50 = v44?.c;
    try { v50(); } catch (e) {}
    const v53 = {
        [Symbol]() {
            v49 = this;
        },
    };
}
const v54 = class {
}
const v55 = {};
