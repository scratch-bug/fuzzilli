function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            const v15 = -1 >> -1;
            function f16() {
                return -1;
            }
            function f17(a18) {
                a18 >> a18;
                Temporal?.PlainTime;
                let v23;
                try { v23 = Temporal(); } catch (e) {}
                v23 ?? v23;
                [0,v15,115,1,1,0,0,0,1,4,1];
                return F0;
            }
            Object.defineProperty(this, "e", { get: f16, set: f17 });
            this.e = -1;
        }
        const v35 = new F9(f4, a5, -1, a2);
        v35.e = v35;
        return a5;
    }
    f4(a3, a2, F0);
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
new F0(F0, F0);
new F0();
