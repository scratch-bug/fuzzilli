function f0() {
    const v2 = Date.prototype;
    try { v2.setUTCFullYear(v2, f0, v2, v2, v2); } catch (e) {}
    return Date;
}
({ construct: f0 }).construct();
