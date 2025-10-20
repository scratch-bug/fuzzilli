function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = Array.prototype;
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                Array.of(v8)[0].push(1);
            }
            new F10(Array, f5);
        }
        const v18 = [];
        v18[1623786241] = v18;
        Reflect.apply(v18.concat, v18, Uint8ClampedArray);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v23 = new F0(F0, F0);
class C24 {
    static [v23](a26, a27, a28) {
    }
    static [v23](a30, a31, a32) {
    }
    static [v23](a34, a35, a36) {
    }
}
