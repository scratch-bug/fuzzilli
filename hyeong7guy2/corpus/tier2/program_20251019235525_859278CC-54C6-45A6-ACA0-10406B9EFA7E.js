const v2 = new Date(-42552, -42552);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f8(a9, a10) {
        return a6;
    }
    const v13 = [42,v2];
    new Worker(f8, { arguments: v13, type: "function" });
}
new F3();
