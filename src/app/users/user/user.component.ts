import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }
  paramsSubscription: Subscription;

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };

    //observable 
    this.paramsSubscription = this.route.params
    .subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

  //we dont need to do it for Route Observables, ANgular will do it for us 
  //but for observables we make on our own, we need to unsubscribe

  ngOnDestroy(){
    this.paramsSubscription.unsubscribe();
  }

}
