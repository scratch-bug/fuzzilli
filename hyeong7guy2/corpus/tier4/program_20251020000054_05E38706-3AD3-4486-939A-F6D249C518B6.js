function f0(a1) {
    for (let v2 = 0; v2 < 10; v2++) {
        function f4() {
            typeof "function";
            return f0;
        }
        class C6 extends f4 {
        }
        new C6();
    }
    return a1;
}
new Worker(f0, { type: "function" });
function f12(a13) {
    return "function";
}
new Worker(f12, { type: "function" });
