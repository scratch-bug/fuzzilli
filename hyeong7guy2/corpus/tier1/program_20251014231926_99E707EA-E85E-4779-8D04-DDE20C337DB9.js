function f1() {
    ("p").lastIndexOf("🙌🏿");
    return "p";
}
({ construct: f1 }).construct();
