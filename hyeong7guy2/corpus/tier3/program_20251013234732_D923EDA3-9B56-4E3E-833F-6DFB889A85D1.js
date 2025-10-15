class C3 {
}
new C3();
function f5() {
}
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a9;
}
new F6(f5, F6, "log", F6);
class C13 {
}
const v16 = new Proxy(C13, {});
const p = v16;
+0;
for (let v20 = 0; v20 < 500; v20++) {
    new p();
    v20 << v20;
}
