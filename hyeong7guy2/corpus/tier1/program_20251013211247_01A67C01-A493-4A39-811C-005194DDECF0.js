let v0 = false;
function f1(a2) {
    if (v0) {
        a2();
    } else {
        try { a2(null); } catch (e) {}
    }
}
try {
    const v8 = {};
    for (let v9 = 0; v9 < 500; v9++) {
        f1();
        v9++;
    }
    v0 = true;
    f1(WebAssembly);
} catch(e14) {
}
