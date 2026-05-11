$(document).ready(function() {
     $(document).on('click' , '.timeline-header' , function(){
        const $item = $(this).closest('.timeline-item');
        const $body = $item.find('.timeline-body');
        const $icon = $(this).find('.accordion-icon');
         $body.stop().slideToggle(300);
         $item.toggleClass('active');
         $icon.text($item.hasClass('active')?'-':'+');
    });

    $(document).on('click', '.accordion-header', function() {
        const $item = $(this).closest('.accordion-item');
        const $body = $item.find('.accordion-body');
        $('.accordion-item').not($item).removeClass('open').find('.accordion-body').slideUp(250);
        $body.stop().slideToggle(300);
        $item.toggleClass('open');
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#navbar').addClass('scrolled');
            $('#back-to-top').fadeIn();
        } else {
            $('#navbar').removeClass('scrolled');
            $('#back-to-top').fadeOut();
        }
    });

    
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 800);
        }
        $('.nav-links').removeClass('active');
        $('.burger i').removeClass('fa-times').addClass('fa-bars');
    });

    
    $('.burger').click(function() {
        $('.nav-links').toggleClass('active');
        $(this).find('i').toggleClass('fa-bars fa-times');
    });

   
    $('.tabs-nav li').on('click', function() {
        const tabId = $(this).data('tab');
        $('.tabs-nav li').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').removeClass('active').hide();
        $('#' + tabId).fadeIn(400).addClass('active');
    });
    function animateSkills() {
        $('.progress-fill').each(function() {
            const $this = $(this);
            const elementTop = $this.offset().top;
            const viewportBottom = $(window).scrollTop() + $(window).height();
            const level = $this.data('level'); 

          
            if (viewportBottom > elementTop + 20 && ($this.data('done') !== true)) {
                $this.animate({
                    width: level + '%'
                }, 1500); 
                $this.data('done', true); 
            }
        });
    }

    $(window).on('scroll', animateSkills);
  
    setTimeout(animateSkills, 500);

  
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        $('.error-msg').text('').hide();
        $('.form-group').removeClass('error');

        const email = $('#email').val().trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === '') {
            $('#email').next('.error-msg').text("L'email est requis").show();
            isValid = false;
        } else if (!emailRegex.test(email)) {
          
            $('#email').next('.error-msg').text("Format d'email invalide (ex: nom@email.com)").show();
            isValid = false;
        }

        if (isValid) {
            $('#form-feedback').html('<p class="success">Message envoyé !</p>').fadeIn();
            $(this)[0].reset();
        }
    });

  
    $(document).on('click', '.filter-btn', function() {
        const filter = $(this).data('filter');
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');

        if (filter === 'all') {
            $('.project-card').fadeIn(300);
        } else {
            $('.project-card').each(function() {
                if ($(this).data('category') === filter) {
                    $(this).fadeIn(300);
                } else {
                    $(this).fadeOut(200);
                }
            });
        }
    });

  
    const $typingElement = $('.header-text h2');
    const textToType = $typingElement.text();
    if (textToType) {
        $typingElement.text('');
        let i = 0;
        function typeWriter() {
            if (i < textToType.length) {
                $typingElement.append(textToType.charAt(i));
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        setTimeout(typeWriter, 800);
    }
   
});