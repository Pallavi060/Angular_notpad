import { Component } from '@angular/core';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent {
 newNote = '';
 currentDate = '';

  addNote() {
    console.log('New Note:', this.newNote);
    this.newNote = '';

    const now = new Date();
    this.currentDate = now.toLocaleString();
}

}
