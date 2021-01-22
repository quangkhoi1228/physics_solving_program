js.handle_input = {

    init: function () {

        var input = document.getElementById('input').value;
        js.handle_input.detectInputElementAndExtractStep(input);

    },
    detectInputElementAndExtractStep: function (input) {
        //regex lấy ra phần tử 
        let regexp = /songsong(?=(((?!\]).)*\[)|[^\(\]]*$)|noitiep(?=(((?!\]).)*\[)|[^\(\]]*$)/g;
        let str = '[ R1 songsong R2 ] noitiep R3';

        let matches = [...str.matchAll(regexp)];
        matches.forEach((match) => {
            console.log("match found at " + match.index);
        });
    }
};