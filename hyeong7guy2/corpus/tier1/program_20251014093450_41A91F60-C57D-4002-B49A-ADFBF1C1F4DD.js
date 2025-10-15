function f1() {
    return ("🙌🏿").fontsize(Uint16Array).toWellFormed();
}
const v5 = { construct: f1 };
v5.construct(f1, v5, f1, Uint16Array);
