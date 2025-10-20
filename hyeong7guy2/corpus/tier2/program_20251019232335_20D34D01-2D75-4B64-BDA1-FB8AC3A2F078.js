try {
    try {
        new Uint8Array();
        const v3 = [-65536,1073741824,512,12];
        function f4(a5) {
            function f6() {
                function F7(a9, a10) {
                    if (!new.target) { throw 'must be called with new'; }
                    const v12 = globalThis?.console;
                    let v13;
                    try { v13 = v12.profile(); } catch (e) {}
                    try { new F7(f6, v13); } catch (e) {}
                }
                let v15;
                try { v15 = new F7(f4, f6); } catch (e) {}
                return v15;
            }
            const v16 = Symbol?.iterator;
            const v17 = { [v16]: f6 };
            try { a5.bind(null, ...v17); } catch (e) {}
            return v3;
        }
        const v22 = { type: "function" };
        Object.defineProperty(v22, "arguments", { writable: true, enumerable: true, value: v3 });
        new Worker(f4, v22);
        for (let i25 = 0;
            (() => {
                let v26 = 20000;
                v26--;
                return i25 < v26;
            })();
            i25++) {
        }
    } catch(e32) {
    }
} catch(e33) {
}
