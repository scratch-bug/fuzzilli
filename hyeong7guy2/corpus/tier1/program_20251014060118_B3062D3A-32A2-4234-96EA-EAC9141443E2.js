[-9007199254740990,3,0,7,3,0,-1,7,12541,-2];
const v1 = class {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        function F11(a13, a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            const v17 = -1 >> -1;
            const v19 = new Int8Array();
            Array.apply(Array, v19);
            const v26 = {
                construct(a24, a25) {
                },
            };
            WebAssembly.validate(v19);
            try { this(); } catch (e) {}
            a13 ?? a13;
            function f30() {
            }
            function f31(a32) {
                const v35 = Temporal.PlainDateTime;
                try { v35(); } catch (e) {}
                for (let v37 = 0; v37 < 5; v37++) {
                    const v39 = {
                        get g() {
                        },
                    };
                }
                [0,v17,115,1,1,0,0,0,1,4,1,96,0,0,2,7,1,1,1,1,102,0,0];
                return a7;
            }
            f31.prototype = f31;
            Object.defineProperty(this, "e", { get: f30, set: f31 });
            this.e = -1;
        }
        const v64 = new F11();
        v64.e = v64;
    }
    f6();
    %OptimizeFunctionOnNextCall(f6);
}
new F2();
new F2();
new F2();
