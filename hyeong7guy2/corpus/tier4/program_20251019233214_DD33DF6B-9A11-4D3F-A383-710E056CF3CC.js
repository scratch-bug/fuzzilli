function f0(a1) {
    const t1 = Error().toString;
    return t1();
}
try { f0(); } catch (e) {}
