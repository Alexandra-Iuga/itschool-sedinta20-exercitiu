let addDropdownClass = document.querySelector('.menu-icon-container ul');
addDropdownClass.className = 'show-dropdown';

let dropdownButton = document.querySelector('.menu-icon');

function handleDropdownButtonClick() {
    let dropdownList = document.querySelector('.show-dropdown');
    let dropdownListStyle = window.getComputedStyle(dropdownList);
    let dropdownVisibility = dropdownListStyle.getPropertyValue('visibility');
    // console.log(dropdownVisibility);

    if (dropdownVisibility === 'hidden') {
        dropdownList.style.visibility = "visible";
    } else {
        dropdownList.style.visibility = "hidden";
    }
}

dropdownButton.addEventListener('click', handleDropdownButtonClick);
