function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f3(a4) {
        function F5(a7) {
            if (!new.target) { throw 'must be called with new'; }
            const v8 = this.constructor;
            let v9;
            try { v9 = new v8(); } catch (e) {}
            this.a = v9;
        }
        function f10(a11) {
        }
        const v13 = {};
    }
    try { f3(); } catch (e) {}
}
new F0(F0, F0);
new F0();
new F0();
class C18 {
}
