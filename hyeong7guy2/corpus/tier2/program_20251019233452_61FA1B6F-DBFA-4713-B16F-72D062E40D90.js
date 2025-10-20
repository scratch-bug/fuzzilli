const v1 = class {
    set a(a3) {
        this + 928.2116444602786;
    }
    static set c(a6) {
    }
}
try { new v1(); } catch (e) {}
try { new v1(); } catch (e) {}
try { new Float32Array(0); } catch (e) {}
const v24 = {
    valueOf() {
        +this;
        async function* f17(a18, a19, a20) {
            const v21 = await this;
            yield* [v21,v21,0,1.2654482297432583];
            return 1.2654482297432583;
        }
        try { f17(928.2116444602786, 1.2654482297432583, 928.2116444602786); } catch (e) {}
        return 1.7976931348623157e+308;
    },
};
const v26 = Symbol?.iterator;
const v43 = {
    [v26]() {
        let v28 = 10;
        const v42 = {
            next() {
                v28--;
                const v32 = [1073741824,1000,2,-2,9007199254740991,9007199254740991,53643,-46335,-61010];
                try { Object.seal(v32); } catch (e) {}
                function F35(a37, a38, a39) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                const v40 = v28 == 0;
                return { done: v40, value: v28 };
            },
        };
        return v42;
    },
};
const v44 = [-6.072558703670352,0.4036992029216092];
function F46(a48, a49) {
    if (!new.target) { throw 'must be called with new'; }
    function F51(a53, a54) {
        if (!new.target) { throw 'must be called with new'; }
        function f55() {
            function f56(a57) {
                const v60 = {
                    get d() {
                        return a57;
                    },
                    __proto__: null,
                };
            }
            try { f56(a53); } catch (e) {}
            try { f56(this); } catch (e) {}
            %OptimizeMaglevOnNextCall(f56);
            return f56;
        }
        Object.defineProperty(this, "toString", { get: f55 });
    }
    const v63 = {};
    function f64() {
        return f64;
    }
    for (let i66 = 0; i66 < 25000;) {
        ++i66;
        try { v44["findIndex"](f64); } catch (e) {}
    }
    const v74 = {};
}
try { new F46(3911, 3911); } catch (e) {}
