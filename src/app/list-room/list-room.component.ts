import { Component, OnInit } from '@angular/core';
import {DetailsRoomComponent} from '../details-room/details-room.component';
import { Observable } from 'rxjs';
import {RoomService} from "../roomservice.service";
import {Room} from "../Room";
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.css']
})
export class ListRoomComponent implements OnInit {

  rooms:Observable<Room[]>; //pega um observable com o tipo do vetor de room

  //faz a injeção
  constructor(private roomService:RoomService, private router:Router) { }

  ngOnInit(){
    this.reloadData();  //carrega os dados ao iniciar o component
  }

  reloadData(){
    this.rooms = this.roomService.getRoomList();
  }

  deleteRoom(id:number){
    this.roomService.deleteRoom(id).subscribe(
      data=>{
        console.log(data),
        this.reloadData();
      },
      error=>console.log(error)
    );
  }

  detailsRoom(id:number){
    this.router.navigate(['/details/',id]);   //o metodo navigate do modulo router faz a pagina ser mudada pra rota

  }

  updateRoom(id:number){
    this.router.navigate(['/update/',id]);
  }

}
