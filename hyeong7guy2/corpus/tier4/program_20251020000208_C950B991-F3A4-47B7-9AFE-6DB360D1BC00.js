function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        const v5 = `
            class C6 {
            }
            try { Float32Array.from(); } catch (e) {}
            const v9 = class {
            }
            try { v9(); } catch (e) {}
            try { v9.hasOwnProperty(v5, Float32Array, C6, this); } catch (e) {}
            try { v9(); } catch (e) {}
            class C14 extends Uint8Array {
            }
            function f15() {
                return f15;
            }
            let v16;
            try { v16 = f15(); } catch (e) {}
            try { v16(); } catch (e) {}
            const v18 = class {
            }
            const v19 = class {
            }
        `;
        eval(v5);
        return eval;
    }
    new Worker(f4, { type: "function" });
}
new F0(F0, F0);
new F0();
