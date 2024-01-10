
// //===============================SERVICES TOGGLE 




const servicesButtons = document.querySelectorAll('.service_item');
const servicesDetailsContainer = document.querySelector('.services_right');

const getService = (category) => {
    const details = serviceData.find(item => item.category === category);

    // Assuming you want to update the servicesDetailsContainer
    servicesDetailsContainer.innerHTML = `
        <h3>${details.title}</h3>
        ${details.description.map(paragraph => "<p>" + paragraph + "</p>").join('')}
    `;
}

const removeActiveClass = () => {
    servicesButtons.forEach(button => {
        button.classList.remove('active');
    });
}

servicesButtons.forEach(item => {
    item.addEventListener('click', () => {
        removeActiveClass();
        const serviceClass = item.classList[1].toLowerCase(); // Convert to lowercase
        getService(serviceClass);
        item.classList.add('active');
    });
});


// Initialize with the first category
getService('frontend');






// //===============================MixiTup (project section )



// i stop the animation 

const containerEl = document.querySelector('.projects_container');
var mixer = mixitup(containerEl, {
    animation: {
        enable: false
    }
});

// If you want to filter immediately after initialization, you can do it here
mixer.filter('*');





// //===============================SWIPER (Testimonials section)

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        600: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

  

// //===============================NAV TOGGLE (small screen)

//===============================NAV TOGGLE (small screen)

const navMenu = document.querySelector('.nav_menu'); // Corrected typo in class name
const navOpenBtn = document.querySelector('.nav_toggle-open');
const navCloseBtn = document.querySelector('.nav_toggle-close');

const openNavHandler = () => {
    navMenu.style.display = 'flex'; // Corrected typo in property name
    navOpenBtn.style.display = 'none';
    navCloseBtn.style.display = 'inline-block';
};

const closeNavHandler = () => {
    navMenu.style.display = 'none'; // Corrected typo in property name
    navOpenBtn.style.display = 'inline-block';
    navCloseBtn.style.display = 'none';
};

navOpenBtn.addEventListener('click', openNavHandler); // Corrected typo in event name
navCloseBtn.addEventListener('click', closeNavHandler); // Corrected typo in event name


// close nav menu on click of nav link on small screens 
const navItems = navMenu.querySelectorAll('a');

if (window.innerWidth < 768) {
    navItems.forEach(item => {
        item.addEventListener('click', closeNavHandler);
    });
}



// ===============================THEME TOGGLE (light & dark mode)

// const themeBtn = document.querySelector('.nav_theme-btn');
// themeBtn.addEventListener('click', () => {
//     let bodyClass = document.body.className;
//     if(!bodyClass) {
//         bodyClass = 'dark';
//         document.body.className = bodyClass;
//         //change toggle icon 
//         themeBtn.innerHTML = "<i class='fa-regular fa-sun'></i>"
//         //save theme to loacal storage 
//         window.localStorage.setItem('theme', bodyClass);
//     } else {
//         bodyClass = ' ';
//         document.body.className = bodyClass;
//         //change toggle icon 
//         themeBtn.innerHTML = "<i class='far fa-moon'></i>"
//          //save theme to loacal storage 
//           window.localStorage.setItem('theme', bodyClass);

//     }
// })




// window.addEventListener('load', () => {
//     const savedTheme = window.localStorage.getItem('theme');
    
//     // Check if a theme is saved in local storage
//     if (savedTheme) {
//         document.body.className = savedTheme;
//     }
// });




// Function to set the theme
const setTheme = (theme) => {
    document.body.className = theme;
    const icon = theme === 'dark' ? "<i class='fa-regular fa-sun'></i>" : "<i class='far fa-moon'></i>";
    themeBtn.innerHTML = icon;
    window.localStorage.setItem('theme', theme);
};

// Load theme on window load
window.addEventListener('load', () => {
    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    }
});

// Toggle theme on button click
const themeBtn = document.querySelector('.nav_theme-btn');
themeBtn.addEventListener('click', () => {
    const currentTheme = document.body.className;
    const newTheme = currentTheme === 'dark' ? '' : 'dark';
    setTheme(newTheme);
});

