let m_esportes = document.querySelector('div#menu_esportes')
let m_politica = document.querySelector('div#menu_politica')
let m_entretenimento = document.querySelector('div#menu_entretenimento')
let m_curiosidades = document.querySelector('div#menu_curiosidades')

let h_esportes = document.querySelector('header#esportes')
let h_politica = document.querySelector('header#politica')
let h_entretenimento = document.querySelector('header#entretenimento')
let h_curiosidades = document.querySelector('body#curiosidades > header')


let menu = document.querySelector('div#menu')
let footer = document.querySelector('footer')
let body_style = document.body.style

function entrou(elemento) {
    switch(elemento) {
        case 'esportes':
            m_esportes.style.display = 'block'
            m_esportes.style.backgroundColor = '#32CD32' 
            break;
        case 'politica':
            m_politica.style.display = 'block'
            m_politica.style.backgroundColor = '#F17105'
            break;
        case 'entretenimento':
            m_entretenimento.style.display = 'block'
            m_entretenimento.style.display = 'darkblue'
            break;
        case 'curiosidades':
            m_curiosidades.style.display = 'block'
            m_curiosidades.style.backgroundColor = '#CC2936'
            break;
    }
}

function saiu(elemento) {
    switch(elemento) {
        case 'esportes':
            m_esportes.style.display = 'none'
            break;
        case 'politica':
            m_politica.style.display = 'none'
            break;
        case 'entretenimento':
            m_entretenimento.style.display = 'none'
            break;
        case 'curiosidades':
            m_curiosidades.style.display = 'none'
            break;
    }
}

function diminuiu() {
    let tela = document.documentElement.clientWidth

    if(tela < 550) {
        menu.style.display = 'block'
        style.setProperty('--largura-coluna', 'none')
    }

    if(tela >= 550) {
        menu.style.display = 'flex'
        style.setProperty('--largura-coluna', '160px')
    }
}

function pagina() {
    if(h_esportes != null) {
        menu.style.backgroundColor = 'darkgreen'
        body_style.backgroundColor = 'lightgreen'
        footer.style.backgroundImage = 'linear-gradient(to top, #32CD32 40%, #287233)'
    }

    if(h_politica != null) {
        menu.style.backgroundColor = '#A83A0B'
        body_style.backgroundColor = '#FF9C71'
        footer.style.backgroundImage = 'linear-gradient(to top, #F17105 40%, #CD4505)'
    }

    if(h_entretenimento != null) {
        menu.style.backgroundColor = 'darkblue'
        body_style.backgroundColor = '#lightblue'
        footer.style.backgroundImage = 'linear-gradient(to bottom, rgb(28, 28, 247) 40%, rgb(11, 11, 63))'
    }

    if(h_curiosidades != null) {
        menu.style.backgroundColor = '#63141B'
        body_style.backgroundColor = '#CC7484'
        footer.style.backgroundImage = 'linear-gradient(to top, #CC2936 40%, #73171F)'
    }
}