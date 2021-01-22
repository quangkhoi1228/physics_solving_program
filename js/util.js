var utils = {
    elements: '',
    handle_step_history: '',

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
            child.innerHTML = ` <tr name="${element}">
                                    <td>${element}</td>
                                    <td><input key="u"  type="text" class="input"></td>
                                    <td><input key="i" type="text" class="input"></td>
                                    <td><input key="r" type="text" class="input"></td>
                                </tr>`;
            container.insertBefore(child, container.querySelector('tr'));
        });

        var total = document.createElement('tr');
        total.innerHTML = ` <tr>
                                <td>Mạch tổng</td>
                                <td><input key="u"  type="text" class="input"></td>
                                <td><input key="i" type="text" class="input"></td>
                                <td><input key="r" type="text" class="input"></td>
                            </tr>`;
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
    }
};