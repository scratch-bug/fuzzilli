const v1 = /a+ma*b|c?/dy;
const v2 = Symbol.iterator;
function F3() {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = {
        arguments: 20623,
        9: v1,
        [v2]() {
        },
    };
    JSON.stringify(v7);
}
new F3();
