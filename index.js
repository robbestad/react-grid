"use strict";
var metaGridNs = metaGridNs || {};

var Metagrid = (function () {

    var options = {
            placeholder: 'body',
            id: 'divGrid',          // id for the grid container
            modifierKey: null,      // optional 'ctrl', 'alt' or 'shift'
            showGridKey: 'g',       // key to show the grid
            holdGridKey: 'h'        // key to hold the grid in place
        },
        overlay,
        sticky = false,
        overlayOn = false,
        overlayEl, row, overlayCookie, state;

    // Remove any conflicting overlay
    if (null !== document.getElementById(options.id)) {
        document.getElementById(options.id).remove()
    }

    // Create overlay grid
    overlayEl = document.createElement('div');
    overlayEl.id = options.id;
    document.body.appendChild(overlayEl);
    overlay = document.getElementById(options.id);

    // Create grid rows
    overlay.innerHTML = '<div class="container"><div class="row"></div></div>';
    row = document.getElementById(options.id).getElementsByClassName('row')[0];

    for (var i = 0; i < 12; i++) {
        var rowEl = document.createElement('div');
        rowEl.className = "col-xs-1 col-sm-1 col-md-1 col-lg-1";
        row.appendChild(rowEl);
    }

    // Check for saved state
    overlayCookie = readCookie("metagrid" + options.id);
    if (typeof overlayCookie == 'string') {
        state = overlayCookie.split('-');
        if (state[0] == '1') {
            overlayOn = true;
            sticky = true;
            document.body.className += " " + "grid";
        }
    }

    document.onkeydown = function (event) {
        event = event || window.event;
        keydownHandler(event);
    };

    window.onkeyup = function (event) {
        event = event || window.event;
        keyupHandler(event);
    };


    function keydownHandler(e) {
        var m = getModifier(e);
        if (!m) return true;
        var k = getKey(e);
        if (!k) return true;
        switch (k) {
            case options.showGridKey:
                if (!overlayOn) {
                    document.body.className += " " + "grid";
                    overlayOn = true;
                }
                else if (sticky) {
                    removeClass(document.body, 'grid');
                    overlayOn = false;
                    sticky = false;
                    saveState();
                }
                break;
            case options.holdGridKey:
                if (overlayOn && !sticky) {
                    sticky = true;
                    saveState();
                }
                break;
        }
        return true;
    }

    function keyupHandler(e) {
        var k = getKey(e);
        if (k && (k == options.showGridKey) && !sticky) {
            removeClass(document.body, 'grid');
            overlayOn = false;
        }
        return true;
    }


    function getKey(e) {
        var k = false, c = (e.keyCode ? e.keyCode : e.which);
        if (c == 13) k = 'enter';
        else k = String.fromCharCode(c).toLowerCase();
        return k;
    }

    function getModifier(e) {
        if (options.modifierKey === null) return true;
        var m = true;
        switch (options.modifierKey) {
            case 'ctrl':
                m = (e.ctrlKey ? e.ctrlKey : false);
                break;
            case 'alt':
                m = (e.altKey ? e.altKey : false);
                break;
            case 'shift':
                m = (e.shiftKey ? e.shiftKey : false);
                break;
        }
        return m;
    }

    function saveState() {
        createCookie("metagrid" + options.id, (sticky ? '1' : '0'), 1);
    }

    function createCookie(name, value, days) {
        var date, expires = "";
        if (days) {
            date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    function readCookie(name) {
        var c, ca = document.cookie.split(';'), i = 0, len = ca.length, nameEQ = name + "=";
        for (; i < len; i++) {
            c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function removeClass(element, classToRemove) {
        var currentClassValue = element.className;

        // removing a class value when there is more than one class value present
        // and the class you want to remove is not the first one
        if (currentClassValue.indexOf(" " + classToRemove) != -1) {
            element.className = element.className.replace(" " + classToRemove, "");
            return;
        }

        // removing the first class value when there is more than one class
        // value present
        if (currentClassValue.indexOf(classToRemove + " ") != -1) {
            element.className = element.className.replace(classToRemove + " ", "");
            return;
        }

        // removing the first class value when there is only one class value
        // present
        if (currentClassValue.indexOf(classToRemove) != -1) {
            element.className = element.className.replace(classToRemove, "");
            return;
        }
    }

})();
exports.module = Metagrid;