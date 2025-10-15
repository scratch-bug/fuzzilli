for (let i = 0; i < 10; i++) {
    function f0() {
        return f0;
    }
    function f1() {
        return { __proto__: f0 };
    }
    const t7 = ({ next: f1 }).next;
    t7();
}
