const v1 = /\c!/dsyg;
function f2() {
    return "value";
}
v1.compile("value");
("object").replace(v1, f2);
