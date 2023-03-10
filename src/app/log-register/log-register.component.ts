import { Component } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LogregService } from '../services/logreg.service';

@Component({
  selector: 'app-log-register',
  templateUrl: './log-register.component.html',
  styleUrls: ['./log-register.component.scss']
})
export class LogRegisterComponent {

  registerForm:FormGroup;
  loginForm:FormGroup;
  showWarning:boolean;

  constructor(private fb:FormBuilder, private logreg:LogregService, private route:Router){
    this.registerForm = this.fb.group({
      nombre:['',Validators.required],
      apellidos:['',Validators.required],
      telefono:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      passrepeat:['',Validators.required]
    })

    this.loginForm = this.fb.group({
      eou:['',Validators.required],
      password:['',Validators.required]
    })
    this.showWarning = false;
  }
  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user')!);
    //si hay usuario logueado navegar a su espacio privado
    if (user) {
      this.route.navigateByUrl('/profile');
    }
  //if(this.logreg.ge) FIXME: get local storage en servicio y redirigir 
}
  sendLogin():void{
    console.log("sendLogin");
    if(this.loginForm.invalid){
      return;
    }

    this.logreg.login(this.loginForm).subscribe(result=>{

      if(result){

        this.route.navigateByUrl('/profile');
      }else{
        this.showWarning = true;
      }
    })



  }

  sendRegister():void{
    console.log("sendLogin");
    if(this.registerForm.invalid){
      return;
    }

    this.logreg.register(this.registerForm).subscribe(result=>{

      if(result){
       window.location.reload();
      }
    })

  }

  checkSign():boolean{
    return this.registerForm.invalid || this.registerForm.get('password')?.value !== this.registerForm.get('passrepeat')?.value

  }

}
