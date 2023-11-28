// @generated by protobuf-ts 2.9.1
// @generated from protobuf file "training.proto" (package "aikibo", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message aikibo.Course
 */
export interface Course {
    /**
     * @generated from protobuf field: int32 id = 1;
     */
    id: number;
    /**
     * @generated from protobuf field: string course_name = 2;
     */
    courseName: string;
    /**
     * @generated from protobuf field: repeated aikibo.Student student = 3;
     */
    student: Student[];
}
/**
 * @generated from protobuf message aikibo.Student
 */
export interface Student {
    /**
     * @generated from protobuf field: int32 id = 1;
     */
    id: number;
    /**
     * @generated from protobuf field: string first_name = 2;
     */
    firstName: string;
    /**
     * @generated from protobuf field: string last_name = 3;
     */
    lastName: string;
    /**
     * @generated from protobuf field: string email = 4;
     */
    email: string;
    /**
     * @generated from protobuf field: repeated aikibo.Student.PhoneNumber phone = 5;
     */
    phone: Student_PhoneNumber[];
}
/**
 * @generated from protobuf message aikibo.Student.PhoneNumber
 */
export interface Student_PhoneNumber {
    /**
     * @generated from protobuf field: string number = 1;
     */
    number: string;
    /**
     * @generated from protobuf field: aikibo.Student.PhoneType type = 2;
     */
    type: Student_PhoneType;
}
/**
 * @generated from protobuf enum aikibo.Student.PhoneType
 */
export enum Student_PhoneType {
    /**
     * @generated from protobuf enum value: MOBILE = 0;
     */
    MOBILE = 0,
    /**
     * @generated from protobuf enum value: LANDLINE = 1;
     */
    LANDLINE = 1
}
// @generated message type with reflection information, may provide speed optimized methods
class Course$Type extends MessageType<Course> {
    constructor() {
        super("aikibo.Course", [
            { no: 1, name: "id", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "course_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "student", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Student }
        ]);
    }
    override create(value?: PartialMessage<Course>): Course {
        const message = { id: 0, courseName: "", student: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Course>(this, message, value);
        return message;
    }
    override internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Course): Course {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 id */ 1:
                    message.id = reader.int32();
                    break;
                case /* string course_name */ 2:
                    message.courseName = reader.string();
                    break;
                case /* repeated aikibo.Student student */ 3:
                    message.student.push(Student.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    override internalBinaryWrite(message: Course, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 id = 1; */
        if (message.id !== 0)
            writer.tag(1, WireType.Varint).int32(message.id);
        /* string course_name = 2; */
        if (message.courseName !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.courseName);
        /* repeated aikibo.Student student = 3; */
        for (let i = 0; i < message.student.length; i++)
            Student.internalBinaryWrite(message.student[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message aikibo.Course
 */
export const Course = new Course$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Student$Type extends MessageType<Student> {
    constructor() {
        super("aikibo.Student", [
            { no: 1, name: "id", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "first_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "last_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "email", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "phone", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Student_PhoneNumber }
        ]);
    }
    override create(value?: PartialMessage<Student>): Student {
        const message = { id: 0, firstName: "", lastName: "", email: "", phone: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Student>(this, message, value);
        return message;
    }
    override internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Student): Student {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 id */ 1:
                    message.id = reader.int32();
                    break;
                case /* string first_name */ 2:
                    message.firstName = reader.string();
                    break;
                case /* string last_name */ 3:
                    message.lastName = reader.string();
                    break;
                case /* string email */ 4:
                    message.email = reader.string();
                    break;
                case /* repeated aikibo.Student.PhoneNumber phone */ 5:
                    message.phone.push(Student_PhoneNumber.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    override internalBinaryWrite(message: Student, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 id = 1; */
        if (message.id !== 0)
            writer.tag(1, WireType.Varint).int32(message.id);
        /* string first_name = 2; */
        if (message.firstName !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.firstName);
        /* string last_name = 3; */
        if (message.lastName !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.lastName);
        /* string email = 4; */
        if (message.email !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.email);
        /* repeated aikibo.Student.PhoneNumber phone = 5; */
        for (let i = 0; i < message.phone.length; i++)
            Student_PhoneNumber.internalBinaryWrite(message.phone[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message aikibo.Student
 */
export const Student = new Student$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Student_PhoneNumber$Type extends MessageType<Student_PhoneNumber> {
    constructor() {
        super("aikibo.Student.PhoneNumber", [
            { no: 1, name: "number", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "type", kind: "enum", T: () => ["aikibo.Student.PhoneType", Student_PhoneType] }
        ]);
    }
    override create(value?: PartialMessage<Student_PhoneNumber>): Student_PhoneNumber {
        const message = { number: "", type: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Student_PhoneNumber>(this, message, value);
        return message;
    }
    override internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Student_PhoneNumber): Student_PhoneNumber {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string number */ 1:
                    message.number = reader.string();
                    break;
                case /* aikibo.Student.PhoneType type */ 2:
                    message.type = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    override internalBinaryWrite(message: Student_PhoneNumber, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string number = 1; */
        if (message.number !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.number);
        /* aikibo.Student.PhoneType type = 2; */
        if (message.type !== 0)
            writer.tag(2, WireType.Varint).int32(message.type);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message aikibo.Student.PhoneNumber
 */
export const Student_PhoneNumber = new Student_PhoneNumber$Type();