"use strict";

// Format a string function.
String.prototype.format = function (args) {
  var str = this;
  return str.replace(String.prototype.format.regex, function(item) {
    var intVal = parseInt(item.substring(1, item.length - 1));
    var replace;
    if (intVal >= 0) {
      replace = args[intVal];
    } else if (intVal === -1) {
      replace = "{";
    } else if (intVal === -2) {
      replace = "}";
    } else {
      replace = "";
    }
    return replace;
  });
};
String.prototype.format.regex = new RegExp("{-?[0-9]+}", "g")

function getStoredConfig(name) {
  var tmp = localStorage.getItem(name);
  if(tmp) {
    try {
      return JSON.parse(tmp);
    } catch(error) {}
  }
  return null;
}

function getStoredConfigArray(name) {
  var result = getStoredConfig(name);
  if(!result) {
    result = [];
  }
  return result;
}

function setStoredConfig(name, value) {
  try {
      var tmp = JSON.stringify(value);
      localStorage.setItem(name, tmp);
  } catch(error) {}
}

function removeStoredConfig(name) {
  try {
    localStorage.removeItem(name);
  } catch(error) {}
}
function domBasicNode(type, attributes, content) {
  var result = document.createElement(type);
  if(typeof attributes === "object") {
    for(var property in attributes) {
      result.setAttribute(property, attributes[property])
    }
  }
  if(typeof content === "string") {
    var append = document.createTextNode(content);
    result.appendChild(append);
  } else if(typeof content === "object") {
    if( Array.isArray(content) ) {
      domAppendChildren(result, content)
    } else if(content) {
      result.appendChild(content);
    }
  }
  return result;
}

function domAppendChildren(node, content) {
  for(var i = 0; i < content.length; ++i) {
    if(typeof content[i] === "string") {
      var append = document.createTextNode(content[i]);
      node.appendChild(append);
    } else if(typeof content[i] === "object") {
      if( Array.isArray(content[i]) ) {
        domAppendChildren(node, content[i]);
      } else {
        node.appendChild(content[i]);
      }
    }
  }
}

function domGetInput(nodeid) {
  var elem = document.getElementById(nodeid)
  if(elem) {
    return elem.value;
  }
  return undefined;
}

function domPreFillInput(inBoxId, text) {
  var input = document.getElementById(inBoxId);
  if( typeof input === "object") {
    input.value = text;
  }
}

function getIPaddress(ipaddress, required)
{
  if(typeof ipaddress === "string") {
    var input = ipaddress.trim().replace(/(\r\n|\n|\r)/gm,"");
    if(input.length == 0) {
      if(required) {
        return false;
      }
      return "";
    }

    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(input))
    {
      return input;
    }
  }
  return false;
}

function getUrl(url, required)
{
  if(typeof url === "string") {
    var input = url.trim().replace(/(\r\n|\n|\r)/gm,"");
    if(input.length == 0) {
      if(required) {
        return false;
      }
      return "";
    }

    var pattern = new RegExp('^(\\w+:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ //port
    '(\\?[;&amp;a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i');
    if(pattern.test(url)) {
      return url;
    }
    var pkg_pattern = new RegExp('^pkg:\\/');
    if(pkg_pattern.test(url)) {
      return url;
    }
  }
  return false;
}

function getShortCode(length) {
  var glyphs = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
  var result = ""
  for(var i = 0; i < length; ++i) {
    var tmp = Math.floor(Math.random() * 32);
    result += glyphs.charAt(tmp);
  }
  return result;
}
