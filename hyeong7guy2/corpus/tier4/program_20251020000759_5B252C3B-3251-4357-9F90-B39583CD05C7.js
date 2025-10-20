const v2 = Intl.NumberFormat;
const v3 = v2(v2);
function f4(a5, a6) {
    return "-4294967297";
}
v3.toString = f4;
v3.formatRangeToParts("-4294967297", v3);
