// package: aikibo
// file: training.proto

import { Injectable } from '@angular/core';

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

@Injectable({
  providedIn: 'root'
})
export class Course extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getCourseName(): string;
  setCourseName(value: string): void;

  clearStudentList(): void;
  getStudentList(): Array<Student>;
  setStudentList(value: Array<Student>): void;
  addStudent(value?: Student, index?: number): Student;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Course.AsObject;
  static toObject(includeInstance: boolean, msg: Course): Course.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Course, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Course;
  static deserializeBinaryFromReader(message: Course, reader: jspb.BinaryReader): Course;
}

export namespace Course {
  export type AsObject = {
    id: number,
    courseName: string,
    studentList: Array<Student.AsObject>,
  }
}

export class Student extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  clearPhoneList(): void;
  getPhoneList(): Array<Student.PhoneNumber>;
  setPhoneList(value: Array<Student.PhoneNumber>): void;
  addPhone(value?: Student.PhoneNumber, index?: number): Student.PhoneNumber;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Student.AsObject;
  static toObject(includeInstance: boolean, msg: Student): Student.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Student, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Student;
  static deserializeBinaryFromReader(message: Student, reader: jspb.BinaryReader): Student;
}

export namespace Student {
  export type AsObject = {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phoneList: Array<Student.PhoneNumber.AsObject>,
  }

  export class PhoneNumber extends jspb.Message {
    getNumber(): string;
    setNumber(value: string): void;

    getType(): Student.PhoneTypeMap[keyof Student.PhoneTypeMap];
    setType(value: Student.PhoneTypeMap[keyof Student.PhoneTypeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PhoneNumber.AsObject;
    static toObject(includeInstance: boolean, msg: PhoneNumber): PhoneNumber.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PhoneNumber, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PhoneNumber;
    static deserializeBinaryFromReader(message: PhoneNumber, reader: jspb.BinaryReader): PhoneNumber;
  }

  export namespace PhoneNumber {
    export type AsObject = {
      number: string,
      type: Student.PhoneTypeMap[keyof Student.PhoneTypeMap],
    }
  }

  export interface PhoneTypeMap {
    MOBILE: 0;
    LANDLINE: 1;
  }

  export const PhoneType: PhoneTypeMap;
}

