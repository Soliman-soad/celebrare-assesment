const uploader = document.getElementById('upload-Image');
var uploadedFile = '';

uploader.addEventListener('change',function(){
    const reader = new FileReader();
    reader.addEventListener('load',()=>{
        uploadedFile = reader.result;
        document.getElementById('display-section').style.backgroundImage = `url(${uploadedFile})`
    });
    reader.readAsDataURL(this.files[0]);
})