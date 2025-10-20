const v1 = {};
function f2(a3) {
    return a3;
}
v1.get = f2;
const v5 = new Proxy(Worker, v1);
try { new v5(); } catch (e) {}
