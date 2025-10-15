const v2 = class {
}
v2.valueOf;
for (let v5 = 0; v5 < 10; v5++) {
    const v6 = [];
    function f7() {
        const v9 = ("NFKD").codePointAt(v6);
        let v11;
        try { v11 = Uint8ClampedArray.join(); } catch (e) {}
        v11 ?? v11;
        const v13 = {};
        function f15() {
        }
        f15.call(v9);
        new Proxy(f15, v13);
    }
    f7();
    %OptimizeFunctionOnNextCall(f7);
}
