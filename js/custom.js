// instancia jquery e evita conflitos
// jQuery( function($){
    $(document).ready(function(){

        $('.owl-carousel').owlCarousel();
    
        let titulos = $('h4') // tag
       
        let itens = $('.featured-item') // class
        
        let destaques = $('#featured') // id
    
        console.log(titulos.first());
    
        // Configuração de produtos
    
        $('.featured-item a').addClass('btn btn-dark stretch-link');
    
        $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
        // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
        // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
        // $('.featured-item:first h4').addClass('active')
        // $('.featured-item:first h4').removeClass('active')
        // $('.featured-item:first h4').toggleClass('active')
        // $('.featured-item:first h4').hide()
        // $('.featured-item:first h4').show()
        // $('.featured-item:first h4').fadeIn(2000)
        // $('.featured-item:first h4').fadeOut()
        //  $('.featured-item:first h4').css('color', '#f00')
         
         $('.featured-item h4').dblclick( function(){
    
            $(this).css({
                'color': '#f00',
                'background': '#ff0',
                'font-weight': '100',
            });
    
         });
    
         /*
          * Manipulação de eventos
          */
         $('.featured-item a').on('blur', function(event){
    
            event.preventDefault();
    
            alert('Produto esgotado');
    
         })

         //Callback
         //Entendendo ações que começam ao termino de outra
         $('.featured-item:nth(1)').hide(500, function(){
                //Este é o Callback
                console.log( $(this).find('h4').text() + ' Esgotado')
         })
         .show(500, function(){
            console.log( $(this).find('h4').text() + ' Em estoque')
         })


         /*
            *Animações
         */

            const duracao = 1000 // Equivalente a 1 segundo

            $('.featured-item:nth(0)')
            .hide(duracao)
            .show(duracao)
            .fadeOut(duracao)
            .fadeIn(duracao)
            .toggle(duracao)
            .toggle(duracao)

        $('#form-submit').on('click', function(e){
            
            e.preventDefault()

            if($('#email').val() != ''){
 
                $('#email').animate({
                    
                    opacity: "toggle",
                    top: "-50"

                }, duracao, function(){

                   console.log($(this).val())

                })

            }

        });    


        /*
           * Ouvinte de eventos .nav-modal-open 
        */

        $('.nav-modal-open').on('click', function(e){
            
            e.preventDefault();

            let elem = $(this).attr('rel')

            $('.modal-body').html($('#'+elem).html())

            $('h5.modal-title').html($(this).text())

            let myModal = new bootstrap.Modal($('#modalId'))
            
            myModal.show()

        })

        function validate(elem) {

            if(elem.val() == '') {

                console.log(' campo de '+ elem.attr('name') + ' é obrigatório')

                elem.parent().find('.text-muted').show

                elem.addClass('invalid')

            }else{
                elem.parent().find('.text-muted').hide
                elem.removeClass('invalid')
            }

        }

        /*
            * TODO: icrementar a validação
            * checar se o nome é valido (mais de 2 caracteres)
            * checar se o email é valido com ao menos um @ e "."         
        */


        $('body').on('.submit', '.modal-body form', function(){

            e.preventDefault()

            const inputName = $('#nome').val()
            const inputEmail = $('#email').val()

            validate(inputName)
            validate(inputEmail)

            if(inputEmail.hasClass('invalid') || inputName.hasClass('invalid')) {
                console.log('verificar campos obrigatórios')
                return false
                
            }else{
                return true
            }

            $(this).submit()

        }) 


        $('body').on('blur', '#nome', function(e){
            validate($(this)) 
        })


        $('body').on('blur', '#email', function(){
            validate($(this))
        })

        $('body').on('blur', '#date', function() {

            $(this).datepicker()

        })

        $('body').on('blur', '#date', function(){
            validate($(this))
            $(this).mask('00/00/0000');
        })

        $('body').on('blur', '#time', function(){
            validate($(this))
            $(this).mask('00:00:00');
        })

        $('body').on('blur', '#cep', function(){
            validate($(this))
            $(this).mask('00000-000');
        })
        
        $('body').on('blur', '#phone', function(){
            validate($(this))
            $(this).mask('0000-0000');
        })
        
        $('body').on('blur', '#cpf', function(){
            validate($(this))
            $(this).mask('000.000.000-00')
        })
        
        
        $('body').on('blur', '#email', function(){
            validate($(this))

            if('#email' != '.' || '@' ){

                alert('Escreva seu email corretamente')
            }else{
                return true
            }
        })

})        