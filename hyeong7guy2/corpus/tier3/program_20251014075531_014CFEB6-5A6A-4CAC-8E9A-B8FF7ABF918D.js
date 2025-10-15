function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        let v8 = -1;
        v8++;
        const v10 = [-1,1,9,-1918892703,59940824,-268435456,433,-51435,3];
        class C11 {
            get a() {
                return v10;
            }
        }
        function F13(a15, a16, a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
            this.e = v8;
        }
        return a2;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
const v21 = new F0();
new F0(v21, F0);
