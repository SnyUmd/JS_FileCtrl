function Ev_SelectFolder(id0) {
    alert("EV");
    let files = document.getElementById(id0).target.files;

    for (let i = 0; i < files.length; i++) {
        alert(files[i])
    }
}

function debug0() {
    alert("debug0");
    // String path1 = "D:\";
    // File file1 = new File(path1);
    // File fileArray1[] = file1.listFiles();
    // alert(fileArray1[0].toString);
}

function debug1() {
    alert("debug1");

}