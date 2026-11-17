/* ជ្រើសរើសធាតុមានអាយឌី​ btnApply រួចតាងដោយធាតុអថេរ btnApply */
const btnApply = document.getElementById('btnApply');
/* ថែម click event  ឱ្យធាតុអថេរ btnApply*/

btnApply.addEventListener('click', () => {
  // ជ្រើសធាតុ input ដែល name attribute មានតម្លៃ rdoTheme ហើយត្រូវបានគេ​ checked យក 
  const rdoSelected = document.querySelector('input[name="rdoTheme"]:checked');
  // បើគេបាន checked ជម្រើស silver, blue, orange 
  if(rdoSelected){
    // លុបថ្នាក់នៃការរចនាចាស់នៃធាតុ body
    document.body.className = '';

    // យកតម្លៃគេបាន checked ពី radio button មកថែមជាថ្នាក់នៃការរចនាថ្មីនៃធាតុ body
    document.body.classList.add(rdoSelected.value);
  }else{
    alert('Please select a theme first!');
  }
});

