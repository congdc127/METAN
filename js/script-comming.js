var menu = new MmenuLight(
    document.querySelector('#menu'),
    '(max-width: 768px)'
);

var navigator = menu.navigation({
    selectedClass: 'Selected',
    slidingSubmenus: true,
    theme: 'dark',
    title: 'MENU',
});

var drawer = menu.offcanvas({
    position: 'left',
});

//	Open the menu.
document.querySelector('a[href="#menu"]').addEventListener('click', (evnt) => {
    evnt.preventDefault();
    drawer.open();
});
