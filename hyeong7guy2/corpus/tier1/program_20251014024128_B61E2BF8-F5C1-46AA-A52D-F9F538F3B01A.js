function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class {
}
try {
    function f4(a5) {
        return 1073741824;
    }
    for (let i7 = 0; i7 < 100000; i7++) {
        let v13 = 0;
        function f14(a15, a16, a17, a18) {
            const v19 = {
                apply: f4,
                call: F0,
                construct: f14,
                deleteProperty: f4,
                get: f14,
                getPrototypeOf: f4,
                has: f14,
                isExtensible: f4,
                ownKeys: f14,
                preventExtensions: f4,
            };
            return v19;
        }
        f14(v3, 1073741824);
        v13++;
    }
} catch(e22) {
}
