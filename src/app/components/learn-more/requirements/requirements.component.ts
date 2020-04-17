import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-requirements",
  templateUrl: "./requirements.component.html",
  styleUrls: ["./requirements.component.scss"],
})
export class RequirementsComponent implements OnInit {

  svg = {
    requirements: "../assets/svg/Requirements.svg"
  };

  constructor() {}

  ngOnInit(): void {}
}
