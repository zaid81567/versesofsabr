const icon_container = document.getElementById('change-font-size-container')

const verse_= document.getElementById('verse_on_qoute')
const translation_ = document.getElementById('translation_on_qoute')
const reference_ = document.getElementById('reference_on_qoute')

const min_change_value = 1

icon_container.addEventListener('click',(e)=>{
    if(e.target.id == 'plus'){
        const current_verse_size = parseFloat(window.getComputedStyle(verse_).fontSize);
        const current_translation_size = parseFloat(window.getComputedStyle(translation_).fontSize);
        const current_reference_size = parseFloat(window.getComputedStyle(reference_).fontSize);
        
        verse_.style.fontSize = current_verse_size + min_change_value + "px"
        translation_.style.fontSize = current_translation_size + min_change_value + "px"
        reference_.style.fontSize = current_reference_size + min_change_value + "px"
    }
    else if(e.target.id == 'minus'){
        const current_verse_size = parseFloat(window.getComputedStyle(verse_).fontSize);
        const current_translation_size = parseFloat(window.getComputedStyle(translation_).fontSize);
        const current_reference_size = parseFloat(window.getComputedStyle(reference_).fontSize);
        
        verse_.style.fontSize = current_verse_size - min_change_value + "px"
        translation_.style.fontSize = current_translation_size - min_change_value + "px"
        reference_.style.fontSize = current_reference_size - min_change_value + "px"
    }
})

