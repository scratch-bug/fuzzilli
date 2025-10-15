const v1 = [-256n,-256n];
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    a5.push(-256n);
    Object.seal(a5);
    Object.entries(v1);
}
new F2(v1, v1);
