const v1 = Symbol.isConcatSpreadable;
function f2(a3) {
    parseInt(a3);
    return v1;
}
try { f2(v1); } catch (e) {}
