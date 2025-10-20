try {
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        a6 ?? a6;
        function f8() {
            function f9(a10) {
                const v12 = Symbol.iterator;
                const v28 = {
                    [v12]() {
                        function f14(a15, a16) {
                            function f18(a19) {
                            }
                            try { this.onmessage = this; } catch (e) {}
                            const v20 = %WasmStruct();
                        }
                        new Worker(f14, { type: "function" });
                        const v27 = {
                            next() {
                                return { done: 10 };
                            },
                        };
                        return v27;
                    },
                };
                const v31 = new Int16Array(882, a5, 882);
                try { new Date(WeakSet, Date, 882, ...v31, ...v28); } catch (e) {}
            }
            return f9;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v33 = new F3(WeakSet, Worker);
    class C34 {
        static [v33](a36, a37, a38) {
        }
    }
    class C39 {
        static [v33](a41, a42, a43) {
        }
        static [v33](a45, a46, a47) {
        }
    }
    function f49() {
    }
    WebAssembly.instantiateStreaming().catch(f49);
} catch(e52) {
}
