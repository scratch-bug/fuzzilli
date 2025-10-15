try {
    let v2;
    try { v2 = WebAssembly(); } catch (e) {}
    false instanceof v2;
} catch(e4) {
}
