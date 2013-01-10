/* This code is subject to the GNU Affero Public License, Version 3. */

/* this bit captures relevant data from the browser window */
function capture() {
  var ret = {}
  ret["url"] = window.content.document.location.href;
  ret["title"] = window.content.document.title;
  ret["quote"] = window.getSelection().toString();
  ret["domain"] = window.content.document.domain;
  ret["lastModified"] = window.content.document.lastModified;
  return JSON.stringify(ret);
}

