const upper_button = document.getElementById("upper-case");
const lower_button = document.getElementById("lower-case");
const proper_button = document.getElementById("proper-case");
const sentence_button = document.getElementById("sentence-case");
const save_text_button = document.getElementById("save-text-file");

function topropercase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

function tosentencecase(str) {
    const sentences = str.split(/\. |\?/g);
    let future_sentences = [];

    for (i=0; i < sentences.length; i++) {
        let sentence = sentences[i];
        sentence = sentence.toLowerCase();
        sentence = sentence.trim();
        sentence = sentence.replace(sentence.charAt(0), sentence.charAt(0).toUpperCase());

        if (sentence.length > 0 && sentence !== ".") {
            if (sentence !== ".") {

            }
            future_sentences.push(sentence);
        } else {
            {};
        }
    }

    const str_final = future_sentences.join(". ");
    return str_final;
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

upper_button.addEventListener("click", ev => {
    const user_text = document.querySelector("textarea").value;
    const text_area = document.querySelector("textarea");

    new_version = user_text.toUpperCase();
    text_area.value = new_version;
    return text_area;
});

lower_button.addEventListener("click", ev => {
    const user_text = document.querySelector("textarea").value;
    const text_area = document.querySelector("textarea");

    new_version = user_text.toLowerCase();
    text_area.value = new_version;
    return text_area;
});

proper_button.addEventListener("click", ev => {
    const user_text = document.querySelector("textarea").value;
    const text_area = document.querySelector("textarea");

    new_version = topropercase(user_text);
    text_area.value = new_version;
    return text_area;
});

sentence_button.addEventListener("click", ev => {
    const user_text = document.querySelector("textarea").value;
    const text_area = document.querySelector("textarea");

    new_version = tosentencecase(user_text);
    text_area.value = new_version;
    return text_area;
});

save_text_button.addEventListener("click", ev => {
    const user_text = document.querySelector("textarea").value;
    download("text.txt", user_text);
});
