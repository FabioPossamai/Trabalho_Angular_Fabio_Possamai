import { Component, Input } from "@angular/core";
import { Album } from "../../classes/Album";

@Component({
  selector: "app-album-list",
  templateUrl: "./album-list.component.html",
  styles: []
})
export class AlbumListComponent {
  @Input() albums: Album[];
}
