const v0 = `
    try {
        const v3 = {};
        v3.alphabet = "symbol";
        Uint8Array.fromBase64("symbol", v3);
    } catch(e5) {
        e5.stack;
    }
`;
eval(v0);
