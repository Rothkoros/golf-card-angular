import { Component, NgModule, OnInit } from '@angular/core';
import {
  FormControl,
  ValidatorFn,
  AbstractControl,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { Player } from '../../interfaces/player';
import {
  AngularFirestore,
  DocumentChangeAction,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  playerNameFC = new FormControl('', [this.nameValidator()]);
  players: Player[] = [];
  playerId = 0;
  holes: string[] = [
    'hole1',
    'hole2',
    'hole3',
    'hole4',
    'hole5',
    'hole6',
    'hole7',
    'hole8',
    'hole9',
    'hole10',
    'hole11',
    'hole12',
    'hole13',
    'hole14',
    'hole15',
    'hole16',
    'hole17',
    'hole18',
  ];

  constructor(private db: AngularFirestore) {}

  ngOnInit(): void {
    this.getPlayerScore().subscribe((players) => {
      this.players = players;
    });
  }
  addPlayer(): void {
    if (this.playerNameFC.value) {
      this.playerId++;

      this.players.push({
        // id: this.playerId.toString(),
        name: this.playerNameFC.value,
        hole1: 0,
        hole2: 0,
        hole3: 0,
        hole4: 0,
        hole5: 0,
        hole6: 0,
        hole7: 0,
        hole8: 0,
        hole9: 0,
        hole10: 0,
        hole11: 0,
        hole12: 0,
        hole13: 0,
        hole14: 0,
        hole15: 0,
        hole16: 0,
        hole17: 0,
        hole18: 0,
      });

      this.playerNameFC.setValue('')
      
    }
    
  }
  nameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      let error = null;
      if (this.players && this.players.length) {
        this.players.forEach((player) => {
          if (player.name.toLowerCase() === control.value.toLowerCase()) {
            error = { duplicate: true };
          }
          if(this.players.length > 3){
            error = {tooMany: true}
          }
        });
      }

      return error;
    };
  }
  // playerCountValidator(): ValidatorFn{
  //   return(): {[key: string]: any} | null =>{
  //     let error = null;
  //     if(this.players.length > 4){
  //       error = {tooMany: true}
  //     }
  //     return error
  //   }
  // }

  getInScore(player: Player): number {
    console.log(player);
    return (
      player.hole1 +
      player.hole2 +
      player.hole3 +
      player.hole4 +
      player.hole5 +
      player.hole6 +
      player.hole7 +
      player.hole8 +
      player.hole9
    );
  }

  getOutScore(player: Player): number {
    return (
      player.hole1 +
      player.hole2 +
      player.hole3 +
      player.hole4 +
      player.hole5 +
      player.hole6 +
      player.hole7 +
      player.hole8 +
      player.hole9 +
      player.hole10 +
      player.hole11 +
      player.hole12 +
      player.hole13 +
      player.hole14 +
      player.hole15 +
      player.hole16 +
      player.hole17 +
      player.hole18
    );
  }
  deletePlayer(player: Player, index: number): void {
    if (player.id) {
      this.deletePlayerScore(player);
    }
    this.players.splice(index, 1);
  }
  deletePlayerScore(player: Player): any {
    this.db.collection('player-score').doc(player.id).delete();
  }
  savePlayerScore(player: Player): any {
    this.db.collection('player-score').add(player);
  }
  submit(): void {
    this.players.forEach((player) => {
      if (player.id) {
        this.updatePlayerHours(player);
      } else {
        this.savePlayerScore(player);
      }
    });
  }
  getPlayerScore(): Observable<Player[]> {
    const filteredPlayers = this.db.collection('player-score');
    return filteredPlayers.snapshotChanges().pipe(
      map((items: DocumentChangeAction<Player>[]): Player[] => {
        return items.map(
          (item: DocumentChangeAction<Player>): Player => {
            return {
              id: item.payload.doc.id,
              name: item.payload.doc.data().name,
              hole1: item.payload.doc.data().hole1,
              hole2: item.payload.doc.data().hole2,
              hole3: item.payload.doc.data().hole3,
              hole4: item.payload.doc.data().hole4,
              hole5: item.payload.doc.data().hole5,
              hole6: item.payload.doc.data().hole6,
              hole7: item.payload.doc.data().hole7,
              hole8: item.payload.doc.data().hole8,
              hole9: item.payload.doc.data().hole9,
              hole10: item.payload.doc.data().hole10,
              hole11: item.payload.doc.data().hole11,
              hole12: item.payload.doc.data().hole12,
              hole13: item.payload.doc.data().hole13,
              hole14: item.payload.doc.data().hole14,
              hole15: item.payload.doc.data().hole15,
              hole16: item.payload.doc.data().hole16,
              hole17: item.payload.doc.data().hole17,
              hole18: item.payload.doc.data().hole18,
            };
          }
        );
      })
    );
  }
  updatePlayerHours(player: Player): any {
    this.db.collection('player-score').doc(player.id).set(player);
  }
}
