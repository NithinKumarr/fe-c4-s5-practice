import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth:AuthService, private route:RouteService){}

  tourGuideCode:string=''

  validateTourGuideCode(){
    if(this.auth.login("TG@2022")){
      this.route.navigateToTourRequestsView();
    }
  }

}
