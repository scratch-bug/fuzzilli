class C0 {
    constructor(a2, a3) {
        const v5 = new BigInt64Array();
        function F6(a8) {
            if (!new.target) { throw 'must be called with new'; }
            try { a8.filter(); } catch (e) {}
            this.d = v5;
        }
        new F6();
    }
    #valueOf() {
    }
}
new C0(C0, C0);
