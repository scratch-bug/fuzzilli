const v0 = [-1e-15,6.967510122006548,-62.16558209898528];
function f1() {
    return "f";
}
v0[Symbol.toPrimitive] = f1;
try { JSON.parse(v0); } catch (e) {}
