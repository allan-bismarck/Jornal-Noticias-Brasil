let m_esportes = document.querySelector('div#menu_esportes')
let m_politica = document.querySelector('div#menu_politica')
let m_entretenimento = document.querySelector('div#menu_entretenimento')
let m_curiosidades = document.querySelector('div#menu_curiosidades')

let largura_esportes = m_esportes.style.width
let largura_politica = m_politica.style.width
let largura_entretenimento = m_entretenimento.style.width
let largura_curiosidades = m_curiosidades.style.width

let menu = document.querySelector('div#menu')
let body_style = document.body.style

function entrou(elemento, mouseover) {
    let tela = document.documentElement.clientWidth

    if(mouseover == true && tela < 920) {
        return
    } else {
        switch(elemento) {
            case 'esportes':
                if(m_esportes.style.display == 'block') {
                    m_esportes.style.display = 'none'
                } else {
                    m_esportes.style.display = 'block'
                }

                m_esportes.style.backgroundColor = '#32CD32' 
                break;
            case 'politica':
                if(m_politica.style.display == 'block') {
                    m_politica.style.display = 'none'
                } else {
                    m_politica.style.display = 'block'
                }

                m_politica.style.backgroundColor = '#F17105'
                break;
            case 'entretenimento':
                if(m_entretenimento.style.display == 'block') {
                    m_entretenimento.style.display = 'none'
                } else {
                    m_entretenimento.style.display = 'block'
                }

                m_entretenimento.style.display = 'darkblue'
                break;
            case 'curiosidades':
                if(m_curiosidades.style.display == 'block') {
                    m_curiosidades.style.display = 'none'
                } else {
                    m_curiosidades.style.display = 'block'
                }

                m_curiosidades.style.backgroundColor = '#CC2936'
                break;
        }
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
        m_esportes.style.width = '100%'
        m_politica.style.width = '100%'
        m_entretenimento.style.width = '100%'
        m_curiosidades.style.width = '100%'
        m_esportes.style.position = 'relative'
        m_politica.style.position = 'relative'
        m_entretenimento.style.position = 'relative'
        m_curiosidades.style.position = 'relative'
    }

    if(tela >= 550) {
        menu.style.display = 'flex'
        body_style.setProperty('--largura-coluna', '160px')
        m_esportes.style.width = largura_esportes
        m_politica.style.width = largura_politica
        m_entretenimento.style.width = largura_entretenimento
        m_curiosidades.style.width = largura_curiosidades
        m_esportes.style.position = 'absolute'
        m_politica.style.position = 'absolute'
        m_entretenimento.style.position = 'absolute'
        m_curiosidades.style.position = 'absolute'
    }
}