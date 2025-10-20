const v1 = [-8,8,1716706357,536870888];
const v2 = {};
function f3() {
    return v1;
}
v2.get = f3;
const v5 = new Proxy(Array, v2);
try { new v5(v1); } catch (e) {}
