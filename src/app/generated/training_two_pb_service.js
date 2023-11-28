// package: tester
// file: training_two.proto

var training_two_pb = require("./training_two_pb");
var google_protobuf_wrappers_pb = require("google-protobuf/google/protobuf/wrappers_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CourseServiceTwo = (function () {
  function CourseServiceTwo() {}
  CourseServiceTwo.serviceName = "tester.CourseServiceTwo";
  return CourseServiceTwo;
}());

CourseServiceTwo.getCourseById = {
  methodName: "getCourseById",
  service: CourseServiceTwo,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_wrappers_pb.Int32Value,
  responseType: training_two_pb.CourseTwo
};

exports.CourseServiceTwo = CourseServiceTwo;

function CourseServiceTwoClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CourseServiceTwoClient.prototype.getCourseById = function getCourseById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CourseServiceTwo.getCourseById, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.CourseServiceTwoClient = CourseServiceTwoClient;

