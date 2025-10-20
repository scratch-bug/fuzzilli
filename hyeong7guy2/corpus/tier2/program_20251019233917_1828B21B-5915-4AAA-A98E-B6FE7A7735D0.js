const v2 = class {
}
function f3() {
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8(a9, a10, a11) {
            function F13(a15, a16, a17, a18) {
                if (!new.target) { throw 'must be called with new'; }
                function f19(a20) {
                    function F21(a23, a24) {
                        if (!new.target) { throw 'must be called with new'; }
                        function f25(a26, a27, a28, a29) {
                            function f30() {
                                return f8;
                            }
                            function f31() {
                                function F32(a34, a35, a36) {
                                    if (!new.target) { throw 'must be called with new'; }
                                    function F37(a39, a40) {
                                        if (!new.target) { throw 'must be called with new'; }
                                        function F42(a44, a45, a46, a47) {
                                            if (!new.target) { throw 'must be called with new'; }
                                            function f48() {
                                                return F32;
                                            }
                                            function f49(a50) {
                                                function f52() {
                                                    return -1;
                                                }
                                                const v53 = WebAssembly.compileStreaming();
                                                v53.catch(f52);
                                                globalThis.console.trace(f49, F32);
                                                return v53;
                                            }
                                            Object.defineProperty(this, "e", { get: f48, set: f49 });
                                            this.e = -1;
                                        }
                                        new F42();
                                    }
                                    new F37();
                                }
                                new F32(f19, this, f25);
                                return a26;
                            }
                            const v61 = Symbol.iterator;
                            f30.bind(null, ...{ [v61]: f31 });
                            return a10;
                        }
                        f25(this, F21, this, a20);
                    }
                    new F21();
                    return a20;
                }
                Object.defineProperty(this, "e", { get: Symbol, set: f19 });
                this.e = -1;
            }
            new F13(f3, F4, F4, F4);
            return -1;
        }
        f8();
    }
    const v69 = new F4(Symbol);
    return v69;
}
Object.defineProperty(v2, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f3 });
try { new Int32Array(v2); } catch (e) {}
