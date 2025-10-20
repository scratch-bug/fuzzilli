async function f0(a1, a2) {
    for (let i4 = 10, i5 = 10;
        (() => {
            function f7(a8) {
                let v9 = -9007199254740992;
                for (let i11 = 0; i11 < 1; i11++) {
                    v9 %= i11;
                }
                return f0;
            }
            %OptimizeFunctionOnNextCall(f7);
            ("0061736d010000000105015f000003020101070501016600000a0f010d010170016e2000d26efb0700001c0b").match().map(f7);
            return i5;
        })();
        i5--) {
    }
    await f0;
    return a2;
}
f0(f0, f0());
%OptimizeFunctionOnNextCall(f0);
