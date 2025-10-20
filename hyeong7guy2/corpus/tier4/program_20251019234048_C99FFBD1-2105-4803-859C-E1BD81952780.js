function f1() {
    return Object;
}
Float64Array.toString = f1;
try { this.unescape(Float64Array); } catch (e) {}
