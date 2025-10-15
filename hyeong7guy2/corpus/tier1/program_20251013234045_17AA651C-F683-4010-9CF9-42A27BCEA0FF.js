Object.defineProperty(Map, 5, { writable: true, enumerable: true, value: Map });
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    a3[5] = a3;
    try {
        new F1(a3);
    } catch(e6) {
    }
}
new F1(Map);
new F1(Map);
