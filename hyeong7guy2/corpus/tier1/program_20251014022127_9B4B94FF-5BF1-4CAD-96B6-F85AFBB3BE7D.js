function f0() {
    function f2() {
        return f2;
    }
    new Worker(f2, { type: "function" });
    Array(1048576);
}
const v9 = { next: f0 };
v9.next();
const t8 = v9.next;
t8();
