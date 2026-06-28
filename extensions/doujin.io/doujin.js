document.title = document.title.replace('J18 Free-Reader', 'doujin.io')
var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'shortcut icon';
    document.head.appendChild(link);
}
link.href = 'https://benheroblaw.github.io/extensions/doujin.io/icon.png';