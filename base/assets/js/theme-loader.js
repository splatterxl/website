const theme = localStorage.getItem('theme');

if (!['dark', 'light'].includes(theme))
{
    console.error('Invalid theme, could not load styles. Setting theme to default (dark)');
    localStorage.setItem('theme', 'dark');
    location.reload();
} else
{
    document.getElementsByTagName('theme');
    document.getElementsByTagName('body')[0].className = document.getElementsByTagName('body')[0].className + ` ${theme}`;
}
// No, i can switch to wsl if you want
// Ok then, make a cpp app that will just execute the git add shit so you can do it easier
// I don't know C++ or C, I know batchfile though
// ok if you want
// I'll make it in here if you don't mind, do you have *.exe in exclude?
// now i do :p