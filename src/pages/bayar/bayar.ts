import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, Platform } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

import { NgForm } from '@angular/forms';

import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { ImageResizer, ImageResizerOptions } from '@ionic-native/image-resizer';

declare var cordova: any;

export interface bayarForm {
    id_user:string,
    idwrg:string,
    idbank:string,
    norek:string,
    bukti:string
}

export interface userProfile{
  nama:string,
  alamat:string,

}

@Component({
    selector: 'page-bayar',
    templateUrl: 'bayar.html',
    providers: [  UserData ]
  })

  export class BayarPage {
    lastImage: string = null;
    bayar: bayarForm = {id_user:'',idwrg: '', idbank:'' ,norek:'',bukti:''};
    userProf : userProfile = {nama:'',alamat:''};
    submitted = false;
    bankKeys = Object.keys;
    bankOpt = {};  

    constructor(
        private imageResizer: ImageResizer,
        private alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        public events: Events,
        public storage: Storage,
        public navCtrl: NavController, 
        public userData: UserData, 
        private camera: Camera, 
        public transfer: Transfer,
        private file: File,
        private filePath: FilePath,
        public platform: Platform
      
      ){
        
    }

    ionViewDidLoad() {
      this.populateBank();
      this.populateProfile();
    console.log('ionViewDidLoad BayarPage');
  }
    // refactoring idea : need loading and alert module because duplication in login ts
    loading: any = this.loadingCtrl.create({
        content: "Please wait..."
      })
    myalert: any;
    showLoading(){
        this.loading = this.loadingCtrl.create({
          content: "Please wait..."
        });
        this.loading.present();
      }
    killLoading(){
        if(this.loading){ this.loading.dismiss(); this.loading = null; }
    }
    showalert(alertMessage){
        this.myalert = this.alertCtrl.create({
          title: 'Warning',
          message: alertMessage,
          buttons: ['Dismiss']
        });
        this.myalert.present();
      }
    // end refactoring alert and loading module
    submitBayar(form: NgForm){
      this.submitted = true;

      if (form.valid ) {
        //this.bayar.warga_id = this.bayar.mst_warga_id
        //console.log(this.bayar);
        //this.showLoading();
        this.userData.postBayar(this.bayar, this);
        
    }
    }

    populateBank(){
        //this.bankOpt = { 1: 'BCA', 2: 'Mandiri', 3:'BNI' };
        this.userData.getBank(this);
    }
    populateProfile(){
      this.storage.get('profile').then((value) => {
        this.bayar.id_user = value["id_user"];
        this.bayar.idwrg = value["mst_warga_id"];
        this.userProf.nama = value["nama"];
        this.userProf.alamat = value["alamat"];
        console.log(value);
        console.log(this.userProf)
      });
      //console.log(this.bayar);
    }


    public useCamera(){
      this.takePicture(this.camera.PictureSourceType.CAMERA);
    }

    public takePicture(sourceType) {
      // Create options for the Camera Dialog
      var options = {
        quality: 75,
        sourceType: sourceType,
        saveToPhotoAlbum: false,
        correctOrientation: true
      };
     
      // Get the data of an image
      this.camera.getPicture(options).then((imagePath) => {
        // Special handling for Android library
        if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
          this.filePath.resolveNativePath(imagePath)
            .then(filePath => {
              let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
              let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
              // resize image here
              let options = {
                uri: imagePath,
                //folderName: 'Protonet',
                quality: 75,
                width: 600,
                height: 600
               } as ImageResizerOptions;
               
               this.imageResizer
                 .resize(options)
                 .then((filePath: string) =>{ 

                   this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
                   console.log('Resizing done FilePath ', filePath);} )
                 .catch(e => console.log(e));
              
            });
        } else {
          var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
          var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
          this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        }
      }, (err) => {
        this.showalert('Error while selecting image.' + JSON.stringify(err));
      });
    }

    copyFileToLocalDir(namePath, currentName, newFileName){
      this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
        this.lastImage = newFileName;
      }, error => {
        this.showalert('Error while storing file.');
      });
    };
    createFileName(){
      var d = new Date(),
      n = d.getTime(),
      newFileName =  n + ".jpg";
      return newFileName;
    };
    pathForImage(img) {
      if (img === null) {
        return '';
      } else {
        return cordova.file.dataDirectory + img;
      }
    }

    uploadImage(url,id_iuran,token) {
      // Destination URL
     
      // File for Upload
      var targetPath = this.pathForImage(this.lastImage);

      //var  targetPathMock = "D:\\nodeapp\\ionicapp\\HasApp\\www\\assets\\imgs\\bus.png";
      // File name only
      var filename = this.lastImage;
     //var filenameMock = "bus.png";
      var options = {
        fileKey: "file",
        fileName: filename,
        chunkedMode: false,
        mimeType: "multipart/form-data",
        headers: {
          'Authorization': 'Bearer ' + token
        },
        params : {
          'fileName': filename,
          'id_iuran':id_iuran
        }
      };
     
      const fileTransfer: TransferObject = this.transfer.create();
     
      this.loading = this.loadingCtrl.create({
        content: 'Uploading...',
      });
      this.loading.present();
      //console.log('uploading')
      // Use the FileTransfer to upload the image
      fileTransfer.upload(targetPath, url, options).then(data => {
        //console.log('done')
        if(this.loading){ this.loading.dismiss(); this.loading = null; }
        this.showalert('Image succesful uploaded. From ' + targetPath + ' <br />' + JSON.stringify(data));
      }, err => {
        //console.log('fail')
        if(this.loading){ this.loading.dismiss(); this.loading = null; }
        this.showalert('Error while uploading file.From ' + targetPath + ' <br />' + JSON.stringify(err));
      });
    }

    
  }