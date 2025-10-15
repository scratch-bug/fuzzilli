const v3 = {
    construct(a1, a2) {
    },
};
function f5() {
    return v3;
}
const v6 = new Proxy(f5, v3);
let v7;
try { v7 = new v6(v6, v6, v6, v6, f5); } catch (e) {}
const v9 = WebAssembly.Module;
try { v9.exports(v7); } catch (e) {}
