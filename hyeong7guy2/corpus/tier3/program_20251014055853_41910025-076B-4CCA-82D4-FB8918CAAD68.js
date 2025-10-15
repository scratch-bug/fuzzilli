const v1 = {};
function f2(a3, a4) {
    return v1;
}
v1[Symbol.toPrimitive] = f2;
const v6 = [v1];
try { new Float64Array(v6); } catch (e) {}
