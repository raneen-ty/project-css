document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[data-page]');
    const pages = document.querySelectorAll('.page');
 
    
   
    function showPage(pageId) {
        pages.forEach(page => {
            page.classList.remove('active');
        });
        
        document.getElementById(pageId).classList.add('active');
      
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
            }
        });
        
     
  
        window.scrollTo(0, 0);
    }
    

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
        });
    });
    
    
});