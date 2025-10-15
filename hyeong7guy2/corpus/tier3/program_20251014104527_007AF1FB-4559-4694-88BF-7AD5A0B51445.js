let v1;
try { v1 = Float32Array.filter(); } catch (e) {}
const v2 = {};
function f4() {
    return v1;
}
f4.prototype = v1;
const v5 = new Proxy(f4, v2);
v5.prototype = v5(v1, v1, Float32Array, f4, v5);
