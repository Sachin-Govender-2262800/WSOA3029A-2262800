//DOM

const homeB = document.querySelector('#home')
const aboutB = document.querySelector('#about')
const contactB = document.querySelector('#contact')
const blogB = document.querySelector('#blog')


function navPages(link)
{
    window.location = link;
}

homeB.addEventListener('click',function(){
    navPages('/WSOA3029A-2262800/index.html')
});

aboutB.addEventListener('click',function(){
    navPages('/WSOA3029A-2262800/about/about.html')
});

contactB.addEventListener('click',function(){
    navPages('/WSOA3029A-2262800/contact/contact.html')
});

blogB.addEventListener('click',function(){
    navPages('/WSOA3029A-2262800/blogs/blog.html')
});