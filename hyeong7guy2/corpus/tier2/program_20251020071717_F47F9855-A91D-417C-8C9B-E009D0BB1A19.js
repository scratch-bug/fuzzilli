function f0(a1) {
    let v2;
    try { v2 = a1.call(); } catch (e) {}
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7() {
            function f8(a9) {
                class C11 extends Uint8ClampedArray {
                    constructor(a13, a14) {
                        super();
                        function f16() {
                            return f16;
                        }
                        function F17(a19, a20) {
                            if (!new.target) { throw 'must be called with new'; }
                            function f21() {
                                function f22() {
                                }
                                WebAssembly.compileStreaming(this).catch(f22);
                                function f25(a26) {
                                    return a20;
                                }
                                const v29 = new Proxy(this, {});
                                try { v29.toString(); } catch (e) {}
                                return f25;
                            }
                            Object.defineProperty(this, "toString", { get: f21 });
                        }
                        const v31 = new F17(this, a1);
                        v31.toString(this, C11, v31, a1, f8);
                        WebAssembly.compileStreaming().catch(f16);
                    }
                }
                new C11();
                return a6;
            }
            return f8;
        }
        Object.defineProperty(this, "toString", { get: f7 });
    }
    const v36 = new F3(v2, F3);
    v36.toString();
}
f0(f0);
