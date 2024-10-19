import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-webcam',
  standalone: true,
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css']
})
export class WebcamComponent implements OnInit {
  @ViewChild('videoElement') videoElement!: ElementRef;
  videoStream!: MediaStream;

  constructor() {}

  ngOnInit(): void {
    this.startWebcam();
  }

  startWebcam(): void {
    // Check if mediaDevices and getUserMedia are supported
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream: MediaStream) => {
          this.videoStream = stream;
          this.videoElement.nativeElement.srcObject = this.videoStream;
          this.videoElement.nativeElement.play();
        })
        .catch((err) => {
          console.error("Error accessing webcam: ", err);
        });
    } else {
      console.error("getUserMedia is not supported in this browser.");
    }
  }

  stopWebcam(): void {
    // Stop all the tracks when turning off the webcam
    if (this.videoStream) {
      this.videoStream.getTracks().forEach(track => track.stop());
    }
  }
}
