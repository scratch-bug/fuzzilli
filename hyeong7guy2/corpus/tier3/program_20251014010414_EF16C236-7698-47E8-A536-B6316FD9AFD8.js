const v0 = class {
    static valueOf(a2) {
        function outer(a4) {
            return a2;
        }
        function outer(a6) {
            return a6;
        }
    }
}
const v8 = Date.setHours;
try { v8(v0, v0, Date); } catch (e) {}
