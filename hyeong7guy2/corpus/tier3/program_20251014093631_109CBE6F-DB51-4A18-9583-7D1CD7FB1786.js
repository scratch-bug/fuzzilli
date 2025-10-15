for (let i4 = 0;
    i4 <= 100;
    (() => {
        const v8 = i4 >>> i4;
        v8 / v8;
        ++i4;
    })()) {
    try { WebAssembly.promising(); } catch (e) {}
}
