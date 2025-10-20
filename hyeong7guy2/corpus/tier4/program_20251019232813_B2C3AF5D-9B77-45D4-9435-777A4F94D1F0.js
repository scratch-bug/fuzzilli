function f1() {
    return f1;
}
function f2() {
    const v3 = {};
    v3.value = Map;
    function f4(a5) {
        return f2;
    }
    v3.set = f4;
    return v3;
}
const v6 = {};
v6.getOwnPropertyDescriptor = f2;
const v8 = new Proxy(f1, v6);
try { v8.bind(); } catch (e) {}
