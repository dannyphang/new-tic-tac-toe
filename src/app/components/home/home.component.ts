import { Component, OnInit } from '@angular/core';
import { ShapeComponent } from './shape/shape.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [ShapeComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  shapes = ['circle', 'cross', 'empty'];
  gameList: ShapeDTO[] = [];
  isPlayerOne = true;
  playerOnePoints = 0;
  playerTwoPoints = 0;

  ngOnInit(): void {
    this.gameList = [
      { Shape: 'empty', Index: 0 },
      { Shape: 'empty', Index: 0 },
      { Shape: 'empty', Index: 0 },
      { Shape: 'empty', Index: 0 },
      { Shape: 'empty', Index: 0 },
      { Shape: 'empty', Index: 0 },
      { Shape: 'empty', Index: 0 },
      { Shape: 'empty', Index: 0 },
      { Shape: 'empty', Index: 0 }
    ];
  }

  boxClicked(index: number) {
    // when a box is clicked, all the boxes index of the current player will be increase by 1
    // so when the shape in the box is 2, then it will become 0 again and set the shape to empty
    // when the shape in the box is 0, then it will become 1 
    // when the shape in the box is 1, then it will become 2 
    // if the player is player one, then the shape will be circle
    // if the player is player two, then the shape will be cross
    if (this.gameList[index].Shape === 'empty') {
      if (this.isPlayerOne) {
        this.gameList[index].Shape = 'circle';
        for (let i = 0; i < this.gameList.length; i++) {
          if (this.gameList[i].Shape == 'circle') {
            this.gameList[i].Index++;
            if (this.gameList[i].Index == 4) {
              this.gameList[i].Shape = 'empty';
              this.gameList[i].Index = 0;
            }
          }
        }
      } else {
        this.gameList[index].Shape = 'cross';
        for (let i = 0; i < this.gameList.length; i++) {
          if (this.gameList[i].Shape == 'cross') {
            this.gameList[i].Index++;
            if (this.gameList[i].Index == 4) {
              this.gameList[i].Shape = 'empty';
              this.gameList[i].Index = 0;
            }
          }
        }
      }
      this.isPlayerOne = !this.isPlayerOne;

    }
    this.checkResult();
  }

  checkResult() {
    // check if the player one or player two is the winner based on the gamelist
    let playerOneWin = false;
    let playerTwoWin = false;
    let playerOneIndex = [];
    let playerTwoIndex = [];
    for (let i = 0; i < this.gameList.length; i++) {
      if (this.gameList[i].Shape == 'circle') {
        playerOneIndex.push(i);
      }
      if (this.gameList[i].Shape == 'cross') {
        playerTwoIndex.push(i);
      }
    }
    if (playerOneIndex.includes(0) && playerOneIndex.includes(1) && playerOneIndex.includes(2)) {
      playerOneWin = true;
    }
    if (playerOneIndex.includes(3) && playerOneIndex.includes(4) && playerOneIndex.includes(5)) {
      playerOneWin = true;
    }
    if (playerOneIndex.includes(6) && playerOneIndex.includes(7) && playerOneIndex.includes(8)) {
      playerOneWin = true;
    }
    if (playerOneIndex.includes(0) && playerOneIndex.includes(3) && playerOneIndex.includes(6)) {
      playerOneWin = true;
    }
    if (playerOneIndex.includes(1) && playerOneIndex.includes(4) && playerOneIndex.includes(7)) {
      playerOneWin = true;
    }
    if (playerOneIndex.includes(2) && playerOneIndex.includes(5) && playerOneIndex.includes(8)) {
      playerOneWin = true;
    }
    if (playerOneIndex.includes(0) && playerOneIndex.includes(4) && playerOneIndex.includes(8)) {
      playerOneWin = true;
    }
    if (playerOneIndex.includes(2) && playerOneIndex.includes(4) && playerOneIndex.includes(6)) {
      playerOneWin = true;
    }
    if (playerTwoIndex.includes(0) && playerTwoIndex.includes(1) && playerTwoIndex.includes(2)) {
      playerTwoWin = true;
    }
    if (playerTwoIndex.includes(3) && playerTwoIndex.includes(4) && playerTwoIndex.includes(5)) {
      playerTwoWin = true;
    }
    if (playerTwoIndex.includes(6) && playerTwoIndex.includes(7) && playerTwoIndex.includes(8)) {
      playerTwoWin = true;
    }
    if (playerTwoIndex.includes(0) && playerTwoIndex.includes(3) && playerTwoIndex.includes(6)) {
      playerTwoWin = true;
    }
    if (playerTwoIndex.includes(1) && playerTwoIndex.includes(4) && playerTwoIndex.includes(7)) {
      playerTwoWin = true;
    }
    if (playerTwoIndex.includes(2) && playerTwoIndex.includes(5) && playerTwoIndex.includes(8)) {
      playerTwoWin = true;
    }
    if (playerTwoIndex.includes(0) && playerTwoIndex.includes(4) && playerTwoIndex.includes(8)) {
      playerTwoWin = true;
    }
    if (playerTwoIndex.includes(2) && playerTwoIndex.includes(4) && playerTwoIndex.includes(6)) {
      playerTwoWin = true;
    }
    if (playerOneWin && !this.isPlayerOne) {
      this.playerOnePoints++;
    }
    if (playerTwoWin && this.isPlayerOne) {
      this.playerTwoPoints++;
    }

  }
}

class ShapeDTO {
  Shape: string = "empty";
  Index: number = 0;
}