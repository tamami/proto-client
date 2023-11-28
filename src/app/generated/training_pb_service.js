// package: aikibo
// file: training.proto

var training_pb = require("./training_pb");
var google_protobuf_wrappers_pb = require("google-protobuf/google/protobuf/wrappers_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CourseService = (function () {
  function CourseService() {}
  CourseService.serviceName = "aikibo.CourseService";
  return CourseService;
}());

CourseService.getCourseById = {
  methodName: "getCourseById",
  service: CourseService,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_wrappers_pb.Int32Value,
  responseType: training_pb.Course
};

exports.CourseService = CourseService;

function CourseServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CourseServiceClient.prototype.getCourseById = function getCourseById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CourseService.getCourseById, {
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

exports.CourseServiceClient = CourseServiceClient;

