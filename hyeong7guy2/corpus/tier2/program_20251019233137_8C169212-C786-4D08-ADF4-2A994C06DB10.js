const v0 = `
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
        function f5() {
            return this;
        }
        Object.defineProperty(this, "toString", { get: f5 });
    }
`;
const v8 = JSON.stringify({ type: v0 });
const v9 = JSON.parse;
v9.apply(JSON, [v8]);
