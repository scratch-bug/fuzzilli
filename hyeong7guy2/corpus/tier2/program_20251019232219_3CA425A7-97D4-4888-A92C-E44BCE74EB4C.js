class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        for (let v10 = 0; v10 < 5; v10++) {
            const v11 = {};
            function f12(a13, a14) {
                const v17 = new SharedArrayBuffer(7);
                const v19 = new DataView(v17);
                v19.setFloat16(v11);
                return SharedArrayBuffer;
            }
            f12();
            %OptimizeFunctionOnNextCall(f12);
        }
        class C22 extends Uint32Array {
        }
        let v23 = -1;
        Temporal.PlainDateTime;
        const v31 = {
            calendar: "ethioaa",
            day: 3,
            era: "mundi",
            eraYear: 26,
            month: 8,
        };
        v23--;
        const v33 = [-28740];
        class C34 {
            get a() {
            }
        }
        C0.g = C34;
        const v36 = new C34();
        WebAssembly.compileStreaming(WebAssembly).catch(Date);
        for (let v41 = 0; v41 < 5; v41++) {
        }
        function F42(a44, a45, a46, a47) {
            if (!new.target) { throw 'must be called with new'; }
        }
        try { F42.apply(); } catch (e) {}
        const v49 = new F42(v33, v23, v36);
        function f50(a51, a52, a53) {
            eval();
            return a53;
        }
        try { v49.constructor("mundi", v33); } catch (e) {}
        return f5;
    }
    f5(F1, C0, C0);
    %OptimizeFunctionOnNextCall(f5);
}
new F1();
new F1(F1, F1);
new F1();
