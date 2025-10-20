function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            function f9(a10) {
                for (let v11 = 0; v11 < 5; v11++) {
                    a7 &= v11;
                    for (const v13 of "0061736d010000000105015f000003020101070501016600000a0f010d010170016e2000d26efb0700001c0b") {
                        const v14 = /c[\cZ]kV(?:a+)?/symi;
                        function F15(a17, a18) {
                            if (!new.target) { throw 'must be called with new'; }
                        }
                        return v14 !== F15;
                    }
                }
                return F0;
            }
            f9();
            f9();
            %OptimizeMaglevOnNextCall(f9);
            return f9;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v22 = new F4(F4, a2);
    class C23 {
        static [v22](a25, a26, a27) {
        }
    }
}
new F0();
