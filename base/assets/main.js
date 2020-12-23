document.querySelector('fieldset nav js-link#projects-drop-down-button').addEventListener('click', () =>
{
    document.getElementById('projects-drop-down').innerHTML =
        !(document.getElementById('projects-drop-down').innerHTML == `<a href=\"http://github.com/Splatterxl/rcorp_files\" class=\"blurple\">see my latest failure</a>\n|\n<a href=\"http://splatterxl.github.io\" class=\"blurple\">this thing</a>\n|\n<a href=\"utilitybot\" class=\"blurple\">my discord bot</a>`)
            ? `<a href="http://github.com/Splatterxl/rcorp_files"\nclass='blurple'>see my latest failure</a>\n|\n<a href="http://splatterxl.github.io"\nclass='blurple'>this thing</a>\n|\n<a href="utilitybot"\nclass='blurple'>my discord bot</a>`
            : ' ';
});
document.querySelector('settings js-link#theme-toggle').addEventListener('click', () =>
{
    if (localStorage.getItem('theme') == null || localStorage.getItem('theme') == 'light') localStorage.setItem('theme', 'dark'); else if (localStorage.getItem('theme') == 'dark') localStorage.setItem('theme', 'light');
    location.reload();
});

document.getElementById('creating').textContent = (Math.round(Math.random()) === 1) ? 'D' : (Math.round(Math.random()) === 1) ? 'W' : 'S';

// Hi yuto > Hi everyone
// Well, he's currently away < alright
// I remember C# code format
/*
if (...)
{
    code
}
*/
const elem = document.getElementById('creating');
const strs = ['Discord Bots', 'Websites', 'stuff'];
const base = (elem.textContent == 'D') ? 'Discord Bots' : (elem.textContent == 'W') ? 'Websites' : 'stuff';
elem.textContent = '';




const anim = () =>
{
    if (strs.includes(elem.textContent.endsWith('_') ? elem.textContent.slice(0, elem.textContent.length - 1) : elem.textContent))
    {
        if (elem.textContent.endsWith('_'))
            return elem.textContent = elem.textContent.slice(0, elem.textContent.length - 1);
        else
            return elem.textContent += '_';
    }
    elem.textContent += base[elem.textContent.length] ? base[elem.textContent.length] : '';
};

setInterval(() =>
{
    anim();
}, parseInt(351..toString()));
