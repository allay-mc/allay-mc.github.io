let theme = 'light';
let previousTheme = 'dark';

function switchTheme() {
  previousTheme = theme;
  
  if (theme === 'light') {
    theme = 'dark';
  } else {
    theme = 'light';
  }

  setTheme(theme);
}

function setTheme(theme) {
  let themeColorMetaTag = document.querySelector('meta[name="theme-color"]');
  const html = document.querySelector('html');

  setTimeout(function () {
    themeColorMetaTag.content = window.getComputedStyle(document.documentElement).backgroundColor;
  }, 1);

  html.classList.remove(previousTheme);
  html.classList.add(theme);
}

document.getElementById('download-button').addEventListener('click', function (e) {
  window.open('https://github.com/allay-mc/allay/releases', '_blank');
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
  previousTheme = theme;
  const newTheme = e.matches ? 'dark' : 'light';
  setTheme(newTheme);
});

document.getElementById('icon').addEventListener('click', function (e) {
  window.open('/', '_self');
});

document.getElementById('btnTheme').addEventListener('click', function (e) {
  switchTheme();
});

document.getElementById('btnRepo').addEventListener('click', function (e) {
  window.open('https://github.com/allay-mc/allay', '_blank');
});

setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

