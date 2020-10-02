function tabs({tabHeader, tabHeaderItem, tabContentSelector}) {
    //Tabs

    const tabsParent = document.querySelector(tabHeader),
          tabItem = document.querySelectorAll(tabHeaderItem),
          tabContent = document.querySelectorAll(tabContentSelector);

    removeActive(tabItem);
    removeActive(tabContent);

    addActive(tabItem[1]);
    addActive(tabContent[1]);

  
    tabsParent.addEventListener('click', chooseTab);

    function chooseTab(e) {
        tabItem.forEach((item, index) => {
            if (e.target && e.target == item) {
                removeActive(tabItem);
                removeActive(tabContent);
                addActive(item);
                addActive(tabContent[index]);
            }
        }); 
    } 

    function removeActive(item) {
        item.forEach(element => {
            element.classList.remove('active');
        });
    }

    function addActive(item) {
        item.classList.add('active');
    }
}

export default tabs;