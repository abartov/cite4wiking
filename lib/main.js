var data = require("self").data;
 
// Construct a panel, loading its content from the "cite_form.html"
// file in the "data" directory, and loading the "cite4wiki.js" script
// into it.
var panel = require("panel").Panel({
  width: 212,
  height: 200,
  contentURL: data.url("cite_form.html"),
  contentScriptFile: data.url("cite4wiki.js")
});

var contextMenu = require("context-menu");
var menuItem = contextMenu.Item({
  label: "Cite on Wikipedia",
  context: contextMenu.PageContext(),
  contentScriptFile: data.url("capture.js"),
  contentScript: 'self.on("click", function () {' +
                 '  self.postMessage(capture());' +
                 '});',
  onMessage: function (text) {
    panel.show();
    console.log(text.toString());
  }
});

