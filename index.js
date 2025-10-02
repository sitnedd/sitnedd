document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const starsToggle = document.getElementById('starsToggle');
    const body = document.body;
    const container = document.querySelector('.container');
    const ctaButton2 = document.querySelector('.cta-button2');
    const ctaButton3 = document.querySelector('.cta-button3');
    const ctaButton4 = document.querySelector('.cta-button4');
    const footer2 = document.querySelector('.footer2');
    const hr = document.querySelector('.hr');
    const background = document.querySelector('.background');
    const themes = ['dark-theme', '', 'white-red-theme', 'purple-theme'];
    let currentThemeIndex = 0;
    let starsEnabled = true;

    function setTheme(theme) {
        body.className = theme;
        container.className = `container ${theme}`;
        ctaButton2.className = `cta-button2 ${theme}`;
        ctaButton3.className = `cta-button3 ${theme}`;
        ctaButton4.className = `cta-button4 ${theme}`;
        footer2.className = `footer2 ${theme}`;
        hr.className = `hr ${theme}`;
        localStorage.setItem('theme', theme);
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
        currentThemeIndex = themes.indexOf(savedTheme);
    }

    themeToggle.addEventListener('click', () => {
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        setTheme(themes[currentThemeIndex]);
    });

    function isDesktop() {
        return window.innerWidth >= 1024;
    }

    function createStars() {
        const starCount = isDesktop() ? 220 : 120;

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.transform = `translate(-50%, -50%) scale(${Math.random() * 2 + 0.5})`;
            
            background.appendChild(star);

            const animationDuration = Math.random() * 1 + 2;
            star.style.animationDuration = `${animationDuration}s`;
        }
    }

    function enableStars() {
        background.style.display = 'block';
        if (background.children.length === 0) {
            createStars();
        }
    }

    function disableStars() {
        background.style.display = 'none';
    }

    starsToggle.addEventListener('click', () => {
        starsEnabled = !starsEnabled;
        if (starsEnabled) {
            enableStars();
        } else {
            disableStars();
        }
    });

    enableStars();

    window.addEventListener('resize', () => {
        if (starsEnabled) {
            background.innerHTML = '';
            createStars(); 
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const discordText = document.getElementById('discord-text');
    
    if (discordText) {
        discordText.style.cursor = 'pointer';
        
        discordText.addEventListener('click', function(e) {
            const tempTextArea = document.createElement('textarea');
            tempTextArea.value = 'sitnedd';
            document.body.appendChild(tempTextArea);
            
            tempTextArea.select();
            tempTextArea.setSelectionRange(0, 99999);
            
            document.execCommand('copy');
            
            document.body.removeChild(tempTextArea);
            
            showCopyNotification(e.clientX, e.clientY);
        });
    }
    
    function showCopyNotification(x, y) {
        const existingNotification = document.querySelector('.copy-notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        const notification = document.createElement('div');
        notification.className = 'copy-notification';
        notification.textContent = 'Текст скопирован!';
        
        notification.style.left = (x + 0) + 'px';
        notification.style.top = (y - 51) + 'px';
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 1500);
    }
});
