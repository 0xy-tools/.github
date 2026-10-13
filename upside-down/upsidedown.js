const area = document.getElementById("dataArea");
const output = document.getElementById("upsideDownOutput");
area.addEventListener(`focus`, () => area.select());
output.addEventListener(`focus`, () => output.select());

const upsideDown = {
    a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ",
    f: "ɟ", g: "ƃ", h: "ɥ", i: "ᴉ", j: "ɾ̣",
    k: "ʞ", l: "l", m: "ɯ", n: "u", o: "o",
    p: "d", q: "b", r: "ɹ", s: "s", t: "ʇ",
    u: "n", v: "ʌ", w: "ʍ", x: "x", y: "ʎ",
    z: "z",
    A: "∀", B: "𐐒", C: "Ɔ", D: "ꓷ", E: "Ǝ",
    F: "Ⅎ", G: "ꓨ", H: "H", I: "I", J: "ꓩ",
    K: "⋊", L: "˥", M: "W", N: "N", O: "O",
    P: "Ԁ", Q: "Ό", R: "ꓤ", S: "S", T: "ꓕ",
    U: "ꓵ", V: "Λ", W: "M", X: "X", Y: "⅄",
    Z: "Z",
    "0": "0", "1": "⇂", "2": "ᘔ", "3": "Ɛ",
    "4": "߈", "5": "ϛ", "6": "9", "7": "ㄥ",
    "8": "8", "9": "6",
    ".": "˙", ",": "'", "'": ",", '"': "„",
    "?": "¿", "!": "¡", "(": ")", ")": "(",
    "[": "]", "]": "[", "{": "}", "}": "{",
    "&": "⅋", "_": "‾",
};

function convertUpsideDown(text) {
    return [...text]
        .reverse()
        .map(char => upsideDown[char] ?? char)
        .join("");
}

area.addEventListener("input", () => {
    output.value = convertUpsideDown(area.value);
});

output.value = convertUpsideDown(area.value);