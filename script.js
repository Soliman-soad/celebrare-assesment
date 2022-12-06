const uploader = document.getElementById('upload-Image');
var uploadedFile = '';

uploader.addEventListener('change',function(){
    const reader = new FileReader();
    reader.addEventListener('load',()=>{
        uploadedFile = reader.result;
        document.getElementById('display-section').style.backgroundImage = `url(${uploadedFile})`
        if(uploadedFile !==''){
            document.getElementById('category').style.display = 'flex'
        }
    });

    reader.readAsDataURL(this.files[0]);
    
})

document.getElementById('orginal').addEventListener('click',function(){
    document.getElementById('display-section').classList.add('orginal')
    document.getElementById('display-section').classList.remove('heart')
    document.getElementById('display-section').classList.remove('sq')
    document.getElementById('display-section').classList.remove('box')
    document.getElementById('display-section').classList.remove('circle')
})
document.getElementById('sq').addEventListener('click',function(){
    document.getElementById('display-section').classList.add('sq')
    document.getElementById('display-section').classList.remove('heart')
    document.getElementById('display-section').classList.remove('orginal')
    document.getElementById('display-section').classList.remove('box')
    document.getElementById('display-section').classList.remove('circle')
})
document.getElementById('box').addEventListener('click',function(){
    document.getElementById('display-section').classList.add('box')
    document.getElementById('display-section').classList.remove('heart')
    document.getElementById('display-section').classList.remove('sq')
    document.getElementById('display-section').classList.remove('orginal')
    document.getElementById('display-section').classList.remove('circle')
})
document.getElementById('circle').addEventListener('click',function(){
    document.getElementById('display-section').classList.add('circle')
    document.getElementById('display-section').classList.remove('heart')
    document.getElementById('display-section').classList.remove('sq')
    document.getElementById('display-section').classList.remove('box')
    document.getElementById('display-section').classList.remove('orginal')
})
document.getElementById('heart').addEventListener('click',function(){
    document.getElementById('display-section').classList.add('heart')
    document.getElementById('display-section').classList.remove('orginal')
    document.getElementById('display-section').classList.remove('sq')
    document.getElementById('display-section').classList.remove('box')
    document.getElementById('display-section').classList.remove('circle')
})

