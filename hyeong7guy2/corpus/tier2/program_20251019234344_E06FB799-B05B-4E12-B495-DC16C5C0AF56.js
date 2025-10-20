try {
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
        function f5() {
            const v7 = [-65536,1073741824,512,12];
            function f8(a9) {
                function f10() {
                    function F11(a13, a14) {
                        if (!new.target) { throw 'must be called with new'; }
                        const v16 = globalThis?.console;
                        try { v16.profile(); } catch (e) {}
                    }
                    try { new F11(); } catch (e) {}
                }
                const v19 = Symbol?.iterator;
                const v20 = { [v19]: f10 };
                try { a9.bind(null, ...v20); } catch (e) {}
            }
            const v25 = { type: "function" };
            Object.defineProperty(v25, "arguments", { writable: true, enumerable: true, value: v7 });
            new Worker(f8, v25);
        }
        f5();
        Object.defineProperty(this, "toString", { get: f5 });
    }
    new F1();
    class C29 {
    }
} catch(e30) {
}
