class C0 {
}
const v1 = [65536,-128,53348,9007199254740990,268435439,25396];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        function F11(a13, a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            const v18 = new Int8Array();
            v1[6];
            %PretenureAllocationSite(C0);
            WebAssembly.validate(v18);
            try { this(); } catch (e) {}
            function f23() {
                return a14;
            }
            function f24(a25) {
                const v27 = Temporal.PlainDateTime;
                try { v27(-1, a13, -1); } catch (e) {}
                for (let v29 = 0; v29 < 5; v29++) {
                    const v31 = {
                        get g() {
                            return this;
                        },
                    };
                }
                return C0;
            }
            f24.prototype = f24;
            Object.defineProperty(this, "e", { get: f23, set: f24 });
            this.e = -1;
        }
        const v32 = new F11();
        v32.e = v32;
        return a4;
    }
    f6();
    %OptimizeFunctionOnNextCall(f6);
}
new F2(C0, F2);
const v35 = new F2(C0, v1);
new F2(v35, v1);
