import { Injectable } from '@angular/core';
import * as goog from 'google-protobuf'

declare function require(path: string): any
let proto = require('../assets/js/training_pb.js')

@Injectable({
  providedIn: 'root'
})
export class ProtobufService {
  readonly proto : any = proto

  constructor() { }

  serializeCourseBinaryMessage(data: any): Uint8Array {
    var course = new proto.Course()
    course.setId(data.id)
    course.setCourseName(data.courseName)
    course.setStudent(data.student)

    return course.serializeBinary()
  }

  serializeStudentBinaryMessage(data: any): Uint8Array {
    var student = new proto.Student()
    student.setId(data.id)
    student.setFirstName(data.firstName)
    student.setLastName(data.lastName)
    student.setEmail(data.email)
    student.setPhone(data.phone)

    return student.serializeBinary()
  }

  serializePhoneNumberBinaryMessage(data: any): Uint8Array {
    var phoneNumber = new proto.Student.PhoneNumber()
    phoneNumber.setNumber(data.number)
    phoneNumber.setType(data.type)

    return phoneNumber.serializeBinary()
  }

  deserializeCourseBinary(data: Uint8Array) {
    return proto.Course.deserializeBinary(data)
  }

  deserializeStudentBinary(data: Uint8Array) {
    return proto.Student.deserializeBinary(data)
  }

  deserializePhoneNumberBinary(data: Uint8Array) {
    return proto.Student.PhoneNumber.deserializeBinary(data)
  }

  getMessagePhoneType(a: number) : string {
    for(let prop in proto.Student.PhoneType) {
      if(a === proto.Student.PhoneType[prop])
        return prop
    }
    return ''
  }
}
