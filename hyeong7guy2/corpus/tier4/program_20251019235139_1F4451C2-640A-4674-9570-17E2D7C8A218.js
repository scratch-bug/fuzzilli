function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    with (Uint16Array) {
        function f6(a7, a8) {
            'use strict';
            length--;
            return a4;
        }
        f6();
    }
}
try { new F1(F1, F1); } catch (e) {}
