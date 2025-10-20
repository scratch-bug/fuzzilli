function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = /(?:a?)*/dvi;
    const v5 = `
        function f6(a7, a8) {
            return f6;
        }
        parseInt("und🤯efined");
    `;
    const v14 = JSON.stringify({ e: v5 });
    v4.constructor.escape(v14);
}
new F0(F0, F0);
