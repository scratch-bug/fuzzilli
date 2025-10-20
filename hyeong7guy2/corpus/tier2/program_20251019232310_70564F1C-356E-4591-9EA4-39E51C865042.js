let v0 = 43329;
class C2 {
    #m(a4, a5) {
        const v6 = %WasmArray();
        return a5;
    }
    static set a(a8) {
    }
}
new C2();
const v10 = new C2();
const v11 = class extends C2 {
    set g(a13) {
        function f14(a15, a16, a17, a18) {
            return a13;
        }
        try { f14(C2, a13, this, a13); } catch (e) {}
    }
}
new v11();
new v11();
const v22 = new v11();
const v23 = [19010];
function F24(a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    v0 **= v0;
    %PretenureAllocationSite(this);
    async function* f28(a29, a30) {
        await a30;
        yield* [a30];
        return f28;
    }
    try { f28(v22, v22); } catch (e) {}
    function f34() {
        function f35(a36) {
            a36 && f35;
            try {
                v23.at(946031287);
            } catch(e41) {
            }
            const v43 = Array.prototype;
            v43.copyWithin(...v43, f35, ...v43);
        }
        f35(f34);
        const v46 = f35();
        %OptimizeMaglevOnNextCall(f35);
        try { this.trimRight(v10, f28, C2, v46, v10); } catch (e) {}
        ("-26494").normalize("NFKC");
        let d = f35;
        return f35;
    }
    Object.defineProperty(this, "toString", { get: f34 });
    const v52 = `
        function F53(a55, a56) {
            if (!new.target) { throw 'must be called with new'; }
        }
    `;
    eval(v52);
}
const v59 = new F24();
class C60 {
    static [v59](a62, a63, a64) {
    }
}
