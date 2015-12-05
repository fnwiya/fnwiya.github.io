var setupOption = {
    template: '<div class="menu-wrap"><div class="menu"><%= label %></div></div>',
    anchorSetup: [
        {
            backgroundColor: "#E74C3C",
            label: "Top"
        },
        {
            backgroundColor: "#E67E22",
            label: "About"
        },
        {
            backgroundColor: "#F1C40F",
            label: "Favorite"
        },
        {
            backgroundColor: "#2ECC71",
            label: "Works"
        },
        {
            backgroundColor: "#1ABC9C",
            label: "Contact"
        }]
};
var scrollMenu = ScrollMenu(setupOption);
