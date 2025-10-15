const v0 = `
    for (let v1 = 0; v1 < 5; v1++) {
        function F2(a4, a5, a6, a7) {
            if (!new.target) { throw 'must be called with new'; }
        }
    }
`;
eval(v0);
