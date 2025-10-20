const v1 = Symbol.iterator;
function f2() {
    const v4 = {
        [v1]() {
        },
    };
    v4.arguments = v4;
    const t7 = JSON.stringify;
    t7(v4);
    return v4;
}
try { f2(); } catch (e) {}
