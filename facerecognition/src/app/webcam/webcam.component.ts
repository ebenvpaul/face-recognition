import { Component, OnInit, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-webcam',
  standalone: true,
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css']
})
export class WebcamComponent implements OnInit {
  @ViewChild('videoElement') videoElement!: ElementRef;
  videoStream!: MediaStream;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.startWebcam();
  }

  startWebcam(): void {
    // Check if running in the browser
    if (isPlatformBrowser(this.platformId)) {
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
    } else {
      console.warn("Webcam access is not available on the server side.");
    }
  }

  stopWebcam(): void {
    // Stop all the tracks when turning off the webcam
    if (this.videoStream) {
      this.videoStream.getTracks().forEach(track => track.stop());
    }
  }
}
