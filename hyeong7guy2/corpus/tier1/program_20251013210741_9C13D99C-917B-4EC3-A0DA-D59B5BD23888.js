const v35 = WebAssembly.exports;
function f36(a37) {
    return 127;
}
function f38(a39) {
    let func = f36;
    const v42 = a39 === 100;
    if (v42) {
        func = v35;
    }
    try {
        try { WebAssembly.promising(func); } catch (e) {}
    } catch(e44) {
    }
    return v42;
}
for (let i46 = 0; i46 <= 100; ++i46) {
    f38(i46);
}
