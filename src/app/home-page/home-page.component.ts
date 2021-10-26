import { Component, OnInit } from '@angular/core';


// for image upload

// var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dqwinsp2q/upload'
// var CLOUDINARY_UPLOAD_PRESET = 'b6ifanla';

// var imgPreview = document.getElementById('img-preview')
// var fileUpload =document.getElementById('profilePicB')

// fileUpload?.addEventListener('change', function(event){
//   var file = event.target.files[0];
//   var formData = new FormData();
//   formData.append('file', file)
//   formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
  
//   axios({
//     url: CLOUDINARY_URL,
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     data: formData 
//     }).then(function(res) {
//       console.log(res);
//       imgPreview.src = res.data.secure_url;
//     }).catch(function(err) {
//       console.error(err)
//     });

//   });



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



}
