var test;

fetch("https://gist.githubusercontent.com/KristopherPaulsen/006db773efaf0f7bef293845d94eaf8c/raw/6b4f9f23724703c7d82b4872605df1be0cd34a01/new_gist_file_0")
.then((response) => response.text())
.then((text) => eval(text))
.then(alert(test));
