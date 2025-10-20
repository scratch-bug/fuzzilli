function f0() {
    function f1(a2, a3) {
        function f4(a5, a6, a7) {
            function F8(a10, a11, a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                const v14 = `
                    function f16(a17) {
                        /a\fb\nc\rd\te\vf/dusygm;
                        /(?:a?)*/dvi.$2;
                        WebAssembly.instantiateStreaming(Symbol, WebAssembly);
                    }
                    function F24(a26) {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    F24[Symbol] = f16;
                `;
                eval(v14);
            }
            new F8();
            return F8;
        }
        new Worker(f4, { type: "function" });
        return f0;
    }
    f1(f1, f0);
}
({ construct: f0 }).construct();
