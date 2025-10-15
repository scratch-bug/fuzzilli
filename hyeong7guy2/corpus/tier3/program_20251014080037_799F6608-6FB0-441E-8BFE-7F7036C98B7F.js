function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        'use strict';
        return delete Object.prototype;
    }
    try { f5(); } catch (e) {}
}
new F0(F0, F0, F0);
