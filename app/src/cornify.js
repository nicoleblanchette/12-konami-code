/*

    _______      ,-----.    .-------.    ,---.   .--..-./`)  ________    ____     __
   /   __  \   .'  .-,  '.  |  _ _   \   |    \  |  |\ .-.')|        |   \   \   /  /
  | ,_/  \__) / ,-.|  \ _ \ | ( ' )  |   |  ,  \ |  |/ `-' \|   .----'    \  _. /  '
,-./  )      ;  \  '_ /  | :|(_ o _) /   |  |\_ \|  | `-'`"`|  _|____      _( )_ .'
\  '_ '`)    |  _`,/ \ _/  || (_,_).' __ |  _( )_\  | .---. |_( )_   | ___(_ o _)'
 > (_)  )  __: (  '\_/ \   ;|  |\ \  |  || (_ o _)  | |   | (_ o._)__||   |(_,_)'
(  .  .-'_/  )\ `"/  \  ) / |  | \ `'   /|  (_,_)\  | |   | |(_,_)    |   `-'  /
 `-'`-'     /  '. \_/``".'  |  |  \    / |  |    |  | |   | |   |      \      /
   `._____.'     '-----'    ''-'   `'-'  '--'    '--' '---' '---'       `-..-'

  This script has been modified by @wesbos because
  https://twitter.com/wesbos/status/1657012836403388416

  Syntax modified by @nicoleblanchette!
  Mostly just replacing var and hoisted functions

*/

let cornify_count = 0;
 export const cornify_add = (options) => {
  // Track how often we cornified.
  cornify_count++;

  // Prepare our lovely variables.
  const cornify_url = "https://www.cornify.com/";
  const heightRandom = Math.random() * 0.75;
  const de = document.documentElement;
   const showGrandUnicorn = cornify_count == 15;
   let windowHeight = 768;
   let windowWidth = 1024;
   let height = 0;
   let width = 0;
   let numType = "px";
   let transform = "translate(-50%, -50%)";

  // Create a container for our 'corn or 'bow.
  const div = document.createElement("div");
  div.style.position = "fixed";
  div.className = "__cornify_unicorn";
  div.style.zIndex = 143143;
  div.style.outline = 0;
  div.onclick = cornify_add; // Click for more magic.

  // Get the window width and height - requires some cross browser checking.
  if (typeof window.innerHeight == "number") {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
  } else if (de && de.clientHeight) {
    windowHeight = de.clientHeight;
    windowWidth = de.clientWidth;
  } else {
    numType = "%";
    height = Math.round(height * 100) + "%";
   }

  if (showGrandUnicorn) {
    // Clicking 15 times summons the grand unicorn - which is centered on the screen.
    div.style.top = "50%";
    div.style.left = "50%";
    div.style.zIndex = 143143143;
  } else {
    // Otherwise we randomize the position.
    div.style.top = Math.round(Math.random() * 100) + "%";
    div.style.left = Math.round(Math.random() * 100) + "%";

    transform += " rotate(" + Math.round(Math.random() * 10 - 5) + "deg)";
   }

  // Create the image element.
  const img = document.createElement("img");
  img.style.opacity = 0;
  img.style.transition = "all .1s linear";
  img.alt = "A lovely unicorn or rainbow";
  img.onload = () => {
    img.style.opacity = 1;
  };

  // Used as a cache buster so the browser makes a new request every time instead of usign the previous, cached one.
  const currentTime = new Date();
  const submitTime = currentTime.getTime();

  if (showGrandUnicorn) {
    // Caching doesn't matter for the Grand Unicorn.
    submitTime = 0;
  }

  // Construct our unicorn & rainbow request.
  let url = `https://www.cornify.com/corns/${Math.random() > 0.5 ? "r" : "u"
    }${Math.ceil(Math.random() * 7)}.gif`;

  // Add younicorns if requested.
  if (options && (options.y || options.younicorns)) {
    url += "&y=" + (options.y ? options.y : options.younicorns);

    if (Math.random() > 0.5) {
      // Flip horizontally at random.
      if (transform.length > 0) {
        transform += " scaleX(-1)";
      }
    }
  };

  div.style.transform = transform;
  div.style.MozTransform = transform;
  div.style.webkitTransform = transform;

  img.setAttribute("src", url);

  // Add a nice hover wigggle.
  img.style.transition = "all .1s linear";

  div.onmouseover = () => {
    const size = 1 + Math.round(Math.random() * 10) / 100;
    const angle = Math.round(Math.random() * 20 - 10);
    const result = "rotate(" + angle + "deg) scale(" + size + "," + size + ")";
    img.style.transform = result;
    img.style.MozTransform = result;
    img.style.webkitTransform = result;
  };

  div.onmouseout = () => {
    const size = 0.9 + Math.round(Math.random() * 10) / 100;
    const angle = Math.round(Math.random() * 6 - 3);
    const result = "rotate(" + angle + "deg) scale(" + size + "," + size + ")";
    img.style.transform = result;
    img.style.MozTransform = result;
    img.style.webkitTransform = result;
  };

  // Append our container DIV to the page.
  const body = document.getElementsByTagName("body")[0];
  body.appendChild(div);
  div.appendChild(img);

  // Hooray - now we have a sparkly unicorn (or rainbow) on the page. Another cornification well done. Congrats!

   // Adds happy words at the beginning of all headers on the page.
const cornify_replace2 = () => {
  // Replace text.
  var hc = 6;
  var hs;
  var h;
  var k;
  var words = [
    "Happy",
    "Sparkly",
    "Glittery",
    "Fun",
    "Magical",
    "Lovely",
    "Cute",
    "Charming",
    "Amazing",
    "Wonderful",
  ];
  while (hc >= 1) {
    hs = document.getElementsByTagName("h" + hc);
    for (k = 0; k < hs.length; k++) {
      h = hs[k];
      h.innerHTML =
        words[Math.floor(Math.random() * words.length)] + " " + h.innerHTML;
    }
    hc -= 1;
  }
};

// Adds happy words at the beginning of all headers on the page.
const cornify_replace = () => {
  var headerTypeIndex = 6;
  var headerElements;
  var headerElement;
  var i;
  var magicalWords = [
    "Happy",
    "Sparkly",
    "Glittery",
    "Fun",
    "Magical",
    "Lovely",
    "Cute",
    "Charming",
    "Amazing",
    "Wonderful",
  ];

  while (headerTypeIndex >= 1) {
    headerElements = document.getElementsByTagName("h" + headerTypeIndex);

    for (let i = 0; i < headerElements.length; i++) {
      headerElement = headerElements[i];
      headerElement.innerHTML =
        magicalWords[Math.floor(Math.random() * magicalWords.length)] +
        " " +
        headerElement.innerHTML;
    }

    headerTypeIndex -= 1;
  }
};

   
   
  // When clicking 5 times, add a custom stylesheet to make the page look awesome.
  if (cornify_count == 5) {
    const cssExisting = document.getElementById("__cornify_css");

    if (!cssExisting) {
      const head = document.getElementsByTagName("head")[0];
      const css = document.createElement("link");
      css.id = "__cornify_css";
      css.type = "text/css";
      css.rel = "stylesheet";
      css.href = "https://www.cornify.com/css/cornify.css";
      css.media = "screen";
      head.appendChild(css);
    }
    cornify_replace();
  }

  cornify_updatecount();

  // Trigger an event on the document.
  const event = new Event("cornify");
  document.dispatchEvent(event);
};

