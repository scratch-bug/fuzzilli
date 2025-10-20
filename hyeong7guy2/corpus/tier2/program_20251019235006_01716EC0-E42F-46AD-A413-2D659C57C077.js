try {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        this.e = this;
    }
    const v3 = new F1();
    function F4(a6, a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        let v12 = 0;
        while (v12 < 9) {
            v12++;
            function F16(a18) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v19 = class extends F16 {
                constructor(a21, a22) {
                    return F16;
                }
            }
        }
        const v23 = /[\cz]9?/usygm;
        function f24() {
            return v23;
        }
        WebAssembly.instantiateStreaming(WebAssembly, a9, a9).catch(f24);
        for (const v29 in [0,97]) {
            gc(gc);
            const v33 = new Int32Array();
            const v38 = {
                construct(a35, a36) {
                    v33?.p1;
                    return 4096;
                },
            };
        }
    }
    const v39 = new F4(F1, 4096, v3, F4);
    const v40 = v39.constructor;
    new v40(4096, F1, v40, v40, v3);
} catch(e42) {
}
