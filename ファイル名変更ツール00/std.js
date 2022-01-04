
SelectedDir = "";


document.getElementById('SelectDir').addEventListener('change', CheckDir);




function debug0() {
    // selectタグを取得する
    var select = document.getElementById("sampleSelect");
    // optionタグを作成する
    var option = document.createElement("option");
    // optionタグのテキストを4に設定する
    option.text = 4;
    // optionタグのvalueを4に設定する
    option.value = 4;
    // selectタグの子要素にoptionタグを追加する
    select.appendChild(option);
}

function debug1() {
    // var loc = window.location.pathname;
    // var dir = loc.substring(0, loc.lastIndexOf('/'));
    // alert(dir);

}

function GetDirName(target)
{
  const path = require('path');
  const result = path.dirname(target);
  return result;
}



function CheckDir(){
  SelDirFiles = document.getElementById('SelectDir');
  SelectedDir = SelDirFiles.files[0].webkitRelativePath;
  alert(SelectedDir);
  files = SelDirFiles.files;
  for(i = 0; i < files.length; i++)
    alert(files[i].name);
}




// document.getElementById('file').addEventListener('change', ev => {
//   alert();
//   for (let i = 0; i < ev.target.files.length; i++) {
//
//       let file = ev.target.files[i];
//       alert(file.name);
//       // ディレクトリの相対パス
//       let relativePath = file.webkitRelativePath;
//       // ここではテキストファイルとして読み出してみる.
//       let fileReader = new FileReader();
//       fileReader.onload = event => {
//           // 内容を取得する.
//           let text = event.target.result;
//           // 表示してみる.
//           console.log(relativePath, text);
//       }
//       fileReader.readAsText(file);
//   }
// });
