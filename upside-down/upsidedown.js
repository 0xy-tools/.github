const area = document.getElementById("dataArea");
area.addEventListener(`focus`, () => area.select());

const upsideDown = {
    a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ",
    f: "ɟ", g: "ƃ", h: "ɥ", i: "ᴉ", j: "ɾ",
    k: "ʞ", l: "l", m: "ɯ", n: "u", o: "o",
    p: "d", q: "b", r: "ɹ", s: "s", t: "ʇ",
    u: "n", v: "ʌ", w: "ʍ", x: "x", y: "ʎ",
    z: "z",
    A: "∀", B: "𐐒", C: "Ɔ", D: "◖", E: "Ǝ",
    F: "Ⅎ", G: "פ", H: "H", I: "I", J: "ſ",
    K: "⋊", L: "˥", M: "W", N: "N", O: "O",
    P: "Ԁ", Q: "Ό", R: "ᴚ", S: "S", T: "⊥",
    U: "∩", V: "Λ", W: "M", X: "X", Y: "⅄",
    Z: "Z",
    "0": "0", "1": "Ɩ", "2": "ᄅ", "3": "Ɛ",
    "4": "ㄣ", "5": "ϛ", "6": "9", "7": "ㄥ",
    "8": "8", "9": "6",
    ".": "˙", ",": "'", "'": ",", '"': "„",
    "?": "¿", "!": "¡", "(": ")", ")": "(",
    "[": "]", "]": "[", "{": "}", "}": "{",
    "&": "⅋", "_": "‾"
};

function convertUpsideDown(text) {
    return [...text]
        .map(char => upsideDown[char] ?? char)
        .join("");
}

area.addEventListener("input", () => {
    const start = area.selectionStart;
    const end = area.selectionEnd;
    const original = area.value;

    area.value = convertUpsideDown(original);

    console.log(0, start - 1, area.value.length)
    // Keep the cursor in place
    area.setSelectionRange(
        Math.max(0, start - 1),
        Math.min(area.value.length, start - 1)
    );
});

area.addEventListener("keydown", (event) => {
    if (event.key !== "Backspace" && event.key !== "Delete") return;

    const start = area.selectionStart;
    const end = area.selectionEnd;
    const value = area.value;

    // Handle Backspace and Delete at the boundaries
    if (start === end &&
        ((event.key === "Backspace" && start === 0) ||
         (event.key === "Delete" && start === value.length))) {
        return;
    }

    event.preventDefault();

    let from, to;

    if (start !== end) {
        // Delete the selected text
        from = start;
        to = end;
    } else if (event.key === "Backspace") {
        // Delete the previous character
        from = start - 1;
        to = start;
    } else {
        // Delete the next character
        from = start;
        to = start + 1;
    }

    area.value = value.slice(0, from) + value.slice(to);

    // Update the text, allowing your input listener to run
    area.dispatchEvent(new Event("input", { bubbles: true }));

    // Restore the intended cursor position AFTER the listener runs
    area.setSelectionRange(from, from);
});