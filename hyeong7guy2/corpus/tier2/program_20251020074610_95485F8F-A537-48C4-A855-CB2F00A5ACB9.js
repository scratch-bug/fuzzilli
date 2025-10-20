function f0() {
    return f0;
}
const v3 = WebAssembly.instantiateStreaming().catch(f0);
function f4() {
    const t5 = [31215.68500756973,6.53257897060967];
    t5[15] |= 256;
    return 256;
}
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    function f11() {
        function f12(a13) {
            Uint8Array.of(71, 139, 12, 215, 19, 136, 101, 153, 222, 38, 133, 201, 233, 253, 88, 202, 223, 50, 154, 88, 208, 254, 78, 157, 100, 209, 160, 17, 154, 92, 233, 176, 69, 49, 156, 160, 54, 228, 67, 96, 228, 92, 177, 123, 42, 81, 29, 96, 144, 167, 253, 30, 123, 74, 19, 144, 128, 47);
            function F74(a76, a77, a78) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F74.constructor = f4;
            const v79 = F74.constructor;
            const v80 = [693913.4712015034,-314050.5385797281];
            function f81(a82) {
                let v84 = -639820461 * -639820461;
                v84--;
                const t22 = v80.constructor;
                t22(v84, f12);
                return a82;
            }
            f81(v3);
            v79();
            return f12;
        }
        f12();
        f12(a10);
        %OptimizeMaglevOnNextCall(f12);
        return f12;
    }
    Object.defineProperty(this, "toString", { get: f11 });
}
const v92 = new F7(f4, F7);
v92.toString();
