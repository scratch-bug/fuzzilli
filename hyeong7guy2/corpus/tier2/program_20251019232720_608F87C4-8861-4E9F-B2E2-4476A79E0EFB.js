function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8() {
            return f4;
        }
        function f9(a10, a11) {
            return this;
        }
        f8.constructor = f9;
        class C12 extends f8 {
        }
        const v13 = C12.constructor;
        const v15 = `string${536870912n}undefined`;
        v13(f4, a7, a6, a7).encodeURI(f4);
        return v15;
    }
    f4();
}
new F0();
