const v3 = class {
    static {
        function f14(a15) {
            function f21(a22) {
                const v23 = %WasmArray();
                f21--;
                function f27(a28, a29, a30) {
                    const v33 = {
                        get d() {
                            super[this];
                            return a30;
                        },
                        ...v23,
                    };
                    return a29;
                }
                f27(5, f14);
                return f27;
            }
            return Uint8ClampedArray;
        }
    }
}