// Tracks how often we cornified.
const cornify_updatecount = () => {
  const id = "__cornify_count";
  let p = document.getElementById(id);

  if (p == null) {
   p = document.createElement("p");
    p.id = id;
    p.style.position = "fixed";
    p.style.bottom = "5px";
    p.style.left = "0px";
    p.style.right = "0px";
    p.style.zIndex = "1000000000";
    p.style.color = "#ff00ff";
    p.style.textAlign = "center";
    p.style.fontSize = "24px";
    p.style.fontFamily = "'Comic Sans MS', 'Comic Sans', 'Marker Felt', serif"; // Only the best!
    p.style.textTransform = "uppercase";
    const body = document.getElementsByTagName("body")[0];
    body.appendChild(p);
  }

  if (cornify_count == 1) {
    p.innerHTML = "You cornified!";
  } else {
    p.innerHTML = "You cornified " + cornify_count + " times!";
  }

  // Stores our count in a cookie for our next session.
  cornify_setcookie("cornify", cornify_count + "", 1000);
};

const cornify_setcookie = (name, value, days) => {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toGMTString();
  document.cookie = name + "=" + value + "; " + expires;
};

const cornify_getcookie =  (cname) => {
  const name = cname + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    const c = ca[i].trim();
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

// Retrieve our click count from the cookie when we start up.
cornify_count = parseInt(cornify_getcookie("cornify"));
if (isNaN(cornify_count)) {
  cornify_count = 0;
}


// Clicking the rainbow cupcake button makes all the unicorns
// disappear (should only be used in an emergency, since it's sad).
const cornify_click_cupcake_button = () => {
  const doc = document;

  const corns = doc.getElementsByClassName("__cornify_unicorn");
  if (corns) {
    for (let i = 0; i < corns.length; i++) {
      corns[i].parentNode.removeChild(corns[i]);
    }
  }

  // Remove our counter.
  let button = doc.getElementById("__cornify_count");
  if (button) {
    button.parentNode.removeChild(button);
  }

  // Remove the cupcake button.
  button = doc.getElementById("__cornify_cupcake_button");
  if (button) {
    button.parentNode.removeChild(button);
  }

  const event = new Event("cornify-clear");
  document.dispatchEvent(event);
};

// Add the rainbow cupcake button to the page.
const cornify_add_cupcake_button = function () {
  const id = "__cornify_cupcake_button";
  const doc = document;
  const button = doc.getElementById(id);

  if (!button) {
    button = doc.createElement("div");
    button.id = id;
    button.onclick = cornify_click_cupcake_button;
    button.style.position = "fixed";
    button.style.top = "10px";
    button.style.right = "10px";
    button.style.zIndex = 2147483640;
    button.setAttribute("aria-label", "Hide unicorns and rainbows");

    const image = document.createElement("img");
    image.src = "https://www.cornify.com/assets/cornify-cupcake-button.png";
    image.alt = "Cupcake button";
    image.width = 50;
    image.height = 50;
    image.style.width = "50px !important";
    image.style.height = "50px !important";
    image.style.display = "block !important";
    image.style.cursor = "pointer !important";
    image.style.margin = "0 !important";
    image.style.padding = "0 !important";
    button.appendChild(image);

    doc.getElementsByTagName("body")[0].appendChild(button);
  }
};

// Adapted from http://www.snaptortoise.com/konami-js/
const cornami = {
  input: "",
  pattern: "38384040373937396665",
  clear: setTimeout("cornami.clear_input()", 5000),
  load: ()  => {
    window.document.onkeydown = function (event) {
      if (cornami.input == cornami.pattern) {
        cornify_add();
        clearTimeout(cornami.clear);
        return;
      } else {
        cornami.input += event.keyCode;
        if (cornami.input == cornami.pattern) {
          cornify_add();
        }
        clearTimeout(cornami.clear);
        cornami.clear = setTimeout("cornami.clear_input()", 5000);
      }
    };
  },
  clear_input: function () {
    cornami.input = "";
    clearTimeout(cornami.clear);
  },
};

cornami.load();
