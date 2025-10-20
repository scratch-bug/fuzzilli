const v0 = [-65536,1073741824,512,12];
function f2(a3) {
    function f4() {
        function f5() {
            class C7 {
                [Uint16Array];
            }
            new C7();
            new C7();
            function F10(a12) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v13 = class extends F10 {
                static set e(a15) {
                }
                static [F10](a17, a18, a19, a20) {
                }
            }
            let v21 = 3855;
            for (const v23 in v21 &= Int8Array) {
            }
            async function f25() {
                WebAssembly.constructor = f25;
                const v27 = await 0;
                const v28 = WebAssembly.Instance;
                v28(v27, {});
            }
        }
        return { next: f5 };
    }
    const v32 = Symbol.iterator;
    a3.bind(null, ...{ [v32]: f4 });
}
const v38 = { type: "function" };
Object.defineProperty(v38, "arguments", { writable: true, enumerable: true, value: v0 });
new Worker(f2, v38);
for (let i41 = 0; i41 < 20000; i41++) {
}
