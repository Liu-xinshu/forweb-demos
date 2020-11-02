(function() {
    'use strict';

    var defaultAction;
    var bucket = window.location.href;
    var pos = bucket.lastIndexOf('/');
    if (pos > 0 && pos < (bucket.length - 1)) {
        bucket = bucket.substring(pos + 1);
    }

    window.Sandcastle = {
        bucket: bucket,
        declare: function() {},
        highlight: function() {},
        registered: [],
        finishedLoading: function() {
            window.Sandcastle.reset();

            if (defaultAction) {
                window.Sandcastle.highlight(defaultAction);
                defaultAction();
                defaultAction = undefined;
            }

            document.body.className = document.body.className.replace(/(?:\s|^)sandcastle-loading(?:\s|$)/, ' ');
        },
        addToggleButton: function(text, checked, onchange, toolbarID) {
            window.Sandcastle.declare(onchange);
            var input = document.createElement('input');
            input.checked = checked;
            input.type = 'checkbox';
            input.style.pointerEvents = 'none';
            var label = document.createElement('label');
            label.appendChild(input);
            label.appendChild(document.createTextNode(text));
            label.style.pointerEvents = 'none';
            var button = document.createElement('button');
            button.type = 'button';
            button.className = 'cesium-button';
            button.appendChild(label);

            button.onclick = function() {
                window.Sandcastle.reset();
                window.Sandcastle.highlight(onchange);
                input.checked = !input.checked;
                onchange(input.checked);
            };

            document.getElementById(toolbarID || 'toolbar').appendChild(button);
        },
        addToolbarButton: function(text, onclick, toolbarID) {
            window.Sandcastle.declare(onclick);
            var button = document.createElement('button');
            button.type = 'button';
            button.className = 'cesium-button';
            button.onclick = function() {
                window.Sandcastle.reset();
                window.Sandcastle.highlight(onclick);
                onclick();
            };
            button.textContent = text;
            document.getElementById(toolbarID || 'toolbar').appendChild(button);
        },
        addDefaultToolbarButton: function(text, onclick, toolbarID) {
            window.Sandcastle.addToolbarButton(text, onclick, toolbarID);
            defaultAction = onclick;
        },
        addDefaultToolbarMenu: function(options, toolbarID) {
            window.Sandcastle.addToolbarMenu(options, toolbarID);
            defaultAction = options[0].onselect;
        },
        addToolbarMenu: function(options, toolbarID) {
            var menu = document.createElement('select');
            menu.className = 'cesium-button';
            menu.onchange = function() {
                window.Sandcastle.reset();
                var item = options[menu.selectedIndex];
                if (item && typeof item.onselect === 'function') {
                    item.onselect();
                }
            };
            document.getElementById(toolbarID || 'toolbar').appendChild(menu);

            if (!defaultAction && typeof options[0].onselect === 'function') {
                defaultAction = options[0].onselect;
            }

            for (var i = 0, len = options.length; i < len; ++i) {
                var option = document.createElement('option');
                option.textContent = options[i].text;
                option.value = options[i].value;
                menu.appendChild(option);
            }
        },
        createTipsDOM: function(opt) {
            let dom_1 = document.createElement('span');
            dom_1.className = 'close-tip';
            dom_1.innerHTML = 'x';
            dom_1.id = 'closeTip';
            dom_1.addEventListener('click', function() {
                let infoPanel = document.getElementById('infoPanel');
                let closeTip = document.getElementById('closeTip');
                let openTip = document.getElementById('openTip');
                infoPanel.style.width = 0;
                infoPanel.style.padding = 0;
                infoPanel.style.right = '-10000px';
                closeTip.style.display = 'none';
                openTip.style.display = 'block';
            })

            let dom_2 = document.createElement('span');
            dom_2.className = 'open-tip';
            dom_2.innerHTML = '展开';
            dom_2.id = 'openTip';
            dom_2.addEventListener('click', function() {
                let infoPanel = document.getElementById('infoPanel');
                let closeTip = document.getElementById('closeTip');
                let openTip = document.getElementById('openTip');
                infoPanel.style.width = 'auto';
                infoPanel.style.padding = '10px 60px 10px 20px';
                infoPanel.style.right = '10px';
                closeTip.style.display = 'block';
                openTip.style.display = 'none';
            })

            let dom_3 = document.createElement('table');
            dom_3.className = 'infoPanel';
            dom_3.id = 'infoPanel';
            let dom_4 = document.createElement('tbody');
            for (let item in opt) {
                let dom = document.createElement('tr');
                let td = document.createElement('td');
                td.innerHTML = opt[item];
                dom.appendChild(td);
                dom_4.appendChild(dom);
            }
            dom_3.appendChild(dom_4);

            document.body.appendChild(dom_1);
            document.body.appendChild(dom_2);
            document.body.appendChild(dom_3);
        },
        reset: function() {}
    };

    // if (window.location.protocol === 'file:') {
    //     if (window.confirm("You must host this app on a web server.\nSee contributor's guide for more info?")) {
    //         window.location = 'https://github.com/AnalyticalGraphicsInc/cesium/wiki/Contributor%27s-Guide';
    //     }
    // }
}());