import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ProtobufService } from './protobuf.service';
import { Course } from '../generated/training'
import { BinaryReader } from '@protobuf-ts/runtime';
import { Request } from '@improbable-eng/grpc-web/dist/typings/invoke';
import { Course as CourseRpc, Student } from './generated/training_pb'
import { CourseService } from './generated/training_pb_service'
import { CourseTwo as CourseTwoRpc, StudentTwo } from './generated/training_two_pb'
import { CourseServiceTwo } from './generated/training_two_pb_service';
import { grpc } from '@improbable-eng/grpc-web';
import { Int32Value } from 'google-protobuf/google/protobuf/wrappers_pb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'proto-client';
  grpcClient!: Request

  constructor(private http: HttpClient, private protobufService: ProtobufService) {}

  ngOnInit() {
    console.log('masuk ke init')
    this.startStream()
    // this.http.get("http://localhost:8080/courses/1", {
    //   responseType: "arraybuffer"
    // }).subscribe({
    //   next: (resp: any) => {
    //     console.log(resp)
    //     var data = this.protobufService.deserializeCourseBinary(resp)
    //     console.log(data)
    //     console.log(data.courseName)

    //     console.log('mulai menggunakan @protobuf-ts')
    //     var utfOptions = {
    //       readerFactory: (bytes: Uint8Array) => new BinaryReader(bytes, {
    //         decode(input?: Uint8Array): string {
    //           return input ? (input as Buffer).toString("utf8") : ""
    //         }
    //       })
    //     }
    //     // var course = Course.fromBinary(resp, utfOptions)
    //     var courseCreate = Course.create(resp)
    //     // console.log(course)
    //     console.log(courseCreate)
    //   },
    //   error: (err) => {
    //     console.log('error request data')
    //     console.log(err)
    //   },
    //   complete: () => {
    //     console.log('complete')
    //   }
    // })


  }

  startStream() {
    const req = new Int32Value()
    req.setValue(1)

    this.grpcClient = grpc.invoke(CourseService.getCourseById, {
      request: req, 
      host: `http://localhost`, 
      onMessage: (message: CourseRpc) => {
        console.log('data CourseService')
        const data = message.toObject()
        console.log(data)
      }, 
      onEnd: (code: grpc.Code, msg: string | undefined, trailers: grpc.Metadata) => {
        if(code == grpc.Code.OK) {
          console.log('request finished without any error')
        } else {
          console.log('an error occured', code, msg, trailers)
        }
      } 
    })

    this.grpcClient = grpc.invoke(CourseServiceTwo.getCourseById, {
      request: req,
      host: `http://localhost`,
      onMessage: (message: CourseTwoRpc) => {
        console.log('data CourseServiceTwo')
        const data = message.toObject()
        console.log(data)
      },
      onEnd: (code: grpc.Code, msg: string | undefined, trailers: grpc.Metadata) => {
        if(code == grpc.Code.OK) {
          console.log('request finished without any error')
        } else {
          console.log('an error occured', code, msg, trailers)
        }
      }
    })
  }


}
