import { Component, OnInit,Input } from '@angular/core';
import {RoomService} from "../roomservice.service";
import {Room} from "../Room";
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-details-room',
  templateUrl: './details-room.component.html',
  styleUrls: ['./details-room.component.css']
})
export class DetailsRoomComponent implements OnInit {

  room: Room;
  id:number;
  submitted:false;

  constructor(private route: ActivatedRoute,private router:Router, private roomService:RoomService) { }

  ngOnInit(){
    this.room = new Room();
    this.id = this.route.snapshot.params['id'];
    this.roomService.getRoom(this.id).subscribe(data=>{
      console.log(data);
      this.room = data;
    },error=>console.log(error));

  }

  list(){
    this.router.navigate(['/rooms']);
  }

}
