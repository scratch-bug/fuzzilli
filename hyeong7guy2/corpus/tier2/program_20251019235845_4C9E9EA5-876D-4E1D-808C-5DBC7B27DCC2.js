function f1() {
}
function f2() {
    function f3() {
        const v4 = {};
        const v5 = class {
        }
        for (let i7 = 0;
            i7 < 25000;
            (() => {
                i7++;
                let v13;
                try { v13 = Math.ceil(v5); } catch (e) {}
                const v14 = { f: v13 };
            })()) {
        }
        return { done: v4 };
    }
    return { next: f3 };
}
const v18 = Symbol?.iterator;
const v19 = { [v18]: f2 };
try { f1.bind(null, ...v19); } catch (e) {}
