[64,-2147483649,-9223372036854775807,512];
class C2 {
    static {
        function f4() {
        }
        function f5(a6) {
        }
        Object.defineProperty(this, "toString", { configurable: true, get: f4, set: f5 });
    }
}
try { C2.toString(); } catch (e) {}
class C8 {
}
C8.toString();
function f10(a11) {
    switch (a11) {
        case 0:
            break;
        default:
            arguments[2];
    }
}
for (let v15 = 0; v15 < 250; v15++) {
    f10();
}
for (let v19 = 0; v19 < 10; v19++) {
    v19++;
}
