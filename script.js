const accordions = document.querySelectorAll('.accordion-header');

accordions.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        // Close other accordions
        document.querySelectorAll('.accordion-content').forEach(item => {
            if (item !== content) {
                item.classList.remove('show');
            }
        });

        // Toggle the clicked accordion
        content.classList.toggle('show');
    });
});
 