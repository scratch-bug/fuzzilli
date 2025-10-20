function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = /(?:a?)*/dvi;
    const v5 = `
        parseInt("und🤯efined");
    `;
    const v11 = JSON.stringify({ e: v5 });
    v4.constructor.escape(v11);
}
new F0();
