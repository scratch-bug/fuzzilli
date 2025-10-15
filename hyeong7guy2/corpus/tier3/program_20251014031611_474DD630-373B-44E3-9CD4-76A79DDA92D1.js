let v2;
try { v2 = eval.next(19, eval); } catch (e) {}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v18 = {
    [19](a8, a9, a10) {
        function f11(a12) {
            return v2;
        }
        const v13 = class extends f11 {
            static #valueOf(a15, a16) {
                F3.#valueOf();
            }
        }
    },
};
