class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        a7 ?? a7;
        function F11(a13, a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            %PretenureAllocationSite(C0);
            try { a3(); } catch (e) {}
            function f18() {
                return f18;
            }
            function f19(a20) {
                const v22 = Temporal.PlainDateTime;
                let v23;
                try { v23 = v22(); } catch (e) {}
                v23 ?? v23;
                for (let v25 = 0; v25 < 5; v25++) {
                    const v27 = {
                        get g() {
                            return f5;
                        },
                    };
                }
                return f5;
            }
            Object.defineProperty(this, "e", { get: f18, set: f19 });
            this.e = -1;
        }
        const v28 = new F11();
        v28.e = v28;
        return a4;
    }
    f5(a3, this, F1);
    %OptimizeFunctionOnNextCall(f5);
}
const v30 = new F1(C0, C0);
const v31 = new F1(F1, v30);
new F1(v30, v31);
