gc();
gc();
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F3();
const v8 = `
    function F9(a11, a12) {
        if (!new.target) { throw 'must be called with new'; }
        function f13() {
            return f13;
        }
    }
`;
JSON.stringify({ type: v8 }).match(v7);
