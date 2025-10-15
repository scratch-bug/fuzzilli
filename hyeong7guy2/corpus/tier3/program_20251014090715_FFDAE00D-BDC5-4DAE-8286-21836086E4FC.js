function f0(a1) {
    const v3 = new Date();
    v3.setFullYear(a1, a1, a1);
    v3.toTemporalInstant();
    return a1;
}
try { f0(f0); } catch (e) {}
