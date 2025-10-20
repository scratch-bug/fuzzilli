class C1 {
}
try {
    const v3 = Intl.NumberFormat;
    v3(C1, { unit: -1024 });
} catch(e6) {
}
