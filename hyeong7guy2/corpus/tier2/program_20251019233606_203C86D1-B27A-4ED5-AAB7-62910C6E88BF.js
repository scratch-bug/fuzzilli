const v4 = {
    construct(a1, a2) {
        return Reflect;
    },
};
function f6() {
    return f6;
}
const v7 = new Proxy(f6, v4);
const v8 = new v7();
try { v8.defineProperty(v4); } catch (e) {}
