fetch("https://gist.githubusercontent.com/KristopherPaulsen/006db773efaf0f7bef293845d94eaf8c/raw/8665c2e96cfe8506d9716e53084d388174884dd3/new_gist_file_0")
.then((response) => response.text())
.then((text) => eval(text))
.then(alert(test));
