const v0 = [];
function f1() {
    return f1;
}
function f2() {
    const v8 = {
        valueOf(a4, a5, a6, a7) {
            v0.length *= a5;
            return f2;
        },
    };
    return v8;
}
const v11 = new Proxy(f1, { construct: f2 });
const v12 = new v11();
try { v12.valueOf(v0, v12, f1); } catch (e) {}
