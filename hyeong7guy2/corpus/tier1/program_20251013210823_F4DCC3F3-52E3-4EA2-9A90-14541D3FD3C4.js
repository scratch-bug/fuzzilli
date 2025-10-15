function f0() {
    return f0;
}
function f1() {
    return { done: true, __proto__: f0 };
}
const v6 = {
    next: f1,
    set d(a5) {
    },
};
const t11 = v6.next;
t11();
