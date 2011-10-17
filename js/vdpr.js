jQuery(function($) {
    var colecao = {
        paginas : [
            {
                id : 'vdpr0',
                titulo : 'Primeira tirinha',
                src : 'http://vidadeprogramador.com.br/wp-content/uploads/2011/02/tirinha0.png',
                link : 'http://vdpr.us/0',
                anterior : false,
                proxima : '#vdpr1'
            },

            {
                id : 'vdpr1',
                titulo : 'Você faz programas?',
                src : 'http://vidadeprogramador.com.br/wp-content/uploads/2011/03/tirinha1.png',
                link : 'http://vdpr.us/1',
                anterior : '#vdpr0',
                proxima : '#vdpr2'
            },
            {
                id : 'vdpr2',
                titulo : 'Mensagem de erro estranha',
                src : 'http://vidadeprogramador.com.br/wp-content/uploads/2011/03/tirinha2.png',
                link : 'http://vdpr.us/2',
                anterior : '#vdpr1',
                proxima : '#vdpr3'
            },
            {
                id : 'vdpr3',
                titulo : 'Filme',
                src : 'http://vidadeprogramador.com.br/wp-content/uploads/2011/03/tirinha3.png',
                link : 'http://vdpr.us/3',
                anterior : '#vdpr2',
                proxima : '#vdpr4'
            },
                        {
                id : 'vdpr4',
                titulo : 'Vai fazer bico?',
                src : 'http://vidadeprogramador.com.br/wp-content/uploads/2011/03/tirinha4.png',
                link : 'http://vdpr.us/4',
                anterior : '#vdpr3',
                proxima : '#vdpr5'
            },

            {
                id : 'vdpr5',
                titulo : 'Desfile',
                src : 'http://vidadeprogramador.com.br/wp-content/uploads/2011/03/tirinha5.png',
                link : 'http://vdpr.us/5',
                anterior : '#vdpr4',
                proxima : '#vdpr6'
            },
            {
                id : 'vdpr6',
                titulo : 'Arquivo .EXE no Linux',
                src : 'http://vidadeprogramador.com.br/wp-content/uploads/2011/03/tirinha6.png',
                link : 'http://vdpr.us/6',
                anterior : '#vdpr5',
                proxima : '#vdpr7'
            },
            {
                id : 'vdpr7',
                titulo : 'Pesquisa',
                src : 'http://vidadeprogramador.com.br/wp-content/uploads/2011/03/tirinha7.png',
                link : 'http://vdpr.us/7',
                anterior : '#vdpr6',
                proxima : '#vdpr8'
            },
            {
                id : 'vdpr8',
                titulo : 'Feriado',
                src : 'http://vidadeprogramador.com.br/wp-content/uploads/2011/03/tirinha8.png',
                link : 'http://vdpr.us/8',
                anterior : '#vdpr7',
                proxima : '#vdpr9'
            },
            {
                id : 'vdpr9',
                titulo : 'Por que há menos mulheres que homens em TI?',
                src : 'http://vidadeprogramador.com.br/wp-content/uploads/2011/03/angels_macs021.jpg',
                link : 'http://vdpr.us/9',
                anterior : '#vdpr8'
            },


        ]
    };

    var tpl = $('#pageTemplate').html();

    $('body').append(_.template(tpl, colecao));

    $.mobile.initializePage();
});