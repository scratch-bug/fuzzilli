const v1 = Symbol.iterator;
for (let i3 = 0; i3 < 1000; i3++) {
    const v9 = [v1,v1,v1,v1,v1];
    async function f10() {
        await v9;
        Error();
        return v1;
    }
    f10();
}
const t10 = 10000;
t10[4294967296] = 10000;
const v17 = class {
}
function F18(a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
}
new F18();
function f24() {
    return 10000;
}
function f25() {
    function f26() {
        Array(1048576);
        return { done: true };
    }
    const v32 = { next: f26 };
    with (WeakSet) {
        typeof v32;
        for (let v34 = 0; v34 < 250; v34++) {
        }
    }
    return v32;
}
const v35 = Symbol.iterator;
f24.bind(null, ...{ [v35]: f25 });
