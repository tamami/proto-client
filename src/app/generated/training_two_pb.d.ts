// package: tester
// file: training_two.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class CourseTwo extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getCourseName(): string;
  setCourseName(value: string): void;

  clearStudentList(): void;
  getStudentList(): Array<StudentTwo>;
  setStudentList(value: Array<StudentTwo>): void;
  addStudent(value?: StudentTwo, index?: number): StudentTwo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CourseTwo.AsObject;
  static toObject(includeInstance: boolean, msg: CourseTwo): CourseTwo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CourseTwo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CourseTwo;
  static deserializeBinaryFromReader(message: CourseTwo, reader: jspb.BinaryReader): CourseTwo;
}

export namespace CourseTwo {
  export type AsObject = {
    id: number,
    courseName: string,
    studentList: Array<StudentTwo.AsObject>,
  }
}

export class StudentTwo extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  clearPhoneList(): void;
  getPhoneList(): Array<StudentTwo.PhoneNumber>;
  setPhoneList(value: Array<StudentTwo.PhoneNumber>): void;
  addPhone(value?: StudentTwo.PhoneNumber, index?: number): StudentTwo.PhoneNumber;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudentTwo.AsObject;
  static toObject(includeInstance: boolean, msg: StudentTwo): StudentTwo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StudentTwo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudentTwo;
  static deserializeBinaryFromReader(message: StudentTwo, reader: jspb.BinaryReader): StudentTwo;
}

export namespace StudentTwo {
  export type AsObject = {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phoneList: Array<StudentTwo.PhoneNumber.AsObject>,
  }

  export class PhoneNumber extends jspb.Message {
    getNumber(): string;
    setNumber(value: string): void;

    getType(): StudentTwo.PhoneTypeMap[keyof StudentTwo.PhoneTypeMap];
    setType(value: StudentTwo.PhoneTypeMap[keyof StudentTwo.PhoneTypeMap]): void;

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
      type: StudentTwo.PhoneTypeMap[keyof StudentTwo.PhoneTypeMap],
    }
  }

  export interface PhoneTypeMap {
    MOBILE: 0;
    LANDLINE: 1;
  }

  export const PhoneType: PhoneTypeMap;
}

