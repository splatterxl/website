---
title: Astro
publishDate: 30 Jul 2023
description: The fourth iteration of my site is here, and it's better than ever.   
hero:
    src: /assets/blog/business-3d-dog-astronaut.png
    alt: Illustration of a dog in an astronaut suit
    caption: Illustration by [Icons8](https://icons8.com/illustrations/author/zD2oqC8lLBBA) from [Ouch!](https://icons8.com/illustrations)
---

Every few months, I redesign my blog.[^1] It's becoming a bit of a tradition now and I do it each time I feel the site 
is becoming outdated or boring, which seems to be pretty frequent.

[^1]: The previous design is still live [on Vercel](https://blog-vszk5t6l3-splatterxl.vercel.app). To
see my post detailing that iteration, [click here](/blog/simplicity).

Sometimes, I see a site that I really, _really_ love and I [~~steal~~] get inspiration from it to redesign my own (like the last time),
or I get reminded by some really [jawdropping](https://activetheory.net) websites that my work is futile and insignificant compared
to the really talented designers out there :)

So, naturally, I decided to try to fix that.

# Background

Last time, I changed it to use [TailwindCSS](https://tailwindcss.com) for styling, but the base framework was still Next.js, which I was pretty familiar with. This time I wanted a challenge.

So, I perused my To-Do list of technologies to learn, and I found [Astro](https://astro.build). Astro has been getting a lot of hype
recently so I decided to give it a try. I cloned [Maxi Ferreira](https://www.twitter.com/Charca)'s awesome blog template and started configuring.

# Migrating from Next.js

Coming from Next.js, a framework that has had 14 major versions by now and is widely accepted to be the standard for React

## 1. Error handling

First of all, the Astro dev server doesn't have much error handling. A simple dependency issue could knock out the Astro server
and leave me wondering why on earth it wasn't hot reloading. 

It makes sense that because Astro is still quite new it might not be as battle ready, but still... I love my hot module reload.

## 2. Astro config reloading

Something that baffled me at first is how my `.env` files reloaded the server, but modifying arguably a more important 
file (`astro.config.mjs`) didn't. This isn't very important in the grand scheme of things, but it's still something
I miss from Next.js.

## 3. Svelte & theme toggling

The template from Maxi Ferreira includes a [Svelte](https://svelte.dev) file (another framework that's on my To-Do list)
to handle interactivity. More specifically, the theme toggle button. 

Now, I tried to convert it to React, as any developer would when met with an unknown language, but without my fancy
component libraries I decided to remove the theme toggle altogether. I converted the site from using a `theme-{x}`
class to simple CSS media queries, and left it at that.

In the previous version of my site, the main heading of the homepage acted as a theme toggle until I converted it to
a confetti machine. 🎉

# Homepage

![Screenshot of the initial homepage](https://github.com/Charca/astro-blog-template/blob/main/screenshot.png?raw=true)

The initial homepage from the template is pretty bland. It's basically just a link to the GitHub repo. So, I decided
to completely rewrite it, and give writing raw CSS again a try.

I decided to add a funky criss-cross pattern so I experimented with the `skewY` CSS effect and it turned out alright:

![Screenshot of the new homepage](/assets/blog/new-homepage.png)

# Conclusion

I redesigned my website in Astro, and I'm pretty happy with how it turned out. I think it's gonna be the next big thing, 
but as always with JavaScript framework there's no guarantees! :P
