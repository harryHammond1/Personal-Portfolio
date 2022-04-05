const light = document.getElementById('light');
const dark = document.getElementById('dark');



light.onclick = function lightMode() {
    light.style.display = 'none';
    dark.style.display = 'block';
    document.body.style.backgroundColor = 'grey'
    document.body.style.color = 'black'
    }

    dark.onclick = function lightMode() {
        light.style.display = 'block';
        dark.style.display = 'none';
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
        }

    