function f0() {
    return { done: true };
}
try { JSON.stringify("🙌🏿", f0); } catch (e) {}
