function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        const v7 = new Float32Array(257);
        v7[4] = a3;
        v7[138] = v7;
        v7[235] = v7;
        function f8(a9, a10) {
            let v12 = 10 >>> 10;
            v12--;
            return v12;
        }
        v7.valueOf = f8;
        v7[126] = v7;
        v7.toSorted();
        function f15(a16) {
            return a2;
        }
        return f15;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v17 = new F0();
class C18 {
    static [v17](a20, a21, a22) {
    }
}
