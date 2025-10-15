Array(2);
new Uint32Array(2);
function f8() {
}
function f9() {
    function f10() {
        for (let v12 = 0; v12 < 5; v12++) {
            v12 < 20000;
            v12++;
        }
        for (let v18 = 0; v18 < 250; v18++) {
            v18 < 20000;
            const v22 = {
                10000: 0,
                next() {
                },
            };
            ++v18;
        }
        function F25(a27) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v28 = new F25("257");
        const v29 = new F25(v28);
        function F30(a32, a33) {
            if (!new.target) { throw 'must be called with new'; }
        }
        new F30(v29, v29);
        const handler = {};
        function f38() {
        }
        const proxy = f38;
        for (let v40 = 0; v40 < 25; v40++) {
            v40 < 25000;
            [1,2];
        }
        function F46(a48, a49, a50) {
            if (!new.target) { throw 'must be called with new'; }
        }
        for (let i51 = F46; i51 < 25000;) {
        }
        return { done: true };
    }
    return { next: f10 };
}
const v59 = Symbol.iterator;
f8.bind(null, ...{ [v59]: f9 });
