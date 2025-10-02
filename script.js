document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page');
    
 
    function showPage(pageId) {
        pages.forEach(page => {
            page.classList.remove('active');
        });
        
        document.getElementById(pageId).classList.add('active');
      
     
        document.querySelectorAll('a[data-page]').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
            }
        });
        
        window.scrollTo(0, 0);
    }

  
    function setupNavigation() {
        document.querySelectorAll('a[data-page]').forEach(link => {
       
            link.replaceWith(link.cloneNode(true));
        });
   
        document.querySelectorAll('a[data-page]').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const pageId = this.getAttribute('data-page');
                showPage(pageId);
            });
        });
    }

   
    function updateTextDirection(lang) {
        if (lang === 'ar') {
            document.documentElement.dir = 'rtl';
            document.documentElement.lang = 'ar';
            document.body.classList.add('rtl');
        } else {
            document.documentElement.dir = 'ltr';
            document.documentElement.lang = 'en';
            document.body.classList.remove('rtl');
        }
    }


    function translatePage(lang) {
        updateTextDirection(lang);
        
   
        const elementsToTranslate = [
          
            { selector: '#nav-menu a[data-page="home"]', en: "Home", ar: "الرئيسية" },
            { selector: '#nav-menu a[data-page="portfolio"]', en: "Projects", ar: "المشاريع" },
            { selector: '#nav-menu a[data-page="services"]', en: "Services", ar: "الخدمات" },
            { selector: '#nav-menu a[data-page="contact"]', en: "Call me", ar: "اتصل بي" },
            
           
            { selector: '.footer-links a[data-page="home"]', en: "Home", ar: "الرئيسية" },
            { selector: '.footer-links a[data-page="portfolio"]', en: "Projects", ar: "المشاريع" },
            { selector: '.footer-links a[data-page="services"]', en: "Services", ar: "الخدمات" },
            { selector: '.footer-links a[data-page="contact"]', en: "Call me", ar: "اتصل بي" },
            
       
            { selector: '.hero h1', en: "Hello, I am Raneen Shabab", ar: "مرحباً، أنا رنين شباب" },
            { selector: '.hero p', en: "A professional full-stack web developer, I serve clients who need modern, professional solutions.", ar: "مطورة ويب محترفة شاملة، أخدم العملاء الذين يحتاجون إلى حلول حديثة ومهنية." },
            { selector: '.hero-buttons .btn-outline', en: "See my work", ar: "شاهد أعمالي" },
            { selector: '.hero-buttons .btn:not(.btn-outline)', en: "Let's talk", ar: "لنتحدث" },
            
       
            { selector: '.about .section-title h2', en: "About me", ar: "معلومات عني" },
            { selector: '.about .section-subtitle', en: "A full-stack web developer with a passion for creating exceptional digital experiences.", ar: "مطورة ويب شاملة شغوفة بخلق تجارب رقمية استثنائية." },
            { selector: '.about-text h3', en: "I am a professional full-stack web developer.", ar: "أنا مطورة ويب شاملة محترفة." },
            { selector: '.about-text p:nth-of-type(1)', en: "I design and develop services for clients who need modern, professional solutions. I strive to build immersive and beautiful web applications through carefully crafted code and user-experience-driven design.", ar: "أصمم وأطور خدمات للعملاء الذين يحتاجون إلى حلول حديثة ومهنية. أسعى لبناء تطبيقات ويب غامرة وجميلة من خلال كود مصمم بعناية وتصميم مدفوع بتجربة المستخدم." },
            { selector: '.about-text p:nth-of-type(2)', en: "I combine creativity and technical expertise to deliver visually appealing and highly functional solutions for users. I focus on detail and always strive for excellence in every project.", ar: "أجمع بين الإبداع والخبرة التقنية لتقديم حلول جذابة بصرياً وعملية للغاية للمستخدمين. أركز على التفاصيل وأسعى دائماً للتميز في كل مشروع." },
            { selector: '.about-text .btn', en: "Explore my services", ar: "استكشف خدماتي" },
         
            { selector: '.process .section-title h2', en: "Work process", ar: "عملية العمل" },
            { selector: '.process .section-subtitle', en: "A systematic approach to ensure the success of every project from start to finish.", ar: "نهج منهجي لضمان نجاح كل مشروع من البداية إلى النهاية." },
            { selector: '.process-steps .step:nth-child(1) h3', en: "To plan and explore", ar: "التخطيط والاستكشاف" },
            { selector: '.process-steps .step:nth-child(1) p', en: "We start by understanding your needs and goals to develop a comprehensive strategy for your project.", ar: "نبدأ بفهم احتياجاتك وأهدافك لتطوير استراتيجية شاملة لمشروعك." },
            { selector: '.process-steps .step:nth-child(2) h3', en: "For design and creativity", ar: "التصميم والإبداع" },
            { selector: '.process-steps .step:nth-child(2) p', en: "We design attractive, user-friendly interfaces that meet your audience's needs.", ar: "نصمم واجهات جذابة وسهلة الاستخدام تلبي احتياجات جمهورك." },
            { selector: '.process-steps .step:nth-child(3) h3', en: "Development and construction", ar: "التطوير والبناء" },
            { selector: '.process-steps .step:nth-child(3) p', en: "We develop robust and scalable technical solutions using the latest technologies.", ar: "نطور حلولاً تقنية قوية وقابلة للتطوير باستخدام أحدث التقنيات." },
            { selector: '.process-steps .step:nth-child(4) h3', en: "Launch and support", ar: "الإطلاق والدعم" },
            { selector: '.process-steps .step:nth-child(4) p', en: "We launch your project and make sure everything runs smoothly and efficiently.", ar: "نطلق مشروعك ونتأكد من أن كل شيء يعمل بسلاسة وكفاءة." },
            
      
            { selector: '#portfolio .section-title h2', en: "My Projects", ar: "مشاريعي" },
            { selector: '#portfolio .section-subtitle', en: "A selection of my latest web design and development work.", ar: "مجموعة مختارة من أحدث أعمالي في تصميم وتطوير الويب." },
            { selector: '.portfolio-item:nth-child(1) h3', en: "Rozeskoch", ar: "Rozeskoch" },
            { selector: '.portfolio-item:nth-child(1) p', en: "E-commerce website with a modern design and user-friendly interface.", ar: "موقع تجارة إلكترونية بتصميم حديث وواجهة سهلة الاستخدام." },
            { selector: '.portfolio-item:nth-child(2) h3', en: "Aristopolis", ar: "Aristopolis" },
            { selector: '.portfolio-item:nth-child(2) p', en: "Advanced real estate platform with booking and property management system.", ar: "منصة عقارات متطورة مع نظام حجز وإدارة للممتلكات." },
            { selector: '.portfolio-item:nth-child(3) h3', en: "Dewign", ar: "Dewign" },
            { selector: '.portfolio-item:nth-child(3) p', en: "Design studio website with an interactive and unique portfolio showcase.", ar: "موقع استوديو تصميم بعرض بورتفوليو تفاعلي وفريد." },
            { selector: '.portfolio-item:nth-child(4) h3', en: "Leverch", ar: "Leverch" },
            { selector: '.portfolio-item:nth-child(4) p', en: "Social networking web app with advanced features and modern design.", ar: "تطبيق ويب للتواصل الاجتماعي بميزات متقدمة وتصميم حديث." },
            { selector: '.portfolio-link', en: "View Project", ar: "عرض المشروع" },
            
         
            { selector: '#services .section-title h2', en: "My services", ar: "خدماتي" },
            { selector: '#services .section-subtitle', en: "Integrated solutions to transform your ideas into stunning digital reality.", ar: "حلول متكاملة لتحويل أفكارك إلى واقع رقمي مذهل." },
            { selector: '.service:nth-child(1) h3', en: "User experience design", ar: "تصميم تجربة المستخدم" },
            { selector: '.service:nth-child(1) p', en: "I focus on the first emotions users experience when using my products and viewing my designs. I make sure everything is intuitive and easy to use.", ar: "أركز على المشاعر الأولى التي يمر بها المستخدمون عند استخدام منتجاتي وعرض تصاميمي. أتأكد من أن كل شيء بديهي وسهل الاستخدام." },
            { selector: '.service:nth-child(2) h3', en: "User interface design", ar: "تصميم واجهة المستخدم" },
            { selector: '.service:nth-child(2) p', en: "Use the latest web tools and images to make your site's homepage attractive and easy to navigate.", ar: "استخدام أحدث أدوات الويب والصور لجعل الصفحة الرئيسية لموقعك جذابة وسهلة التنقل." },
            { selector: '.service:nth-child(3) h3', en: "Web development", ar: "تطوير الويب" },
            { selector: '.service:nth-child(3) p', en: "I develop coding concepts in multiple languages and ensure everything works correctly and efficiently.", ar: "أطور مفاهيم الترميز بلغات متعددة وأتأكد من أن كل شيء يعمل بشكل صحيح وفعال." },
            
       
            { selector: '#contact .section-title h2', en: "Call me", ar: "اتصل بي" },
            { selector: '#contact .section-subtitle', en: "Let's talk about your next project and make your idea a reality.", ar: "لنتحدث عن مشروعك القادم ونحول فكرتك إلى واقع." },
            { selector: '.contact-info h3', en: "Talk about your project", ar: "تحدث عن مشروعك" },
            { selector: '.contact-info p', en: "I'm available to discuss business models or partnership opportunities. Let's discuss your project and get started!", ar: "أنا متاحة لمناقشة نماذج الأعمال أو فرص الشراكة. دعنا نناقش مشروعك ونبدأ!" },
            
        
            { selector: 'label[for="name"]', en: "Full name", ar: "الاسم الكامل" },
            { selector: '#name', en: "Enter your full name", ar: "أدخل اسمك الكامل", type: "placeholder" },
            { selector: 'label[for="email"]', en: "Email", ar: "البريد الإلكتروني" },
            { selector: '#email', en: "Enter your email", ar: "أدخل بريدك الإلكتروني", type: "placeholder" },
            { selector: 'label[for="service"]', en: "what are you looking for?", ar: "ما الذي تبحث عنه؟" },
            { selector: '#service option[value=""]', en: "Choose the service", ar: "اختر الخدمة" },
            { selector: '#service option[value="website"]', en: "Website", ar: "موقع ويب" },
            { selector: '#service option[value="partnership"]', en: "partnership", ar: "شراكة" },
            { selector: '#service option[value="other"]', en: "Another inquiry", ar: "استفسار آخر" },
            { selector: 'label[for="message"]', en: "Message", ar: "الرسالة" },
            { selector: '#message', en: "Tell me more about your project...", ar: "أخبرني المزيد عن مشروعك...", type: "placeholder" },
            { selector: '#contactForm button[type="submit"]', en: "Send message", ar: "إرسال الرسالة" },
            
       
            { selector: '.copyright', en: "All rights reserved | Raneen Shabab", ar: "جميع الحقوق محفوظة | رنين شباب" }
        ];

  
        elementsToTranslate.forEach(item => {
            const elements = document.querySelectorAll(item.selector);
            elements.forEach(element => {
                if (item[lang]) {
                    if (item.type === "placeholder") {
                        element.placeholder = item[lang];
                    } else {
                        element.textContent = item[lang];
                    }
                }
            });
        });

     
        setTimeout(setupNavigation, 50);
    }

 
    setupNavigation();
    

    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    document.getElementById('languageSwitcher').value = savedLang;
    translatePage(savedLang);



    document.getElementById('languageSwitcher').addEventListener('change', function() {
        const selectedLang = this.value;
        localStorage.setItem('selectedLanguage', selectedLang);
        translatePage(selectedLang);
    });

});
});
