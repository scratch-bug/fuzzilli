function f0(a1) {
    function f2(a3, a4, a5) {
        return a1;
    }
    return f2;
}
const v6 = class {
}
v6.toString = f0;
const v8 = new Date();
try { v8.setUTCFullYear(v8, v6); } catch (e) {}
