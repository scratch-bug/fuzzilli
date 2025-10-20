const v2 = new Uint32Array(3556);
const v3 = [v2,Uint32Array];
function f4() {
    return v3;
}
const v5 = f4.constructor;
try { v5(v3); } catch (e) {}
for (let i9 = 0, i10 = 10; i10; i10--) {
}
