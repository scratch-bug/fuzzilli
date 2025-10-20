function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            for (let v7 = 0; v7 < 5; v7++) {
                const v10 = new Date();
                v10.b ^= v7;
                for (const v11 of "0061736d010000000105015f000003020101070501016600000a0f010d010170016e2000d26efb0700001c0b") {
                    const v12 = /c[\cZ]kV(?:a+)?/symi;
                    function F13(a15, a16) {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    return v12 !== F13;
                }
            }
            return f5;
        }
        f5(F0);
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v20 = new F0();
class C21 {
    static [v20](a23, a24, a25) {
    }
}
