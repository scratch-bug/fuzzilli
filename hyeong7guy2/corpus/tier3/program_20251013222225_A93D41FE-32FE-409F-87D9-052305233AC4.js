const v4 = { ..."object" };
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
}
new F5("number", "bigint");
new F5("bigint", "number", "bigint");
class C14 {
}
if (C14) {
}
gc();
