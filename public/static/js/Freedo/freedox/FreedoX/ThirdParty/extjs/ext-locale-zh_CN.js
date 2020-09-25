/**
 * Simplified Chinese translation
 * By DavidHu
 * 09 April 2007
 *
 * update by andy_ghg
 * 2009-10-22 15:00:57
 */
Ext.onReady(function() {
    var parseCodes;

    if (Ext.Date) {
        Ext.Date.monthNames = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];

        Ext.Date.dayNames = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

        Ext.Date.formatCodes.a = "(this.getHours() < 12 ? '上午' : '下午')";
        Ext.Date.formatCodes.A = "(this.getHours() < 12 ? '上午' : '下午')";

        parseCodes = {
            g: 1,
            c: "if (/(上午)/i.test(results[{0}])) {\n"
                + "if (!h || h == 12) { h = 0; }\n"
                + "} else { if (!h || h < 12) { h = (h || 0) + 12; }}",
            s: "(上午|下午)",
            calcAtEnd: true
        };

        Ext.Date.parseCodes.a = Ext.Date.parseCodes.A = parseCodes;
    }

    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {
            thousandSeparator: ',',
            decimalSeparator: '.',
            currencySign: '\u00a5',
            // Chinese Yuan
            dateFormat: 'y年m月d日'
        });
    }
});

Ext.define("Ext.locale.zh_CN.view.View", {
    override: "Ext.view.View",
    emptyText: ""
});

Ext.define("Ext.locale.zh_CN.grid.plugin.DragDrop", {
    override: "Ext.grid.plugin.DragDrop",
    dragText: "选择了 {0} 行"
});

Ext.define("Ext.locale.zh_CN.tab.Tab", {
    override: "Ext.tab.Tab",
    closeText: "关闭此标签"
});

Ext.define("Ext.locale.zh_CN.form.field.Base", {
    override: "Ext.form.field.Base",
    invalidText: "输入值非法"
});

// changing the msg text below will affect the LoadMask
Ext.define("Ext.locale.zh_CN.view.AbstractView", {
    override: "Ext.view.AbstractView",
    loadingText: "讀取中..."
});

Ext.define("Ext.locale.zh_CN.picker.Date", {
    override: "Ext.picker.Date",
    todayText: "今天",
    minText: "日期必须大于最小允许日期",
    //update
    maxText: "日期必须小于最大允许日期",
    //update
    disabledDaysText: "",
    disabledDatesText: "",
    nextText: '下个月 (Ctrl+Right)',
    prevText: '上个月 (Ctrl+Left)',
    monthYearText: '选择一个月 (Control+Up/Down 来改变年份)',
    //update
    todayTip: "{0} (空格键选择)",
    format: "y年m月d日",
    ariaTitle: '{0}',
    ariaTitleDateFormat: 'Y\u5e74m\u6708d\u65e5',
    longDayFormat: 'Y\u5e74m\u6708d\u65e5',
    monthYearFormat: 'Y\u5e74m\u6708',
    getDayInitial: function (value) {
        // Grab the last character
        return value.substr(value.length - 1);
    }
});

Ext.define("Ext.locale.zh_CN.picker.Month", {
    override: "Ext.picker.Month",
    okText: "确定",
    cancelText: "取消"
});

Ext.define("Ext.locale.zh_CN.toolbar.Paging", {
    override: "Ext.PagingToolbar",
    beforePageText: "第",
    //update
    afterPageText: "页,共 {0} 页",
    //update
    firstText: "第一页",
    prevText: "上一页",
    //update
    nextText: "下一页",
    lastText: "最后页",
    refreshText: "刷新",
    displayMsg: "显示 {0} - {1}条，共 {2} 条",
    //update
    emptyMsg: '没有数据'
});

Ext.define("Ext.locale.zh_CN.form.field.Text", {
    override: "Ext.form.field.Text",
    minLengthText: "该输入项的最小长度是 {0} 个字符",
    maxLengthText: "该输入项的最大长度是 {0} 个字符",
    blankText: "该输入项为必输项",
    regexText: "",
    emptyText: null
});

Ext.define("Ext.locale.zh_CN.form.field.Number", {
    override: "Ext.form.field.Number",
    minText: "该输入项的最小值是 {0}",
    maxText: "该输入项的最大值是 {0}",
    nanText: "{0} 不是有效数值"
});

Ext.define("Ext.locale.zh_CN.form.field.Date", {
    override: "Ext.form.field.Date",
    disabledDaysText: "禁用",
    disabledDatesText: "禁用",
    minText: "该输入项的日期必须在 {0} 之后",
    maxText: "该输入项的日期必须在 {0} 之前",
    invalidText: "{0} 是无效的日期 - 必须符合格式： {1}",
    format: "y年m月d日"
});

