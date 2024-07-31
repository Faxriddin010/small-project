window.addEventListener('DOMContentLoaded', () => {
    const tabsParent = document.querySelector('.tabsheader'),
        tabs = tabsParent.querySelectorAll('.tab'),
        tabContent = document.querySelectorAll('.tabcontent');

    function hideTabsContent() {        
        tabContent.forEach((item) => {            
            item.classList.add('hide')
            item.classList.remove('show', 'fade')
        })

        tabs.forEach((item) => {
            item.classList.remove('active');
        })


    }

    function showTabsContent(i = 0) {
        tabContent[i].classList.add('show', 'fade');
        tabContent[i].classList.remove('hide');
        tabs[i].classList.add('active');
    }

    hideTabsContent();
    showTabsContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target
        if (target && target.classList.contains('tab')) {
            tabs.forEach((item, idx) => {
                if (target == item) {
                    hideTabsContent(); 
                    showTabsContent(idx); 
                }
            })
        }
    })
})