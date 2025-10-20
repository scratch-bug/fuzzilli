function f1() {
    return Symbol;
}
function f2() {
    function f3() {
        function F5(a7) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v8 = class extends F5 {
            constructor(a10, a11) {
                super();
                function f13() {
                    function F14(a16, a17) {
                        if (!new.target) { throw 'must be called with new'; }
                        function f18(a19, a20, a21) {
                            function F23(a25, a26, a27, a28) {
                                if (!new.target) { throw 'must be called with new'; }
                                function f29() {
                                    return a26;
                                }
                                function f30() {
                                    return v8;
                                }
                                WebAssembly.instantiateStreaming(v8, Symbol, a27).catch(f30);
                                function f33(a34) {
                                    function f37(a38) {
                                        function F39(a41) {
                                            if (!new.target) { throw 'must be called with new'; }
                                            const v42 = ("object").constructor;
                                            for (let i45 = 0, i46 = 10; i46; i46--) {
                                            }
                                            const v52 = v42.fromCharCode(14);
                                            v52[0] = v52;
                                        }
                                        new F39();
                                        return "object";
                                    }
                                    let v54;
                                    try { v54 = f37(v8); } catch (e) {}
                                    return v54;
                                }
                                Object.defineProperty(this, "e", { get: f29, set: f33 });
                                f33(a17);
                                this.e = -1;
                            }
                            new F23(F5, WebAssembly, a16, a19);
                            return this;
                        }
                        f18(F14, a16, f18);
                        %OptimizeFunctionOnNextCall(f18);
                    }
                    new F14();
                    new F14(a10, WebAssembly);
                    new F14(a10, f13);
                    return f3;
                }
                WebAssembly.compileStreaming(WebAssembly, a10).catch(f13);
            }
        }
        new v8();
        return { done: true };
    }
    return { next: f3 };
}
const v66 = Symbol.iterator;
f1.bind(null, ...{ [v66]: f2 });
