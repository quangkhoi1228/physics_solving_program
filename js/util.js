var utils = {
    elements: '',
    handle_step_history: '',
    step: -1,
    element_result: {},
    input: '',
    rule_step: 1,
    rule_history: {},


    clear: function () {
        document.getElementById('inputContainer').classList.add('is-hidden');
        document.getElementById('resultContainer').classList.add('is-hidden');
        document.getElementById('input').value = '';
        utils.elements = '';
        utils.handle_step_history = '';
        utils.step = -1;
        utils.element_result = {};
        utils.input = '';
    },
    init: function () {

        utils.elements = '';
        utils.handle_step_history = '';
        utils.step = -1;
        utils.element_result = {};
        utils.input = '';

        var input = document.getElementById('input').value.trim();
        if (input != '') {

            input = input.trim().replace(/\( /g, '(').replace(/\ \)/g, ')');

            document.getElementById('inputContainer').classList.remove('is-hidden');

            var input_result = utils.detectInputElementAndExtractStep(input);
            utils.elements = input_result.elements;
            utils.handle_step_history = input_result.handle_step_history;

            utils.createTableElementsInput();
        } else {
            alert('Chưa nhập mạch');
        }

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
    },
    detectInputElementAndExtractStep: function (input) {
        utils.input = input;

        // input = '(R1 songsong R2) noitiep R3';

        var step = 0;
        var elements = ['input'];
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
            var parent = (input == utils.input) ? 'input' : input;


            var step_history = [param1, param2, operator, parent];

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

        utils.element_result = {};
        utils.elementsInput = utils.getInput();

        utils.caculateAttributeOfElementFromStepsHistory();

        document.getElementById('resultContainer').classList.remove('is-hidden');




    },

    caculateAttributeOfElementFromStepsHistory: function () {
        // var a = {
        //     "elements": ["input", "(R1 songsong R2)", "R3", "R1", "R2"],
        //     "handle_step_history": {
        //         "0": ["(R1 songsong R2)", "R3", "songsong", "input"], "1": ["R1", "R2", "songsong", "R1 songsong R2"]
        //     }, "step": 1, "element_result": { "R3": { "name": "dientro", "i": "", "u": "", "r": 24, "relation": { "i": { "required": ["r", "u"], "key": "i" }, "u": { "required": ["r", "i"], "key": "u" }, "r": { "required": ["u", "i"], "key": "r" } } }, "input": { "name": "doanmach", "i": "", "u": 3.6, "r": "", "param1": "(R1 songsong R2)", "param2": "R3", "operator": "songsong", "relation": { "u": { "required": ["param1.r", "param2.r"], "key": "r" }, "i": { "required": ["param1.i", "param2.i"], "key": "i" }, "r": { "required": ["param1.u"], "key": "u" }, "u1": { "required": ["param2.u"], "key": "u" }, "i2": { "required": ["r", "u"], "key": "i" }, "u2": { "required": ["r", "i"], "key": "u" }, "r3": { "required": ["u", "i"], "key": "r" } } }, "R1": { "name": "dientro", "i": "", "u": "", "r": 9, "relation": { "i": { "required": ["r", "u"], "key": "i" }, "u": { "required": ["r", "i"], "key": "u" }, "r": { "required": ["u", "i"], "key": "r" } } }, "R2": { "name": "dientro", "i": "", "u": "", "r": 18, "relation": { "i": { "required": ["r", "u"], "key": "i" }, "u": { "required": ["r", "i"], "key": "u" }, "r": { "required": ["u", "i"], "key": "r" } } }, "(R1 songsong R2)": { "name": "doanmach", "i": "", "u": "", "r": "", "param1": "R1", "param2": "R2", "operator": "songsong", "relation": { "u": { "required": ["param1.r", "param2.r"], "key": "r" }, "i": { "required": ["param1.i", "param2.i"], "key": "i" }, "r": { "required": ["param1.u"], "key": "u" }, "u1": { "required": ["param2.u"], "key": "u" }, "i2": { "required": ["r", "u"], "key": "i" }, "u2": { "required": ["r", "i"], "key": "u" }, "r3": { "required": ["u", "i"], "key": "r" } } } }, "input": "(R1 songsong R2)  songsong R3 ", "elementsInput": { "R2": { "u": "", "i": "", "r": "18" }, "R1": { "u": "", "i": "", "r": "9" }, "R3": { "u": "", "i": "", "r": "24" }, "(R1 songsong R2)": { "u": "", "i": "", "r": "" }, "input": { "u": "3.6", "i": "", "r": "" } }
        // };
        // utils.elements = a.elements;
        // utils.step = a.step;
        // utils.handle_step_history = a.handle_step_history;
        // utils.elementsInput = a.elementsInput;


        //tạo các đối tượng điện trở và mạch
        for (var i = 0; i < Object.keys(utils.handle_step_history).length; i++) {
            var step = utils.handle_step_history[i];
            step.forEach(function (stepItem, index) {


                if (stepItem != 'songsong' && stepItem != 'noitiep' && !utils.element_result.hasOwnProperty(stepItem)) {
                    var object;
                    var createObject = false;
                    if (stepItem.startsWith('R') && !(stepItem.includes('songsong') || stepItem.includes('noitiep'))) {

                        object = Object.assign({}, model_dientro);
                        createObject = true;
                    }
                    if (index == 3) {
                        var operator = step[2];
                        if (operator == 'songsong') {
                            object = Object.assign({}, model_songsong);

                        }
                        if (operator == 'noitiep') {
                            object = Object.assign({}, model_noitiep);

                        }
                        object.param1 = step[0];
                        object.param2 = step[1];
                        object.operator = operator;

                        if (stepItem != 'input') {
                            stepItem = '(' + stepItem + ')';
                        }

                        createObject = true;
                    }


                    if (createObject && utils.elementsInput.hasOwnProperty(stepItem)) {

                        let entries = Object.entries(utils.elementsInput[stepItem]);
                        entries.forEach(function (entry) {
                            if (entry[1] == "" || entry[1] == "?") {
                                object[entry[0]] = entry[1];
                            } else {
                                object[entry[0]] = Number(entry[1]);
                            }
                        })

                        utils.element_result[stepItem] = object;

                    }
                }
            })
        }

        utils.caculateAttributeFromRelation();


    },

    caculateAttributeFromRelation: function () {
        var hasNewValue = false;
        var isCaculateRequied = false;
        for (var j = Object.keys(utils.handle_step_history).length - 1; j >= 0; j--) {
            var handle_step = utils.handle_step_history[j];
            handle_step.forEach(function (stepItem, index) {
                if (stepItem != 'songsong' && stepItem != 'noitiep') {
                    var item;
                    if (!(stepItem.includes('songsong') || stepItem.includes('noitiep')) || stepItem.startsWith('(')) {
                        stepItem = stepItem;
                    } else {
                        stepItem = '(' + stepItem + ')';
                    }

                    item = utils.element_result[stepItem];

                    var relation = item['relation'];
                    var keys = Object.keys(relation);
                    keys.forEach(function (key) {
                        var hasRequired = true;
                        var options = {};
                        relation[key]['required'].forEach(function (requiredItem) {

                            if (!requiredItem.includes('param')) {

                                if (item[requiredItem] == '' || item[requiredItem] == null || item[requiredItem] == '?') {
                                    hasRequired = false;
                                } else {
                                    options[requiredItem] = item[requiredItem];
                                }
                            } else {
                                var param = requiredItem.split('.')[0];
                                var paramAttribute = requiredItem.split('.')[1];

                                if (utils.element_result[item[param]][paramAttribute] == '' || utils.element_result[item[param]][paramAttribute] == null) {
                                    hasRequired = false;
                                } else {
                                    options[param] = utils.element_result[item[param]];
                                }
                            }

                        })

                        var attributeName = item['relation'][key]['key'];
                        if (attributeName.includes('param')) {

                            if (hasRequired) {

                                var param = attributeName.split('.')[0];
                                var paramAttribute = attributeName.split('.')[1];

                                var output = utils.element_result[utils.element_result[stepItem][param]][paramAttribute];


                                if (['', '?'].includes(output) && !isCaculateRequied) {
                                    if (output == '?') {
                                        isCaculateRequied = true;
                                    }
                                    utils.element_result[utils.element_result[stepItem][param]][paramAttribute] = parseFloat((item['relation'][key].function(options).toFixed(2)));
                                    hasNewValue = true;

                                    utils.addRuleStep(item, item['relation'][key], stepItem, parseFloat((item['relation'][key].function(options).toFixed(2))));

                                }

                            }
                        } else {


                            if (hasRequired && ['', '?'].includes(utils.element_result[stepItem][attributeName]) && !isCaculateRequied) {
                                if (utils.element_result[stepItem][attributeName] == '?') {
                                    isCaculateRequied = true;
                                }

                                utils.element_result[stepItem][attributeName] = parseFloat((item['relation'][key].function(options).toFixed(2)));
                                hasNewValue = true;
                                utils.addRuleStep(item, item['relation'][key], stepItem, parseFloat((item['relation'][key].function(options).toFixed(2))));



                            }
                        }

                    })
                }
            })
        }

        if (isCaculateRequied) {
            utils.showUserResult();
        } else {
            if (hasNewValue) {
                utils.caculateAttributeFromRelation();
            } else {
                utils.showUserResult();
            }
        }


    },

    addRuleStep: function (item, relation, name, value) {

        var content = '';
        if (relation.hasOwnProperty('description')) {
            var param1, param2;
            if (item.name == 'doanmach') {
                param1 = item.param1;
                param2 = item.param2;
            }
            content = relation.description.replaceAll('$u', name + '_U').replaceAll('$i', name + '_I').replaceAll('$r', name + '_R').replaceAll('$param1', param1).replaceAll('$param2', param2).replaceAll('.u', '_U').replaceAll('.i', '_I').replaceAll('.r', '_R');
            console.log(relation.key);


        } else {
            content = 'not description ' + relation['key'];
        }

        utils.rule_history[utils.rule_step] = {
            content: content,
            value: value,
        };
        utils.rule_step += 1;
    },

    showUserResult: function () {
        var container = document.querySelector('#tableOutputTbodyContainer');
        container.innerHTML = '';
        Object.entries(utils.element_result).forEach(function (entry) {
            var name = entry[0];
            var value = entry[1];
            var tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${name}</td>
            <td>${value['u']}</td>
            <td>${value['i']}</td>
            <td>${value['r']}</td>
        `;
            container.appendChild(tr);
        })

        console.log(utils.rule_history);

        var container1 = document.querySelector('#tableRuleResultTbodyContainer');
        container1.innerHTML = '';
        Object.entries(utils.rule_history).forEach(function (entry) {
            var step = entry[0];
            var content = entry[1].content;
            var key = content.split('=')[0].trim();

            var value = entry[1].value;

            var tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${step}</td>
            <td>${key}</td>
            <td>${value}</td>
            <td>${content}</td>
        `;
            container1.appendChild(tr);
        })

        console.log(utils.rule_history);

    },
    getInput: function () {
        var listRow = document.querySelectorAll('#tableInputTbodyContainer tr');
        var elements = {};
        listRow.forEach(function (row) {
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