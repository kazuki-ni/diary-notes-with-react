const sidebar_item = [{
    "Search": {
        "href": "",
        "icon": "bx-search",
        "links_name": "Search...",
        "tooltip": "Search"
    }}, {
    "Dashboard": {
        "href": "/",
        "icon": "bx-grid-alt",
        "links_name": "Dashboard",
        "tooltip": "Dashboard"
    }}, {
    "Calendar": {
        "href": "/calendar",
        "icon": "bx-calendar",
        "links_name": "Calendar",
        "tooltip": "Calendar"
    }}, {
    "Diary": {
        "href": "/diary",
        "icon": "bx-chat",
        "links_name": "Today's Diary",
        "tooltip": "Today's Diary"
    }}, {
    "Discover": {
        "href": "/discover",
        "icon": "bx-globe",
        "links_name": "Discover",
        "tooltip": "Discover"
    }}, {
        "Liked": {
            "href": "/liked",
            "icon": "bx-heart",
            "links_name": "Liked",
            "tooltip": "Liked"
    }}, {
    "Account": {
        "href": "/account",
        "icon": "bxs-user-account",
        "links_name": "Account",
        "tooltip": "Account"
    }}, {
    "Setting": {
        "href": "/setting",
        "icon": "bx-cog",
        "links_name": "Setting",
        "tooltip": "Setting"
    }}, {
    "Profile": {
        "href": "https://github.com/kazuki-nishimura",
        "icon": "bxl-github",
        "links_name": "",
        "tooltip": "Developer Page"
    }}
]

const menuBtnChange = () => {
    const btn_classList = document.querySelector("#btn").classList
    const sidebar_classList = document.querySelector(".sidebar").classList
    if(sidebar_classList.contains("open")){
        btn_classList.replace("bx-menu", "bx-menu-alt-right");
        //replacing the icons class
    } else {
        btn_classList.replace("bx-menu-alt-right","bx-menu");
    }
}

const toggleSidebar = () => {
    document.querySelector(".sidebar").classList.toggle("open");
    menuBtnChange();
};


export { sidebar_item, toggleSidebar}