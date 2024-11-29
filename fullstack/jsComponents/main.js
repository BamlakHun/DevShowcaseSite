document.querySelector('body').addEventListener('click', function
(event) {
    
     let aTag = event.target.closest('a');

     if (!aTag) { return; }

     let href = aTag.getAttribute('href');

     if (href.indexOf('http') === 0) {
        aTag.setAttribute('target', '_blank');
        return;
     }

     event.preventDefault();

     history.pushState(null, null,href);

     router();
     

    });

    function makeMenuChoiceActive(route){ 
        let aTagsInNav = document.querySelectorAll('nav a');
        
        for (let aTag of aTagsInNav) {
            aTag.classList.remove('active');

            let href = aTag.getAttribute('href');

            if (href === route) {

                aTag.classList.add('active');
            } 
        }

    }

    async function router () {
        //change active link in the menu
        let route = location.pathname;
        makeMenuChoiceActive(route);
     
        //transform the route to be a path to html componenets
        route = route === '/' ? '/home' : route;
        route = '/components' + route + '.html';
        //load the content from the html components
        let content = await (await fetch(route)).text();
        // replace the content of the main element 
        document.querySelector('main').innerHTML = content;

        route === '/components/products.html' && loadJsonandDisplay();
        
    }

    

    window.addEventListener('popstate', router);

    router();


