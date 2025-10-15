const v1 = class extends Date {
}
const v2 = new v1();
new v1();
function f4(a5, a6) {
    if (a6) {
        function f7(a8, a9, a10) {
            return f4;
        }
        try { f7(a5, v1, v2); } catch (e) {}
    }
    a5[0];
    return a5;
}
for (let i15 = 0; i15 < 25000; i15++) {
    try { f4(100); } catch (e) {}
}
