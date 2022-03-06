let m_esportes = document.querySelector('div#menu_esportes')
let m_politica = document.querySelector('div#menu_politica')
let m_entretenimento = document.querySelector('div#menu_entretenimento')
let m_curiosidades = document.querySelector('div#menu_curiosidades')

let menu = document.querySelector('div#menu')
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
        body_style.setProperty('--largura-coluna', 'none')
    }

    if(tela >= 550) {
        menu.style.display = 'flex'
        body_style.setProperty('--largura-coluna', '160px')
    }
}