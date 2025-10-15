const v0 = class {
}
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = a8.constructor;
    try { v10.asUintN(); } catch (e) {}
}
new F4(Float32Array, true, 1102284067n);
for (let v14 = 0; v14 < 25; v14++) {
    ++v14;
}
