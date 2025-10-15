[1.5501332111545065e+308,5.012318078882564e+307];
const v3 = class {
}
new v3();
try {
    function f5(a6) {
    }
    for (let i8 = 0; i8 < 100000; i8++) {
        let v15 = 0;
        const v16 = 1.1 || 1073741824;
        function f17(a18, a19, a20, a21) {
            const v22 = {
                apply: f5,
                call: f17,
                construct: f17,
                deleteProperty: f5,
                get: f17,
                getPrototypeOf: f5,
                has: f17,
                isExtensible: f5,
                ownKeys: f17,
                preventExtensions: f5,
            };
        }
        f17(v3, v16);
        v15++;
        const v25 = { x: 8.319903487638866e+307 };
    }
    const v26 = {};
} catch(e27) {
}
