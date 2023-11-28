// package: tester
// file: training_two.proto

import * as training_two_pb from "./training_two_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CourseServiceTwogetCourseById = {
  readonly methodName: string;
  readonly service: typeof CourseServiceTwo;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_wrappers_pb.Int32Value;
  readonly responseType: typeof training_two_pb.CourseTwo;
};

export class CourseServiceTwo {
  static readonly serviceName: string;
  static readonly getCourseById: CourseServiceTwogetCourseById;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class CourseServiceTwoClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getCourseById(
    requestMessage: google_protobuf_wrappers_pb.Int32Value,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: training_two_pb.CourseTwo|null) => void
  ): UnaryResponse;
  getCourseById(
    requestMessage: google_protobuf_wrappers_pb.Int32Value,
    callback: (error: ServiceError|null, responseMessage: training_two_pb.CourseTwo|null) => void
  ): UnaryResponse;
}

