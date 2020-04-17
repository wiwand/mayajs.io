import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-installation",
  templateUrl: "./installation.component.html",
  styleUrls: ["./installation.component.scss"],
})
export class InstallationComponent implements OnInit {

  svg = {
    copy: "../assets/svg/copypaste-icon.svg",
    installation: "../assets/svg/Installation.svg"
  };

  constructor() {}

  ngOnInit(): void {

    document.getElementById('btn-id').addEventListener("click", ()=>{
      var clipBoard = document.createElement("input");
      document.body.appendChild(clipBoard);
      clipBoard.value = document.getElementById('copyme').innerHTML;
      clipBoard.select();
      document.execCommand('copy');
      document.body.removeChild(clipBoard);
      });
    }

}
