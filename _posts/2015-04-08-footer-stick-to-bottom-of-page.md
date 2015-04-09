---
layout: post
title: Stick footer to the bottom of your page
category: tech
description: How to make sure that your footer sticks to the bottom of your page no matter how many contents you have on your page? 
---

##Stick footer to the bottom of your page

Sometimes when you build a website, you want your footer to stick to the bottom of your page. Sticking to the bottom of the page means the footer will either be at the bottom of the screen if the content doesn't go all the way to the bottom, or be at the bottom of the content if the content requires scroll bars.

####The general structure of your page:
	
	<html>
		<body>
			<header>
			</header>
			
			<div class="main-content">
			</div>
			
			<footer>
			</footer>
		</body>
	</html>

####Then you need to apply these CSS rules to make your footer stick to the bottom of your page:

	html {
		height: 100%;
	}
	
	body {
		heigth: 100%;
		padding-bottom: 50px; (the height of your footer)
	}
	
	.main-content {
		min-height: 100%;
	}
	
	footer {
		height: 50px;
	}

If you have a wrapper of your content, just apply the rules of body tag above to your wrapper element.