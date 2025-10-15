let v0 = 9;
v0++;
const v3 = new Float32Array(v0);
const v4 = v3.reverse();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = this.constructor;
    try { new v9(v0); } catch (e) {}
}
new F5();
new F5(v0, v4);
