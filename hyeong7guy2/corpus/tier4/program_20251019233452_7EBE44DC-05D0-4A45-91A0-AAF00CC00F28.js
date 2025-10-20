const v0 = `
    try { parseInt("und🤯efined"); } catch (e) {}
`;
const v5 = JSON.parse;
try { v5(v0); } catch (e) {}
