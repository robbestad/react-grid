(function() {
  var describe, jquery, jsdom, mocha, should, assert, Metagrid;
  should = require('should');
  mocha = require('mocha');
  jsdom = require('jsdom');
  var document = jsdom.jsdom();
  var window = document.parentWindow;
  global.window = jsdom.jsdom().createWindow();
  global.document = window.document;
  assert = require('assert');
  describe = require('describe');
  global._ = require('underscore');
  jquery = require('jquery');
  Metagrid = require('./index.js');
 
  it('displays grid when pressing "g"', function() {
    jquery('body').keyup(function () {
      assert(jquery("body").hasClass("grid"));
    });
  });

  
}).call(this);