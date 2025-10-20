const v1 = class extends Uint32Array {
}
const v2 = class {
}
const v3 = [255,-426939026,-1778928433,50177,14];
function f4(a5) {
}
function F8(a10, a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i16 = 0, i17 = 10; i17; i17--) {
    }
    const v23 = this.name;
    const v24 = v23.split;
    function f25(a26, a27) {
        a27 | a27;
    }
    const v29 = a12.matchAll(F8);
    function f30(a31, a32, a33) {
    }
    function F34(a36) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v37 = class extends F34 {
        constructor(a39, a40) {
            function f41(a42, a43) {
                const v44 = a43 | a43;
                function F46(a48, a49) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f50(a51, a52, a53) {
                        return a43--;
                    }
                    f50(a43, arguments);
                }
                const v56 = [a42,a42];
                for (let i58 = 0;
                    i58;
                    (() => {
                        v56.reduceRight();
                        const v61 = {};
                    })()) {
                }
                const v63 = new F46(F46, v44);
                return v63;
            }
            f41();
            %PrepareFunctionForOptimization(f41);
            %OptimizeMaglevOnNextCall(f41);
            f41();
            function f67() {
                return v37;
            }
            WebAssembly.compileStreaming().catch(f67);
        }
    }
    let v70;
    try { v70 = f30(a13, v1, v23); } catch (e) {}
    try { v70.return(f4); } catch (e) {}
    f4.return = v29;
    try { v29.reduce(v3); } catch (e) {}
    let v73;
    try { v73 = v29.reduce(v24); } catch (e) {}
    v73 ?? v73;
    let v75;
    try { v75 = v29.reduce("NFKD"); } catch (e) {}
    v75 ?? v2;
}
F8.prototype = F8;
new F8("NFKD", "asyncIterator", "asyncIterator");
