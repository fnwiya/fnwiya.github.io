var setupOption = {
    template: '<div class="menu-wrap"><div class="menu"><%= label %></div></div>',
    anchorSetup: [
        {
            backgroundColor: "#dc767d",
            label: "Top"
        },
        {
            backgroundColor: "#36d278",
            label: "About"
        },
        {
            backgroundColor: "#22cfc6",
            label: "Favorite"
        },
        {
            backgroundColor: "#8794a1",
            label: "Works"
        },
        {
            backgroundColor: "#1ccdaa",
            label: "Contact"
        }]
};
var scrollMenu = ScrollMenu(setupOption);
