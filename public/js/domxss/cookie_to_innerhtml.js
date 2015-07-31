document.cookie = "ThisCookieIsTotallyRandomAndCantPossiblyBeSet='<h1>Bad</h1>'";

/*
 * Return the value of the first cookie with the given name.
 */
var lookupCookie = function(name) {
  var parts = document.cookie.split(/\s*;\s*/);
  var nameEq = name + '=';
  for (var i = 0; i < parts.length; i++) {
    if (parts[i].indexOf(nameEq) == 0) {
      return parts[i].substr(nameEq.length);
    }
  }
};
var payload = lookupCookie('ThisCookieIsTotallyRandomAndCantPossiblyBeSet');
// Sync trigger.
var div = document.createElement('div');
div.id = 'divEl';
document.documentElement.appendChild(div);

var divEl = document.getElementById('divEl');
divEl.innerHTML = payload;

// Async trigger.
function trigger(payload) {
  divEl.innerHTML = payload;
};
