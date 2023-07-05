const toggleSwitch = document.querySelector('input[type="checkbox"]');
const navBar = document.getElementById('nav');
const toggleIcon = document.getElementById('toggleIcon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const textBox = document.getElementById('textBox');


// Image mode Setter
function imageMode(color){
    image1.src = `img/dogWalking${color}.svg`;  
    image2.src = `img/fetch${color}.svg`;
    image3.src = `img/goodDog${color}.svg`;
    image4.src = `img/passing${color}.svg`;
}

// Set Dark Mode Features
function darkMode(){
    navBar.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('Dark');
}

// Set Light Mode Features
function lightMode(){
    navBar.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('Light');
}


function switchTheme(event){
    console.log(event.target.checked);

    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

// Event Listener for toggle switch
toggleSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('theme');

if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);

    if(currentTheme === 'dark'){
        toggleSwitch.checked = true;
        darkMode();
    }
}