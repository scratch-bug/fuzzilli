function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            const v14 = this.__defineGetter__;
            try { v14.bind(a7, F0, v14, F0, a13); } catch (e) {}
        }
        const v17 = [-9007199254740991,1073741825,-35121,-65535,-4294967295,-1664716883,2,441189124,-1055145265];
        class C18 extends WeakSet {
            static [WeakSet] = v17;
            static {
                try { this(v17, C18, WeakSet, this); } catch (e) {}
            }
        }
        new F8();
        return f4;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v23 = new F0(F0, F0);
new F0(v23, F0);
new F0();
