function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = Intl.DateTimeFormat;
            const v10 = { calendar: "smn" };
            v8("smn", v10);
            return v10;
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v12 = new F0();
v12.toString();
