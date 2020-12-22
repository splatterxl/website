document.querySelector('fieldset nav js-link#projects-drop-down-button').addEventListener('click', () => document.getElementById('projects-drop-down').innerHTML = '<a href=\'utilitybot\' class=\'blurple\'>UtilityBot</a>');
document.querySelector('settings js-link#theme-toggle').addEventListener('click', () =>
{
    if (localStorage.getItem('theme') == null || localStorage.getItem('theme') == 'light') localStorage.setItem('theme', 'dark'); else if (localStorage.getItem('theme') == 'dark') localStorage.setItem('theme', 'light');
    location.reload();
});