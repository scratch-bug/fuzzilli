new Array(512);
new BigInt64Array(127);
[-472687.8410068762,0.1410505387876233];
[3.0,0.21882927778721806,-229.09902349619188,0.7932661425397738,-2.0,1000000.0,-710.6949970078105,2.7611164646944153e+307,0.34280213606809307];
new WeakSet();
class C15 extends WeakSet {
}
class C16 extends C15 {
}
function F17(a19) {
    if (!new.target) { throw 'must be called with new'; }
}
const v20 = class extends F17 {
    constructor(a22, a23) {
        super();
        function f24(a25, a26) {
            const v27 = a26 | a26;
            function F29(a31, a32) {
                if (!new.target) { throw 'must be called with new'; }
                function f33(a34, a35, a36) {
                    const v39 = new Uint8ClampedArray(956);
                    v39[10] /= C16;
                    return a22;
                }
                f33(a26, arguments);
            }
            const v41 = new F29(arguments, v27);
            return v41;
        }
        f24();
        %PrepareFunctionForOptimization(f24);
        %OptimizeMaglevOnNextCall(f24);
        f24(f24, f24);
        function f45() {
            return f45;
        }
        WebAssembly.compileStreaming(C15, v20).catch(f45);
    }
}
new v20(v20, C15);
function f49(a50, a51) {
}
const v53 = class {
}
function f54() {
    const v55 = {};
}
