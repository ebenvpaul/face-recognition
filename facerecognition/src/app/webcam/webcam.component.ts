import { Component, OnInit, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

@Component({
  selector: 'app-webcam',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css']
})
export class WebcamComponent implements OnInit {
  @ViewChild('videoElement') videoElement!: ElementRef;
  videoStream!: MediaStream;
  webcamActive: boolean = false;
  detectedFaces: string[] = [];  // Array to store detected faces as URLs or base64 strings

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {}

  toggleWebcam(): void {
    if (this.webcamActive) {
      this.stopWebcam();
    } else {
      this.startWebcam();
    }
  }

  startWebcam(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
          .then((stream: MediaStream) => {
            this.videoStream = stream;
            this.videoElement.nativeElement.srcObject = this.videoStream;
            this.videoElement.nativeElement.play();
            this.webcamActive = true;
            this.detectFaces(); // Simulate face detection
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
    if (this.videoStream) {
      this.videoStream.getTracks().forEach(track => track.stop());
      this.videoElement.nativeElement.srcObject = null;
      this.webcamActive = false;
    }
  }

  // Simulate face detection and add a face to the detectedFaces array
  detectFaces(): void {
    // Placeholder for face detection logic, here we simulate adding detected faces
    setTimeout(() => {
      const newFaceUrl = 'https://via.placeholder.com/120'; // Placeholder image
      this.detectedFaces.push(newFaceUrl); // Add the detected face to the array
      console.log("Face detected and added!");
    }, 2000); // Simulate detection delay
  }
}
