const theme = localStorage.getItem('theme');

if (!['dark', 'light'].includes(theme))
{
    console.error('Invalid theme, could not load styles. Setting theme to default (dark)');
    localStorage.setItem('theme', 'dark');
    document.getElementById('fatal-error').hidden = false;
    document.querySelector('#fatal-error legend').textContent = 'Theme could not be loaded';
    document.querySelector('#fatal-error p').textContent = 'Please reload your page.';
} else
{
    document.getElementsByTagName('theme');
    document.getElementsByTagName('body')[0].className = document.getElementsByTagName('body')[0].className + ` ${theme}`;
}