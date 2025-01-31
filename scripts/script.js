document.querySelectorAll('.book__icon').forEach(function (icon) { // Получаем все элементы с классом 'book__icon' и применяем функцию для каждого из них
    icon.addEventListener('click', function () { // Добавляем обработчик события 'click' для каждого элемента
        const currentFill = this.getAttribute('fill')

        if (currentFill === 'none') {
            this.setAttribute('fill', '#FF8138')
        } else {
            this.setAttribute('fill', 'none')
        }
    })
})