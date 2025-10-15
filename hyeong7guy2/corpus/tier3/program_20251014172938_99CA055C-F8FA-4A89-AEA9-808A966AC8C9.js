function f0() {
    return f0;
}
const v1 = f0.name;
try { JSON.parse(v1); } catch (e) {}
