function f0() {
    return f0;
}
function f1() {
    class C2 {
    }
    return C2;
}
f0.toString = f1;
const v4 = WebAssembly.compile(WebAssembly);
function f5() {
}
v4.catch(f5);
try { this.escape(f0); } catch (e) {}
