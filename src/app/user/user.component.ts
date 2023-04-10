import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  users !: User[];
  
  constructor(private userService: UserService) { }

  ngOnInit(): void{
    this.userService.getUser().subscribe((data: User[]) => {
      console.log(data);
      this.users=data;
    })
  }
}
