const btn = document.getElementById('generate_qoute_btn')


const verse = document.getElementById('verse')
const translation = document.getElementById('translation')
const surah = document.getElementById('surah')
const ayah_num = document.getElementById('ayah')

const verse_on_qoute = document.getElementById('verse_on_qoute')
const translation_on_qoute = document.getElementById('translation_on_qoute')
const reference_on_qoute = document.getElementById('reference_on_qoute')


btn.addEventListener('click', ()=>{
    verse_on_qoute.textContent = verse.value 
    translation_on_qoute.textContent = translation.value
    reference_on_qoute.innerHTML = `${surah.value} <span>${ayah_num.value}</span>` 

    verse.value = ''
    translation.value = ''
    surah.value = ''
    ayah_num.value = ''
})