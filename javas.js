var currentlanguage = 'en'

function changelang(){
if (currentlanguage == 'en'){
document.head.insertAdjacentHTML('beforeend', '<style>.bilanguage::after {content: attr(data-mk);}</style>');
currentlanguage = 'mk'
} else {
document.head.insertAdjacentHTML('beforeend', '<style>.bilanguage::after {content: attr(data-en);}</style>');
currentlanguage = 'en'
}

}