var utils = {
    elements: '',
    handle_step_history: '',
    step: -1,

    init: function () {

        var input = document.getElementById('input').value;
        var input_result = utils.detectInputElementAndExtractStep(input);
        console.log(input_result);
        utils.elements = input_result.elements;
        utils.handle_step_history = input_result.handle_step_history;

        utils.createTableElementsInput();

    },

    createTableElementsInput: function () {
        var container = document.querySelector('#tableInputTbodyContainer');
        container.innerHTML = '';
        utils.elements.forEach(function (element) {

            var child = document.createElement('tr');
            child.setAttribute('element', element);
            child.innerHTML = ` <tr name="${element}">
                                    <td>${element}</td>
                                    <td><input key="u"  type="text" class="input"></td>
                                    <td><input key="i" type="text" class="input"></td>
                                    <td><input key="r" type="text" class="input"></td>
                                </tr>`;
            container.insertBefore(child, container.querySelector('tr'));
        });

        var total = document.createElement('tr');
        total.setAttribute('element', 'input');

        total.innerHTML = `
                                <td>Mạch tổng</td>
                                <td><input key="u"  type="text" class="input"></td>
                                <td><input key="i" type="text" class="input"></td>
                                <td><input key="r" type="text" class="input"></td>`
            ;
        container.appendChild(total);
    },
    detectInputElementAndExtractStep: function (input) {

        // input = '( R1 songsong R2 ) noitiep R3';

        var step = 0;
        var elements = [];
        var handle_step_history = {};

        utils.getStepHistory(input, step, elements, handle_step_history);


        return { elements: elements, handle_step_history: handle_step_history };

    },

    getStepHistory(input, step, elements, handle_step_history) {
        //regex lấy ra các phần tử songsong hoặc noitiep mà không nằm trong cặp ngoặc [ ] nào
        var regexp = /songsong(?=(((?!\)).)*\()|[^\(\)]*$)|noitiep(?=(((?!\)).)*\[)|[^\(\)]*$)/g;
        var matches = [...input.matchAll(regexp)];
        matches.forEach((match) => {
            var operator = match[0];
            var param1 = input.substring(0, match.index).trim();
            var param2 = input.substring(match.index + operator.length, input.length).trim();
            if (!elements.includes(param1)) {
                elements.push(param1);
            }
            if (!elements.includes(param2)) {
                elements.push(param2);
            }
            var step_history = [param1, param2, operator];

            handle_step_history[step] = step_history;

            if (step > utils.step) {
                utils.step = step + 1
            }
            step_history.forEach(function (step_history_param) {
                if (!['songsong', 'noitiep'].includes(step_history_param)) {
                    if (step_history_param.startsWith('(') && step_history_param.endsWith(')')) {
                        step += 1;
                        var subInput = step_history_param.substring(1, step_history_param.length - 1).trim();
                        utils.getStepHistory(subInput, step, elements, handle_step_history);
                    }
                }
            })


        });
    },

    caculateResult: function () {
        utils.elementsInput = utils.getInput();


        utils.caculateAttributeOfElementFromStepsHistory();

    },

    caculateAttributeOfElementFromStepsHistory: function () {
        console.log('b');
        var a = {
            "elements":
                ["R1", "R2"],
            "step": 0,
            "handle_step_history": { "0": ["R1", "R2", "songsong"] }, "elementsInput": {
                "R2": { "u": "", "i": "", "r": "10" },
                "R1": { "u": "", "i": "", "r": "15" },
                "input": { "u": "18", "i": "", "r": "?" }
            }
        };
        utils.elements = a.elements;
        utils.step = a.step;
        utils.handle_step_history = a.handle_step_history;
        utils.elementsInput = a.elementsInput;


        utils.elements.forEach(function (element) {
            if (!element.includes('songsong') && !element.includes('noitiep') && element.startsWith('R')) {
                var objetct = model_dientro;
            }
        })
        // for (var i = 0; i < Object.keys(utils.handle_step_history).length; i++) {
        //     console.log(i);
        //     var handle_step = utils.handle_step_history[i];
        //     console.log(handle_step);
        // }


    },
    getInput: function () {
        var listRow = document.querySelectorAll('#tableInputTbodyContainer tr');
        var elements = {};
        listRow.forEach(function (row) {
            console.log(row);
            var name = row.getAttribute('element');
            elements[name] = {};
            var listKey = row.querySelectorAll('[key]');

            listKey.forEach(function (keyInput) {
                var key = keyInput.getAttribute('key');
                elements[name][key] = keyInput.value;
            });
        })

        return elements;
    }
};