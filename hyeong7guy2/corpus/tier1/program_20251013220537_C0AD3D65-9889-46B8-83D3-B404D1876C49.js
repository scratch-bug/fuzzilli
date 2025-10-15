function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F0();
function f7() {
    Array.fromAsync(v6);
    return f7;
}
const v10 = { next: f7 };
v10.next(v10);
