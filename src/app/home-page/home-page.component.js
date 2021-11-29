// "use strict";
// var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
//     var c = arguments.length,
//         r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
//         d;
//     if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
//     else
//         for (var i = decorators.length - 1; i >= 0; i--)
//             if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
//     return c > 3 && r && Object.defineProperty(target, key, r), r;
// };
// for image upload
var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dqwinsp2q/upload'
var CLOUDINARY_UPLOAD_PRESET = 'b6ifanla';
var imgPreview = document.getElementById('img-preview')
var fileUpload = document.getElementById('profilePicB')
fileUpload.addEventListener('change', function(event) {
    var file = event.target.files[0];
    var formData = new FormData();
    formData.append('file', file)
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
    axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData
    }).then(function(res) {
        console.log(res);
        imgPreview.src = res.data.secure_url;
    }).catch(function(err) {
        console.error(err)
    });
});