const v0 = [30735,268435456,-576196098,-128];
const v1 = {};
function f2() {
    return Reflect.construct();
}
v1.get = f2;
const v6 = new Proxy(v0, v1);
try { v6.some(); } catch (e) {}