Ext.define("Ext.locale.zh_CN.form.field.ComboBox", {
    override: "Ext.form.field.ComboBox",
    valueNotFoundText: undefined
}, function() {
    Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
        loadingText: "读取中..."
    });
});

Ext.define("Ext.locale.zh_CN.form.field.VTypes", {
    override: "Ext.form.field.VTypes",
    emailText: '该输入项必须是电子邮件地址，格式如： "user@example.com"',
    urlText: '该输入项必须是URL地址，格式如： "http:/' + '/www.example.com"',
    alphaText: '该输入项只能包含半角字母和_',
    alphanumText: '该输入项只能包含半角字母,数字和_'
});

//add HTMLEditor's tips by andy_ghg
Ext.define("Ext.locale.zh_CN.form.field.HtmlEditor", {
    override: "Ext.form.field.HtmlEditor",
    createLinkText: '添加超级链接:'
}, function() {
    Ext.apply(Ext.form.field.HtmlEditor.prototype, {
        buttonTips: {
            bold: {
                title: '粗体 (Ctrl+B)',
                text: '将选中的文字设置为粗体',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            italic: {
                title: '斜体 (Ctrl+I)',
                text: '将选中的文字设置为斜体',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            underline: {
                title: '下划线 (Ctrl+U)',
                text: '给所选文字加下划线',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            increasefontsize: {
                title: '增大字体',
                text: '增大字号',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            decreasefontsize: {
                title: '缩小字体',
                text: '减小字号',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            backcolor: {
                title: '以不同颜色突出显示文本',
                text: '使文字看上去像是用荧光笔做了标记一样',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            forecolor: {
                title: '字体颜色',
                text: '更改字体颜色',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyleft: {
                title: '左对齐',
                text: '将文字左对齐',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifycenter: {
                title: '居中',
                text: '将文字居中对齐',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyright: {
                title: '右对齐',
                text: '将文字右对齐',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertunorderedlist: {
                title: '项目符号',
                text: '开始创建项目符号列表',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertorderedlist: {
                title: '编号',
                text: '开始创建编号列表',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            createlink: {
                title: '转成超级链接',
                text: '将所选文本转换成超级链接',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            sourceedit: {
                title: '代码视图',
                text: '以代码的形式展现文本',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            }
        }
    });
});

Ext.define("Ext.locale.zh_CN.grid.header.Container", {
    override: "Ext.grid.header.Container",
    sortAscText: "正序",
    //update
    sortDescText: "倒序",
    //update
    lockText: "锁定列",
    //update
    unlockText: "解除锁定",
    //update
    columnsText: "列"
});

Ext.define("Ext.locale.zh_CN.grid.PropertyColumnModel", {
    override: "Ext.grid.PropertyColumnModel",
    nameText: "名称",
    valueText: "值",
    dateFormat: "y年m月d日"
});

Ext.define("Ext.locale.zh_CN.window.MessageBox", {
    override: "Ext.window.MessageBox",
    buttonText: {
        ok: "确定",
        cancel: "取消",
        yes: "是",
        no: "否"
    }    
});

// This is needed until we can refactor all of the locales into individual files
Ext.define("Ext.locale.zh_CN.Component", {	
    override: "Ext.Component"
});

/** * This provides a Microsoft Office style ribbon. The system is built on standard ExtJS classes but you must use
 * the ribbon derived classes throughout. The structure is:
 * 1. a ribbon class. This is the entire ribbon. It contains 1 or more ribbon_tab objects. In the future it will
 * also contain the quick access toolbar and the backstage.
 * 2. Each ribbon_tab object corresponds to a tab in the top of the ribbon. One tab is visible at any given time
 * in the ribbon. Each tab contains one or more ribbon_group objects.
 * 3. In each group you can have multiple ribbon_button, ribbon_splitbutton, ribbon_combobox, ribbon_textfield, and
 * ribbon_gallery objects. Do not put objects of the base xtype (ie don't put a button object in the group). It will
 * work (probably) but you could have problems.
 * A menu is built off of a ribbon_button (or ribbon_splitbutton) with menu elements.
 *
 * All of the group elements can be explicitly declared (as you see in most menu samples). However, you can also
 * provide values, including all elements in a menu, gallery, etc by implementing the callbacks defined in each
 * type. This provides you the ability to make the content of an element, if it is enabled, etc. on a callback
 * basis.
 *
 * ribbon.refresh() drives the callback mechanism. You can call this at any time and the ribbon menu will be rebuilt
 * using the values returned from the callbacks. ribbon.refresh() is also called whenever an different tab is made
 * active.
 *
 * All of this is provided as-is by Windward (www.windward.net). Built from initial code posted to the Sencha forum
 * by Khebs Manzano - thank you.
 *
 * Sample code:
 *     Ext.define('App.view.ui.RibbonBar', {
 *        extend: 'App.lib.ux.ribbon.Ribbon',
 *        alias: 'widget.uiribbonbar',
 *
 *        initComponent: function () {
 *            this.callParent(arguments);
 *        }
 *    });
 *  ...
 *  var ribbon = Ext.widget('uiribbonbar');
 */


Ext.require(['*']);


Ext.define('App.lib.ux.ribbon.Ribbon', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.ribbon',
    cls: 'ui-ribbonbar',
    activeTab: 0,
    unstyled: true,
    autoHeight: true,
    border: false,


    //bodyStyle: 'margin-bottom: -3px;',


    /**
     * Add a tab to the ribbon.
     * @param {App.lib.ux.ribbon.Tab} tab The tab to add to the ribbon.
     * @param {Boolean} focus true if this tab should be made the active tab. Default is false.
     */
    addTab: function (tab, focus) {
        var rTab = this.add(tab);
        if (focus === true || this.items.length == 1)
            this.setActiveTab(rTab);
    },


    initComponent: function () {
        this.callParent(arguments);
    },


    listeners: {
        tabchange: {
            fn: function (tabPanel, newTab, oldTab, eOpts) {
                if (newTab != null && newTab.refresh != null)
                    newTab.refresh();
            },
            scope: this
        }
    },


    /**
     * Rebuild the ribbon. All element callbacks will be called to get their correct value.
     * todo: This should only rebuild the active tab.
     */
    refresh: function () {
        Ext.suspendLayouts();
        App.lib.ux.ribbon.Ribbon._refresh(this.items.items);
        Ext.resumeLayouts(true);
    },


    statics: {
        tmRibbon: null,


        _refresh: function (arrItems) {
            Ext.each(arrItems, function (item) {


                if (item.ribbon != null) {
                    if (item.ribbon.getIcon != null) {
                        item.setIcon(item.ribbon.getIcon(item));
                    }
                    if (item.ribbon.getText != null) {
                        item.setText(item.ribbon.getText(item));
                    }
                    if (item.ribbon.isDisabled != null)
                        item.setDisabled(item.ribbon.isDisabled(item));
                    if (item.ribbon.isVisible != null)
                        item.setVisible(item.ribbon.isVisible(item));


                    // textfield
                    if (item.xtype == 'ribbon_textfield') {
                        if (item.ribbon.getTextValue != null)
                            item.setValue(item.ribbon.getTextValue(item));
                        if (item.ribbon.getTextLabel != null) {
                            var label = item.ribbon.getTextLabel(item);
                            if (App.lib.ux.ribbon.Ribbon.tmRibbon == null)
                                App.lib.ux.ribbon.Ribbon.tmRibbon = new Ext.util.TextMetrics();
                            item.labelEl.setWidth(App.lib.ux.ribbon.Ribbon.tmRibbon.getWidth(label) + item.labelPad);
                            item.setFieldLabel(label);
                        }
                    }


                    // button-menu
                    if (item.xtype == 'ribbon_button' && item.ribbon.getItemCount != null)
                        App.lib.ux.ribbon.Ribbon.addMenuItems(item);


                    // combobox
                    if (item.xtype == 'ribbon_combobox' && item.ribbon.getItemCount != null)
                        App.lib.ux.ribbon.Ribbon.addComboItems(item);
                }


                // pass it down
                if (item.items != null && item.items.items != null)
                    App.lib.ux.ribbon.Ribbon._refresh(item.items.items);
            });
        },


        addMenuItems: function (item) {
            item.menu = Ext.create('Ext.menu.Menu');
            for (index = 0; index < item.ribbon.getItemCount(item); index++) {
                var type = 0;
                if (item.ribbon.getItemType != null)
                    type = item.ribbon.getItemType(item, index);


                // menu item
                if (type == 0) {
                    var menu = Ext.create('Ext.menu.Item');
                    if (item.ribbon.getItemIcon != null) {
                        var icon = item.ribbon.getItemIcon(item, index);
                        if (icon != null)
                            menu.icon = icon;
                    }
                    var text = item.ribbon.getItemText(item, index);
                    if (text != null)
                        menu.text = text;
                    if (item.ribbon.getItemEnabled != null) {
                        var enabled = item.ribbon.getItemEnabled(item, index);
                        if (!enabled)
                            menu.disabled = true;
                    }
                    if (item.ribbon.click != null)
                        menu.on({
                            click: {
                                fn: function (menuItem, e, eOpts) {
                                    this.click(menuItem, eOpts.options);
                                },
                                scope: item.ribbon,
                                options: index
                            }
                        });
                    item.menu.add(menu);
                    continue;
                }


                // separator
                if (type == 2) {
                    item.menu.add(Ext.create('Ext.menu.Separator'));
                    continue;
                }


                // header
                if (type == 1) {
                    var text = item.ribbon.getItemText(item, index);
                    item.menu.add('<b class="menu-title">' + text + '</b>');
                }
            }
        },


        addComboItems: function (item) {


            var cbdata = new Array();


            for (index = 0; index < item.ribbon.getItemCount(item); index++) {
                var itemData = item.ribbon.getItemData(item, index);
                cbdata.push(itemData);
            }


            var cbStore = new Ext.data.ArrayStore({
                fields: ['text', 'value'],
                data: cbdata
            });


            item.store = cbStore;
            item.displayField = 'text';
            item.valueField = 'value';
            item.mode = 'local';
        }
    }
});


/**
 * A tab in the menu. One tab is visible at any given time in the ribbon. Each tab contains one or more ribbon_group
 * objects.
 *
 * Sample code:
 *     Ext.define('App.view.ui.RibbonTab1', {
 *        extend: 'App.lib.ux.ribbon.Tab',
 *        alias: 'widget.uiribbontab',
 *        title: 'First tab',
 *        closable: false,
 *        layout: {
 *            type: 'hbox',
 *            // flex: 1
 *            align: 'stretch'
 *        }, items: [ ... ]
 *        });
 *     ...
 *     var ribbon = Ext.widget('uiribbonbar');
 *     ribbon.addTab(Ext.widget('uiribbontab'), true);
 */
Ext.define('App.lib.ux.ribbon.Tab', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.ribbon_tab',
    layout: 'hbox',
    title: 'Untitled',


    defaults: {
        xtype: 'ribbon_group',
        headerPosition: 'bottom',
        margin: '2 0 2 1'
    },


    initComponent: function () {
        this.callParent(arguments);


        this.on('added', function (o, c, i) {
            Ext.each(this.items.items, function (btnGroups) {
                Ext.each(btnGroups.items.items, function (item) {
                    if (item.scale !== 'small') {
                        var text = String(item.text);


                        if (text.indexOf('\n') != -1) { // has \n ?
                            text = text.replace('\n', '<br/>');
                        } else if (text.indexOf(' ') != -1) {
                            text = text.replace(/[ +]/gi, '<br/>');
                        } else {
                            if (!item.menu || item.arrowAlign !== 'bottom')
                                item.cls = 'x-btn-as-arrow';
                        }


                        if (item.setText)
                            item.setText(text);
                    }
                });
            });
        });


        this.on('render', function () {
            //this.doLayout(true);
        });
    },


    /**
     * Rebuild this tab.
     */
    refresh: function () {
        Ext.suspendLayouts();
        App.lib.ux.ribbon.Ribbon._refresh(this.items.items);
        Ext.resumeLayouts(true);
    }
});


/**
 * The tab contains 1 or more of this object.
 *
 * In each group you can have multiple ribbon_button, ribbon_splitbutton, ribbon_combobox, ribbon_textfield, and
 * ribbon_gallery objects. Do not put objects of the base xtype (ie don't put a button object in the group). It will
 * work (probably) but you could have problems.
 *
 * Code sample:
 *     Ext.define('App.view.ui.RibbonTab1', {
 *        extend: 'App.lib.ux.ribbon.Tab',
 *        alias: 'widget.uiribbontab1',
 *        title: 'First tab',
 *        closable: false,
 *        layout: {
 *            type: 'hbox',
 *            // flex: 1
 *            align: 'stretch'
 *        }, items: [
 *            {
 *                // this is the ribbon_group object
 *                title: 'Several buttons',
 *                iconAlign: 'top',
 *                // add the tools if you want the gear in the lower right corner of the group box.
 *                tools: [
 *                    {
 *                        type: 'gear',
 *                        tooltip: 'Dialog Box',
 *                        callback: function (panel, tool, event) {
 *                            alert('clicked gear for ' + panel.itemId);
 *                        }
 *                    }
 *                ],
 *                // the contents of the group go in items.
 *                items: [...]
 *            }]
 *        });
 */
Ext.define('App.lib.ux.ribbon.Group', {
    extend: 'Ext.container.ButtonGroup',
    xtype: 'ribbon_group',


    defaults: {
        xtype: 'ribbon_button',
        scale: 'large',
        iconAlign: 'top'
    }
});


/**
 * Use this class for galleries, both drop down and inline.
 *
 * todo: code sample.
 */
Ext.define('App.lib.ux.ribbon.Gallery', {
    extend: 'Ext.container.ButtonGroup',
    xtype: 'ribbon_gallery',


    /**
     * @cfg ribbon The ribbon specific config values.
     */
    ribbon: {
        /**
         * @cfg {Boolean} preferInline true if the gallery should be rendered inline in the menu (if the ribbon
         * has enough room). Default is false (always render as a button with a drop-down).
         */
        preferInline: false
        // todo: remaining ribbon config values.
    },


    defaults: {
        xtype: 'ribbon_button'
    },


    initComponent: function () {
        var me = this;


        me.on({
            add: me.onChildAdd,
            click: me.onChildClick,
            scope: me
        });


        me.callParent(arguments);
    },


    onChildAdd: function (ct, item, index) {
        item.enableBubble('click');
    },


    onChildClick: function (btn) {
        // default action
        // example
        this.up('menu').hide();
        console.log('default click action handler of child items')
    }
});


/**
 * Use this class where you want a button in a group.
 *
 * See ribbon_split for sample showing defining the menu via callbacks.
 *
 * Sample Code:
 * // the ribbon_button objects are items inside a ribbon_group.
 * items: [
 *    {
 *        text: 'text & icon',
 *        scale: 'small',
 *        iconAlign: 'left',
 *        itemId: "id_WatchMe",
 *        icon: "images/16/document_down.png",
 *        isOk: true,
 *        ribbon: {
 *            getIcon: function (item) {
 *                return "images/16/document_error.png";
 *            },
 *            getText: function (item) {
 *                return "error";
 *            },
 *            isVisible: function (item) {
 *                return true;
 *            },
 *            isDisabled: function (item) {
 *                return false;
 *            }
 *        }
 *    }
 */
Ext.define('App.lib.ux.ribbon.Button', {
    extend: 'Ext.button.Button',
    xtype: 'ribbon_button',
    /**
     * @cfg ribbon The ribbon specific config values. These are used when the button is built via callbacks.
     */
    ribbon: {
        /**
         * Get the icon to display on this button.
         *
         * Example:
         * getIcon: function (item) {
         *     return "images/document_open.png";
         * }
         *
         * @param {App.lib.ux.ribbon.Button} item the ribbon_button object (this).
         *
         * @return {String} Calls Button.setIcon() to this returned value.
         */


        /**
         * Get the text to display on this button.
         *
         * Example:
         * getText: function (item) {
         *     return "Open File";
         * }
         *
         * @param {App.lib.ux.ribbon.Button} item the ribbon_button object (this).
         *
         * @return {String} Calls Button.setText() to this returned value.
         */


        /**
         * Get if this button is disabled.
         *
         * Example:
         * isDisabled: function (item) {
         *     return false;
         * }
         *
         * @param {App.lib.ux.ribbon.Button} item the ribbon_button object (this).
         *
         * @return {String} Calls Button.setDisabled() to this returned value.
         */


        /**
         * Get if this button is visible.
         *
         * Example:
         * isVisible: function (item) {
         *     return true;
         * }
         *
         * @param {App.lib.ux.ribbon.Button} item the ribbon_button object (this).
         *
         * @return {String} Calls Button.setVisible() to this returned value.
         */


        /**
         * This call is used if the button has a menu that is added via callbacks. The existence of this function is
         * used to determine if the button should build its menu using callbacks. This returns the number of menu items
         * for this button.
         *
         * Example:
         * getItemCount: function (item) {
         *     return 3;
         * }
         *
         * @param {App.lib.ux.ribbon.Button} item the ribbon_button object (this).
         *
         * @return {Number} The number of items in this button's menu.
         */


        /**
         * This call is used if the button has a menu that is added via callbacks. This returns the text for the
         * requested menu item. This function is not required (all menu items are enabled).
         *
         * Example:
         * getItemEnabled: function (item, index) {
         *     return true;
         * }
         *
         * @param {App.lib.ux.ribbon.Button} item the ribbon_button object (this).
         * @param {Number} index the 0-based element of the menu[index] items to add to this button's menu.
         *
         * @return {Boolean} true if the requested menu item is enabled.
         */


        /**
         * This call is used if the button has a menu that is added via callbacks. This returns the icon for the
         * requested menu item. This function is not required (no items have icons) and may return null (the requested
         * index has no icon).
         *
         * Example:
         * getItemIcon: function (item, index) {
         *     return "images/bitmap.png";
         * }
         *
         * @param {App.lib.ux.ribbon.Button} item the ribbon_button object (this).
         * @param {Number} index the 0-based element of the menu[index] items to add to this button's menu..
         *
         * @return {String} The icon file.
         */


        /**
         * This call is used if the button has a menu that is added via callbacks. This returns the text for the
         * requested menu item. This is not called for a separator menu item.
         *
         * Example:
         * getItemText: function (item, index) {
         *     return 0;
         * }
         *
         * @param {App.lib.ux.ribbon.Button} item the ribbon_button object (this).
         * @param {Number} index the 0-based element of the menu[index] items to add to this button's menu.
         *
         * @return {String} The text for this menu item (standard item or header).
         */


        /**
         * This call is used if the button has a menu that is added via callbacks. This returns the type for the
         * requested menu item. The returned values are:
         * 0 - menu item. This index is a standard menu item and you will get a click event if it is clicked.
         * 1 - header. This index is a text line in the menu. It is formatted as a header and you cannot click on it.
         * 2 - separator. This index is a separator line in the menu.
         *
         * Example:
         * getItemType: function (item, index) {
         *     return 0;
         * }
         *
         * @param {App.lib.ux.ribbon.Button} item the ribbon_button object (this).
         * @param {Number} index the 0-based element of the menu[index] items to add to this button's menu.
         *
         * @return {Number} 0, 1, or 2.
         */


        /**
         * This event is used if the button has a menu that is added via callbacks. This event will be called when
         * a menu item is clicked.
         *
         * Example:
         * click: function (item, index) {
         *     alert('Clicked item ' + item.itemId + ', index ' + index);
         * }
         *
         * @param {App.lib.ux.ribbon.Button} item the ribbon_button object (this).
         * @param {Number} index the 0-based element of the menu[index] items clicked.
         */
    }
});


/**
 * Use this class where you want a splitbutton in a group.
 *
 * See ribbon_button for sample showing defining the button part via callbacks.
 *
 * Sample Code:
 * // the ribbon_button objects are items inside a ribbon_group.
 * items: [
 * {
 *    xtype: 'ribbon_splitbutton',
 *    text: 'a menu',
 *    scale: 'small',
 *    iconAlign: 'left',
 *    itemId: 'idMenuButton',
 *    icon: "images/16/document_up.png",
 *    ribbon: {
 *        getItemCount: function (item) {
 *            return 5;
 *        },
 *        getItemType: function (item, index) {
 *            switch (index) {
 *                case 0:
 *                    return 1;
 *                case 3:
 *                    return 2;
 *            }
 *            return 0;
 *        },
 *        getItemIcon: function (item, index) {
 *            switch (index) {
 *                case 1:
 *                    return "images/16/document_into.png";
 *                case 2:
 *                    return "images/16/document_ok.png";
 *            }
 *            return null;
 *        },
 *        getItemText: function (item, index) {
 *            return "text " + index;
 *        },
 *        getItemEnabled: function (item, index) {
 *            return index != 2;
 *        },
 *        click: function (item, index) {
 *            alert("clicked item " + item.text + ", index " + index);
 *        }
 *    },
 *    listeners: {
 *        click: function(btn) {
 *            console.log(btn);
 *        }
 *    }
 * }
 */
Ext.define('App.lib.ux.ribbon.Split', {
    extend: 'Ext.button.Split',
    xtype: 'ribbon_splitbutton',
    /**
     * @cfg ribbon The ribbon specific config values. These are used when the button is built via callbacks.
     */
    ribbon: {
        /**
         * Get the icon to display on this button.
         *
         * Example:
         * getIcon: function (item) {
         *     return "images/document_open.png";
         * }
         *
         * @param {App.lib.ux.ribbon.Split} item the ribbon_splitbutton object (this).
         *
         * @return {String} Calls Split.setIcon() to this returned value.
         */


        /**
         * Get the text to display on this button.
         *
         * Example:
         * getText: function (item) {
         *     return "Open File";
         * }
         *
         * @param {App.lib.ux.ribbon.Split} item the ribbon_splitbutton object (this).
         *
         * @return {String} Calls Split.setText() to this returned value.
         */


        /**
         * Get if this button is disabled.
         *
         * Example:
         * isDisabled: function (item) {
         *     return false;
         * }
         *
         * @param {App.lib.ux.ribbon.Split} item the ribbon_splitbutton object (this).
         *
         * @return {String} Calls Split.setDisabled() to this returned value.
         */


        /**
         * Get if this button is visible.
         *
         * Example:
         * isVisible: function (item) {
         *     return true;
         * }
         *
         * @param {App.lib.ux.ribbon.Split} item the ribbon_splitbutton object (this).
         *
         * @return {String} Calls Split.setVisible() to this returned value.
         */


        /**
         * This call is used if the button has a menu that is added via callbacks. The existence of this function is
         * used to determine if the button should build its menu using callbacks. This returns the number of menu items
         * for this button.
         *
         * Example:
         * getItemCount: function (item) {
         *     return 3;
         * }
         *
         * @param {App.lib.ux.ribbon.Split} item the ribbon_splitbutton object (this).
         *
         * @return {Number} The number of items in this button's menu.
         */


        /**
         * This call is used if the button has a menu that is added via callbacks. This returns the text for the
         * requested menu item. This function is not required (all menu items are enabled).
         *
         * Example:
         * getItemEnabled: function (item, index) {
         *     return true;
         * }
         *
         * @param {App.lib.ux.ribbon.Split} item the ribbon_splitbutton object (this).
         * @param {Number} index the 0-based element of the menu[index] items to add to this button's menu.
         *
         * @return {Boolean} true if the requested menu item is enabled.
         */


        /**
         * This call is used if the button has a menu that is added via callbacks. This returns the icon for the
         * requested menu item. This function is not required (no items have icons) and may return null (the requested
         * index has no icon).
         *
         * Example:
         * getItemIcon: function (item, index) {
         *     return "images/bitmap.png";
         * }
         *
         * @param {App.lib.ux.ribbon.Split} item the ribbon_splitbutton object (this).
         * @param {Number} index the 0-based element of the menu[index] items to add to this button's menu..
         *
         * @return {String} The icon file.
         */


        /**
         * This call is used if the button has a menu that is added via callbacks. This returns the text for the
         * requested menu item. This is not called for a separator menu item.
         *
         * Example:
         * getItemText: function (item, index) {
         *     return 0;
         * }
         *
         * @param {App.lib.ux.ribbon.Split} item the ribbon_splitbutton object (this).
         * @param {Number} index the 0-based element of the menu[index] items to add to this button's menu.
         *
         * @return {String} The text for this menu item (standard item or header).
         */


        /**
         * This call is used if the button has a menu that is added via callbacks. This returns the type for the
         * requested menu item. The returned values are:
         * 0 - menu item. This index is a standard menu item and you will get a click event if it is clicked.
         * 1 - header. This index is a text line in the menu. It is formatted as a header and you cannot click on it.
         * 2 - separator. This index is a separator line in the menu.
         *
         * Example:
         * getItemType: function (item, index) {
         *     return 0;
         * }
         *
         * @param {App.lib.ux.ribbon.Split} item the ribbon_splitbutton object (this).
         * @param {Number} index the 0-based element of the menu[index] items to add to this button's menu.
         *
         * @return {Number} 0, 1, or 2.
         */


        /**
         * This event is used if the button has a menu that is added via callbacks. This event will be called when
         * a menu item is clicked.
         *
         * Example:
         * click: function (item, index) {
         *     alert('Clicked item ' + item.itemId + ', index ' + index);
         * }
         *
         * @param {App.lib.ux.ribbon.Split} item the ribbon_splitbutton object (this).
         * @param {Number} index the 0-based element of the menu[index] items clicked.
         */
    }
});


/**
 * Use this class where you want a combobox in a group.
 *
 * Sample Code:
 * // the ribbon_combobox objects are items inside a ribbon_group.
 * items: [
 *     {
 *        xtype: 'ribbon_combobox',
 *        itemId: 'idComboBox',
 *        fieldLabel: 'Combo',
 *        labelWidth: 40,
 *        ribbon: {
 *            cbData: [
 *                ['Alabama', 'AL'],
 *                ['Alaska', 'AK'],
 *                ['Arizona', 'AZ'],
 *                ['Arkansas', 'AR'],
 *                ['California', 'CA'],
 *                ['Colorado', 'CO'],
 *                ['Wyoming', 'WY']
 *            ],
 *
 *            getItemCount: function (item) {
 *                return this.cbData.length;
 *            },
 *            getItemData: function (item, index) {
 *                return this.cbData[index];
 *            }
 *        },
 *        listeners: {
 *            select: function (combo, records) {
 *                alert("clicked item " + combo.itemId + ", value " + records[0].getData().value);
 *            }
 *        }
 *    }]
 */
Ext.define('App.lib.ux.ribbon.ComboBox', {
    extend: 'Ext.form.field.ComboBox',
    xtype: 'ribbon_combobox',
    padding: "0 5 0 5",
    /**
     * @cfg ribbon The ribbon specific config values. These are used when the combobox values are built via callbacks.
     */
    ribbon: {
        /**
         * Get the icon to display on this combobox.
         *
         * Example:
         * getIcon: function (item) {
         *     return "images/document_open.png";
         * }
         *
         * @param {App.lib.ux.ribbon.ComboBox} item the ribbon_combobox object (this).
         *
         * @return {String} Calls ComboBox.setIcon() to this returned value.
         */


        /**
         * Get the text to display on this combobox.
         *
         * Example:
         * getText: function (item) {
         *     return "Open File";
         * }
         *
         * @param {App.lib.ux.ribbon.ComboBox} item the ribbon_combobox object (this).
         *
         * @return {String} Calls ComboBox.setText() to this returned value.
         */


        /**
         * Get if this combobox is disabled.
         *
         * Example:
         * isDisabled: function (item) {
         *     return false;
         * }
         *
         * @param {App.lib.ux.ribbon.ComboBox} item the ribbon_combobox object (this).
         *
         * @return {String} Calls ComboBox.setDisabled() to this returned value.
         */


        /**
         * Get if this combobox is visible.
         *
         * Example:
         * isVisible: function (item) {
         *     return true;
         * }
         *
         * @param {App.lib.ux.ribbon.ComboBox} item the ribbon_combobox object (this).
         *
         * @return {String} Calls ComboBox.setVisible() to this returned value.
         */


        /**
         * This call is used if the combobox's elements are added via callbacks. The existence of this function is
         * used to determine if the combobox should build its elements using callbacks. This returns the number of
         * elements for this combobox.
         *
         * Example:
         * getItemCount: function (item) {
         *     return 3;
         * }
         *
         * @param {App.lib.ux.ribbon.ComboBox} item the ribbon_combobox object (this).
         *
         * @return {Number} The number of items in this combobox's list.
         */


        /**
         * This call is used if the button has a menu that is added via callbacks. This returns the data for the
         * requested combobox element. The data must be returned as an array where [0] is the displayed text and
         * [1] is the value for this element.
         * These data elements are placed in an Ext.data.ArrayStore and that store is assigned to the combobox.
         *
         * Example:
         * getItemData: function (item, index) {
         *     return ['Hawaii', 'HI'];
         * }
         *
         * @param {App.lib.ux.ribbon.ComboBox} item the ribbon_combobox object (this).
         * @param {Number} index the 0-based element of the menu[index] items to add to this button's menu..
         *
         * @return {String} The icon file.
         */
    }
});


/**
 * Use this class where you want a textfield in a group.
 *
 * Sample Code:
 * // the ribbon_textfield objects are items inside a ribbon_group.
 * items: [
 *{
 *    xtype: 'ribbon_textfield',
 *    fieldLabel: 'Name',
 *    itemId: 'idTextField',
 *    labelWidth: 35,
 *    emptyText: 'enter name',
 *    textIsSelect: true,
 *    ribbon: {
 *        getTextValue: function (item) {
 *            return item.textIsSelect ? "select * from employees" : "${var}";
 *        },
 *        getTextLabel: function (item) {
 *            return item.textIsSelect ? "select" : "a variable";
 *        }
 *    }
 *}]
 */
Ext.define('App.lib.ux.ribbon.Text', {
    extend: 'Ext.form.field.Text',
    xtype: 'ribbon_textfield',
    padding: "0 5 0 5",
    /**
     * @cfg ribbon The ribbon specific config values. These are used when the textbox value is built via callbacks.
     */
    ribbon: {
        /**
         * Get the icon to display with this textfield.
         *
         * Example:
         * getIcon: function (item) {
         *     return "images/document_open.png";
         * }
         *
         * @param {App.lib.ux.ribbon.Text} item the ribbon_textfield object (this).
         *
         * @return {String} Calls textfield.setIcon() to this returned value.
         */


        /**
         * Get the text to display with this textfield. This function may be null. This will both set the field label
         * and set the label width using Ext.util.TextMetrics to calculate the label width.
         *
         * Example:
         * getTextLabel: function (item) {
         *     return "Name";
         * }
         *
         * @param {App.lib.ux.ribbon.Text} item the ribbon_textfield object (this).
         *
         * @return {String} Calls textfield.setFieldLabel() to this returned value.
         */


        /**
         * Get the text to display in the textfield. This function may be null. This will overwrite the value in the
         * textfield and this is called whenever the ribbon.refresh() is called.
         *
         * Example:
         * getTextValue: function (item) {
         *     return "text to edit";
         * }
         *
         * @param {App.lib.ux.ribbon.Text} item the ribbon_textfield object (this).
         *
         * @return {String} Calls textfield.setValue() to this returned value.
         */


        /**
         * Get if this textfield is disabled.
         *
         * Example:
         * isDisabled: function (item) {
         *     return false;
         * }
         *
         * @param {App.lib.ux.ribbon.Text} item the ribbon_textfield object (this).
         *
         * @return {String} Calls textfield.setDisabled() to this returned value.
         */


        /**
         * Get if this textfield is visible.
         *
         * Example:
         * isVisible: function (item) {
         *     return true;
         * }
         *
         * @param {App.lib.ux.ribbon.Text} item the ribbon_textfield object (this).
         *
         * @return {Boolean} Calls textfield.setVisible() to this returned value.
         */


    }
});

Ext.define('App.view.ui.RibbonBar', {
	extend: 'App.lib.ux.ribbon.Ribbon',
	alias: 'widget.ribbonbar',


	initComponent: function () {
		this.callParent(arguments);
	}
});