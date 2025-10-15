for (let v0 = 0; v0 < 50; v0++) {
    try {
        const v2 = WebAssembly.Instance;
        let v3;
        try { v3 = v2(); } catch (e) {}
        const v4 = WebAssembly.exports;
        try { v4.make(v0, v0, v3, v4, v2); } catch (e) {}
        const v6 = v2.exports;
        v6.mutate_and_get(v4, v3, v2, v6, v6);
    } catch(e8) {
    }
}
