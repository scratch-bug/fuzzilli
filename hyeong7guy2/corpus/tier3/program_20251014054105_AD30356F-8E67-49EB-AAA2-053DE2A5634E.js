const v1 = new Int16Array();
function f2() {
    return f2;
}
const v3 = {};
v3.getPrototypeOf = v1;
const v5 = new Proxy(f2, v3);
try { v5.bind(); } catch (e) {}
