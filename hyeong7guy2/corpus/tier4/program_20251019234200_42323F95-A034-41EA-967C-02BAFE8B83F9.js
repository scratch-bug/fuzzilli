function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = Intl.Collator;
    v7("zh", { collation: "pinyin" }).resolvedOptions();
}
new F0();
