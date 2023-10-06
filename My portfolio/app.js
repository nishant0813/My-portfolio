let tablinks=document.getElementsByClassName("tab-links");
let tabContents=document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
};
// ----smallscreen----

 let sideMenu=document.getElementById("side-menu");
 function openMenu(){
    sideMenu.style.right="0";
 }
 function closeMenu(){
    sideMenu.style.right="-200px";
 }