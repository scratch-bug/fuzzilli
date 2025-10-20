try {
    let v0 = false;
    function f1(a2) {
        const v3 = !a2;
        if (v3) {
            return;
        }
        let v5;
        try { v5 = Response(v3, f1, f1, a2); } catch (e) {}
        function f6() {
            return v0;
        }
        let v8;
        try { v8 = WebAssembly.instantiateStreaming(v5, v0); } catch (e) {}
        try { v8.catch(f6); } catch (e) {}
        return WebAssembly;
    }
    for (let i11 = 0; i11 < 25000; i11++) {
        if (i11 === 24999) {
            v0 = true;
        }
        try { f1(v0); } catch (e) {}
    }
} catch(e21) {
}
