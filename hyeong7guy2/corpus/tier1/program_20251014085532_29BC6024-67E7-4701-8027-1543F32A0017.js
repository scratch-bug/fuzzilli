function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    try {
        new F1();
    } catch(e6) {
        class C7 {
        }
    }
}
new F1();
