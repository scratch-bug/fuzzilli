function f0(a1, a2, a3) {
    const v5 = Intl.PluralRules;
    new v5("nn", { minimumSignificantDigits: 9007199254740992 });
    return v5;
}
try { f0(f0, f0, f0); } catch (e) {}
