function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let i4 = 0; i4 < 20000;) {
    }
}
function f10() {
}
const v12 = Symbol.iterator;
const v17 = {
    [v12]() {
        const v16 = {
            next() {
                const v15 = {};
            },
        };
    },
};
class C18 extends f10 {
    static set c(a20) {
    }
}
function f21(a22) {
    const v24 = [1];
    try { v24.filter(a22); } catch (e) {}
}
f21(f21);
%OptimizeFunctionOnNextCall(f21);
f21();
function F28(a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
    function f32(a33, a34, a35) {
        function f36() {
        }
        function f37(a38) {
            class C40 extends Array {
                static set c(a42) {
                }
            }
            function f43(a44) {
            }
            function f45(a46, a47) {
            }
        }
        function F48(a50, a51, a52, a53) {
            if (!new.target) { throw 'must be called with new'; }
            const v57 = {
                construct(a55, a56) {
                },
            };
        }
    }
}
