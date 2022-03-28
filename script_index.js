let m_esportes = document.querySelector('div#menu_esportes')
let m_politica = document.querySelector('div#menu_politica')
let m_entretenimento = document.querySelector('div#menu_entretenimento')
let m_curiosidades = document.querySelector('div#menu_curiosidades')

function entrou(elemento, mouseover) {
    if(mouseover == true) {
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
                m_entretenimento.style.backgroundColor = 'rgb(29, 29, 255)'
                break;
            case 'curiosidades':
                m_curiosidades.style.display = 'block'
                m_curiosidades.style.backgroundColor = '#CC2936'
                break;
        }
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

                m_entretenimento.style.backgroundColor = 'rgb(29, 29, 255)'
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