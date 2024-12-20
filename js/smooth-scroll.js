document.addEventListener('DOMContentLoaded', function() {
    // Получаем все ссылки навигации
    const navLinks = document.querySelectorAll('.nav-links a');

    // Добавляем обработчик для каждой ссылки
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Предотвращаем стандартное поведение ссылки

            // Получаем целевой элемент
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Плавно прокручиваем к элементу
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Добавляем активный класс для текущей ссылки
                navLinks.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Подсвечиваем активный пункт меню при прокрутке
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});
