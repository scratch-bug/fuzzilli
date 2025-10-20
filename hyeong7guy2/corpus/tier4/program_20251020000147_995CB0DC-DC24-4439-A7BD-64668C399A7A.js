function f0() {
    return f0;
}
try { JSON.parse("🙌🏿", f0); } catch (e) {}
