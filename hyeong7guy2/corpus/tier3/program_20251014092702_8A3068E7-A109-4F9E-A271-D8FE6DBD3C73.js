const v3 = class {
}
for (let v4 = 0; v4 < 100; v4++) {
    function f5(a6, a7) {
    }
    try { f5(5.0, 5.0); } catch (e) {}
}
new Uint32Array(5);
async function* f12(a13, a14, a15, a16) {
    const v17 = {};
    for (let i19 = 0; i19 < 20000;) {
    }
}
try { new f12(false, v3, Uint32Array, v3); } catch (e) {}
f12();
const v26 = f12();
v26.g = v26;
%OptimizeMaglevOnNextCall(f12);
f12();
for (let i32 = 1; i32 < 20000; i32++) {
}
