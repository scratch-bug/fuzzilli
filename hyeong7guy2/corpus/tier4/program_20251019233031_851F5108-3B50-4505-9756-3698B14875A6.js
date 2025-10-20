try {
    const v2 = Intl.RelativeTimeFormat;
    const v4 = {};
    v4.toString = Symbol;
    v4.numeric = v4;
    new v2("kde", v4);
} catch(e6) {
}
