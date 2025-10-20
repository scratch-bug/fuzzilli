function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = Intl.DateTimeFormat;
            v8("smn", { calendar: "islmic-tbla" });
            return f4;
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v13 = new F0(F0, F0);
v13.toString();
