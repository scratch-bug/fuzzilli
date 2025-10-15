function f0(a1) {
    try { a1(f0, a1, a1, a1); } catch (e) {}
    return f0;
}
for (let v3 = 0; v3 < 50; v3++) {
    for (let i = 0; i < 10; i++) {
        function f4() {
            return f0;
        }
        function f5() {
            const v6 = { __proto__: f4 };
            return f5;
        }
        const t13 = ({ next: f5 }).next;
        t13();
    }
    f0();
}
