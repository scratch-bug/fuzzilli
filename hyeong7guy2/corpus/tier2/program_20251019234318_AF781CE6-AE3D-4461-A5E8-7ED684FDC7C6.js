class C1 extends Int32Array {
    static {
        const v3 = `
            function F4(a6, a7) {
                if (!new.target) { throw 'must be called with new'; }
            }
        `;
        JSON.stringify({ type: v3 });
    }
}
