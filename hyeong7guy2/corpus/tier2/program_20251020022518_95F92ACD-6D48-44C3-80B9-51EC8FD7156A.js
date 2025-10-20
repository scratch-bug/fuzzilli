function F5(a7) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = class extends F5 {
    constructor(a10, a11) {
        function f14(a15, a16) {
            a15 |= F5;
            return a16;
        }
        Worker(f14);
    }
}
