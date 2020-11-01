const HomeURL = "http://www.hufs.ac.kr/";
const EclassURL = "https://eclass.hufs.ac.kr/ilos/main/main_form.acl";
const PortalURL = "https://wis.hufs.ac.kr/src08/jsp/index.jsp";
const LibraryURL = "https://lib.hufs.ac.kr";
const YoutubeURL = "https://www.youtube.com/";


function openURLInNewTab(url) {
    whale.tabs.create({ url });
}

document.getElementById('clickHome').addEventListener('click', () => { openURLInNewTab(HomeURL) }, false);
document.getElementById('clickEclass').addEventListener('click', () => { openURLInNewTab(EclassURL) }, false);
document.getElementById('clickPortal').addEventListener('click', () => { openURLInNewTab(PortalURL) }, false);
document.getElementById('clickLibrary').addEventListener('click', () => { openURLInNewTab(LibraryURL) }, false);
document.getElementById('clickYoutube').addEventListener('click', () => { openURLInNewTab(YoutubeURL) }, false);








