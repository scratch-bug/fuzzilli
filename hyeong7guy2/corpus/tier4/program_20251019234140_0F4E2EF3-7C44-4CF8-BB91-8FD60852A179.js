function f0() {
    const v1 = {};
    v1.arguments = v1;
    const t3 = JSON.stringify;
    t3(v1);
    return f0;
}
try { f0(); } catch (e) {}
