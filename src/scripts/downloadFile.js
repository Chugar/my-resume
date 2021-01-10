(function() {

    const downlaodButton = document.getElementById('download-button');

    function downloadURI(uri, name) {
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = uri;
        a.download = name;
        a.target = "_blank"
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    }


    const callBack = () => {
        downloadURI("./dist/assets/other/my_resume.pdf", "my_resume.pdf");
    }


    downlaodButton.addEventListener('click', callBack);

})();