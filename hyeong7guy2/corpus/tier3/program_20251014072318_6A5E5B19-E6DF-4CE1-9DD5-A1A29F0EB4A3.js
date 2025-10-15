function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
}
const v10 = new F6();
v10.length = F0;
const v11 = [F0];
v11.parameters = v10;
const v13 = WebAssembly.Tag;
try { new v13(v11); } catch (e) {}
