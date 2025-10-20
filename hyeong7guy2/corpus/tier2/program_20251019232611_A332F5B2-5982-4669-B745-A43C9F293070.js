for (let v1 = 0; v1 < 100; v1++) {
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        function f6() {
            function f7(a8) {
                const v9 = Array.prototype;
                function F11(a13, a14) {
                    if (!new.target) { throw 'must be called with new'; }
                    Array.of(v9)[0].push(1);
                }
                new F11(1, v1);
                return 1;
            }
            f7(f7);
            const v20 = [Array,Array,Array,Array];
            v20[1623786241] = v20;
            Reflect.apply(v20.concat, v20, Uint8ClampedArray);
            return f7;
        }
        Object.defineProperty(this, "toString", { get: f6 });
    }
    const v25 = new F2();
    class C26 {
        static [v25](a28, a29, a30) {
        }
    }
}
