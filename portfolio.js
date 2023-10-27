document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.keyword');
    const searchInput = document.getElementById('searchInput');

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', filterItems);
    });

    searchInput.addEventListener('input', filterItems);

    function filterItems() {
        const selectedKeywords = Array.from(checkboxes)
            .filter(c => c.checked)
            .map(c => c.value.toLowerCase());

        const searchValue = searchInput.value.toLowerCase();

        const items = document.querySelectorAll('.portfolio-item');

        items.forEach(function(item) {
            const keywords = item.querySelector('p').textContent.toLowerCase();

            const keywordMatch = selectedKeywords.length === 0 ||
                selectedKeywords.every(keyword => keywords.includes(keyword));

            const searchMatch = searchValue === '' ||
                keywords.includes(searchValue);

            if (keywordMatch && searchMatch) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
});
