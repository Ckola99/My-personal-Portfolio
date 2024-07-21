# My Personal Portfolio

This repository contains the code to my Personal Portfolio.

## Table of contents

- [Overview](#overview)
     - [Links](#links)
- [My process](#my-process)
     - [Built with](#built-with)
     - [What I learned](#what-i-learned)
     - [Continued development](#continued-development)
     - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Links

- Live Site URL: [live site URL](/)

## My process

### Built with

- Vite
- React
- Tailwind CSS
- Mobile-first workflow

### What I learned

I learned how to use Tailwind and got a bit comfortable with it's utility first capabilities. I also used background-clip property to create a good looking design of my title:

```HTML
						<motion.span
							variants={container(
								0.5
							)}
							initial="hidden"
							animate="visible"
							className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
						>
							Frontend Developer
						</motion.span>
```

I also learned how to use Framer for my animations and used variants to set different durations and different delays to create cool effects on my webpage like below:

```JS
	const container = (delay) => ({
	hidden: { x: -100, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
		transition: { duration: 0.5, delay: delay },
	},
});

const iconVariants = (duration) => ({
	initial: { y: -10 },
	animate: {
		y: [10, -10],
		transition: {
			duration: duration,
			ease: "linear",
			repeat: Infinity,
			repeatType: "reverse",
		},
	},
});
```

```HTML
						<motion.span
							variants={container(
								0.5
							)}
							initial="hidden"
							animate="visible"
							className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
						>

						<motion.div
					variants={iconVariants(5)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-4"
				>
					<RiTailwindCssFill className="text-7xl text-cyan-500" />
				</motion.div>
```

I learned a lot about tailwind and will be hoping to learn a lot more as the time passes.

### Continued development

I personally want to use the skills and tricks I learned making this project to improve my tailwind css writing. I am to make as many uses interfaces using tailwind as possible as I learned that making websites using it is really quick and making them responsive is quite easy.

### Useful resources

- [Youtube](https://youtube.com) - for tuts and small quirks.
- [MDN](https://developer.mozilla.org/en-US/) - this website is what I used to make sure I used the correct selectors and available properties.
- [ChatGPT](https://chatgpt.com) - I used chatgpt for small queries about my code where I couldn't necessarily see issues.
- [React Icons](https://react-icons.github.io/react-icons/) - Used for icons.
- [bg.ibelick.com](https://bg.ibelick.com/) - Ready-to-use, simply copy and paste into your next project. All snippets crafted with Tailwind CSS and Vanilla CSS for easy integration.
- [Framer](https://www.framer.com/motion/examples/) - Framer Motion is a simple yet powerful motion library for React.

## Author

- Frontend Mentor - [@Ckola99](https://www.frontendmentor.io/profile/Ckola99)
