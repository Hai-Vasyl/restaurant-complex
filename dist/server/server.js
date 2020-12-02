/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./server/controllers/daterange.ts":
/*!*****************************************!*\
  !*** ./server/controllers/daterange.ts ***!
  \*****************************************/
/*! namespace exports */
/*! export book_dateranges [provided] [no usage info] [missing usage info prevents renaming] */
/*! export create_daterange [provided] [no usage info] [missing usage info prevents renaming] */
/*! export delete_daterange [provided] [no usage info] [missing usage info prevents renaming] */
/*! export get_dateranges [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ordered_dateranges [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"get_dateranges\": () => /* binding */ get_dateranges,\n/* harmony export */   \"create_daterange\": () => /* binding */ create_daterange,\n/* harmony export */   \"delete_daterange\": () => /* binding */ delete_daterange,\n/* harmony export */   \"book_dateranges\": () => /* binding */ book_dateranges,\n/* harmony export */   \"ordered_dateranges\": () => /* binding */ ordered_dateranges\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ \"./server/models/index.ts\");\n\n\n\n\n\nvar get_dateranges = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(req, res) {\n    var hrComplex, dateRanges;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            hrComplex = req.body.hrComplex;\n            _context.next = 4;\n            return _models__WEBPACK_IMPORTED_MODULE_2__.DateRange.find({\n              hrComplex: hrComplex\n            });\n\n          case 4:\n            dateRanges = _context.sent;\n            res.json(dateRanges);\n            _context.next = 11;\n            break;\n\n          case 8:\n            _context.prev = 8;\n            _context.t0 = _context[\"catch\"](0);\n            res.status(400).json(\"Getting DateRanges error: \".concat(_context.t0.message));\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 8]]);\n  }));\n\n  return function get_dateranges(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar create_daterange = /*#__PURE__*/function () {\n  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(req, res) {\n    var dateRange, newDateRange;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            dateRange = new _models__WEBPACK_IMPORTED_MODULE_2__.DateRange(req.body);\n            _context2.next = 4;\n            return dateRange.save();\n\n          case 4:\n            newDateRange = _context2.sent;\n            res.status(201).json({\n              dateRange: newDateRange\n            });\n            _context2.next = 11;\n            break;\n\n          case 8:\n            _context2.prev = 8;\n            _context2.t0 = _context2[\"catch\"](0);\n            res.status(400).json(\"Creating DateRange error: \".concat(_context2.t0.message));\n\n          case 11:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[0, 8]]);\n  }));\n\n  return function create_daterange(_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}();\nvar delete_daterange = /*#__PURE__*/function () {\n  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(req, res) {\n    var dateId;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.prev = 0;\n            dateId = req.params.dateId;\n            _context3.next = 4;\n            return _models__WEBPACK_IMPORTED_MODULE_2__.DateRange.findByIdAndDelete(dateId);\n\n          case 4:\n            res.json({\n              message: \"Date range deleted successfully\"\n            });\n            _context3.next = 10;\n            break;\n\n          case 7:\n            _context3.prev = 7;\n            _context3.t0 = _context3[\"catch\"](0);\n            res.status(400).json(\"Deleting DateRange error: \".concat(_context3.t0.message));\n\n          case 10:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[0, 7]]);\n  }));\n\n  return function delete_daterange(_x5, _x6) {\n    return _ref3.apply(this, arguments);\n  };\n}();\nvar book_dateranges = /*#__PURE__*/function () {\n  var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(req, res) {\n    var _req$body, dates, hrComplex, _req$body$user, firstname, lastname, phone, userId, dateRanges, isBooked, i, j, _i, order;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.prev = 0;\n            _req$body = req.body, dates = _req$body.dates, hrComplex = _req$body.hrComplex, _req$body$user = _req$body.user, firstname = _req$body$user.firstname, lastname = _req$body$user.lastname, phone = _req$body$user.phone;\n            userId = req.userId;\n            _context4.next = 5;\n            return _models__WEBPACK_IMPORTED_MODULE_2__.DateRange.find({\n              hrComplex: hrComplex\n            });\n\n          case 5:\n            dateRanges = _context4.sent;\n            _context4.next = 8;\n            return _models__WEBPACK_IMPORTED_MODULE_2__.User.updateOne({\n              _id: userId\n            }, {\n              firstname: firstname,\n              lastname: lastname,\n              phone: phone\n            });\n\n          case 8:\n            isBooked = false;\n\n            for (i = 0; i < dateRanges.length; i++) {\n              for (j = 0; j < dates.length; j++) {\n                if (dateRanges[i]._id === dates[j]._id && dateRanges[i].booked) {\n                  isBooked = true;\n                  dates[j].booked = true;\n                }\n              }\n            }\n\n            if (!isBooked) {\n              _context4.next = 12;\n              break;\n            }\n\n            return _context4.abrupt(\"return\", res.json({\n              dates: dates,\n              message: \"Один або більше діапазонів дат вже заброньовані!\"\n            }));\n\n          case 12:\n            _i = 0;\n\n          case 13:\n            if (!(_i < dates.length)) {\n              _context4.next = 22;\n              break;\n            }\n\n            _context4.next = 16;\n            return _models__WEBPACK_IMPORTED_MODULE_2__.DateRange.findByIdAndUpdate(dates[_i]._id, {\n              booked: true\n            });\n\n          case 16:\n            order = new _models__WEBPACK_IMPORTED_MODULE_2__.Order({\n              buyer: userId,\n              hrComplex: hrComplex,\n              price: dates[_i].price,\n              settlement: dates[_i].settlement,\n              eviction: dates[_i].eviction,\n              date: new Date()\n            });\n            _context4.next = 19;\n            return order.save();\n\n          case 19:\n            _i++;\n            _context4.next = 13;\n            break;\n\n          case 22:\n            res.json({\n              message: \"Date range updated successfully\"\n            });\n            _context4.next = 28;\n            break;\n\n          case 25:\n            _context4.prev = 25;\n            _context4.t0 = _context4[\"catch\"](0);\n            res.status(400).json(\"Booking DateRange error: \".concat(_context4.t0.message));\n\n          case 28:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4, null, [[0, 25]]);\n  }));\n\n  return function book_dateranges(_x7, _x8) {\n    return _ref4.apply(this, arguments);\n  };\n}();\nvar ordered_dateranges = /*#__PURE__*/function () {\n  var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(req, res) {\n    var userId, orders;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            _context5.prev = 0;\n            userId = req.userId;\n            _context5.next = 4;\n            return _models__WEBPACK_IMPORTED_MODULE_2__.Order.find({\n              buyer: userId\n            });\n\n          case 4:\n            orders = _context5.sent;\n            res.json(orders);\n            _context5.next = 11;\n            break;\n\n          case 8:\n            _context5.prev = 8;\n            _context5.t0 = _context5[\"catch\"](0);\n            res.status(400).json(\"Getting ordered DateRange error: \".concat(_context5.t0.message));\n\n          case 11:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5, null, [[0, 8]]);\n  }));\n\n  return function ordered_dateranges(_x9, _x10) {\n    return _ref5.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack://restaurant_complex/./server/controllers/daterange.ts?");

/***/ }),

/***/ "./server/controllers/hrcomplex.ts":
/*!*****************************************!*\
  !*** ./server/controllers/hrcomplex.ts ***!
  \*****************************************/
/*! namespace exports */
/*! export create_hrcomplex [provided] [no usage info] [missing usage info prevents renaming] */
/*! export get_hrcomplex [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"create_hrcomplex\": () => /* binding */ create_hrcomplex,\n/* harmony export */   \"get_hrcomplex\": () => /* binding */ get_hrcomplex\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ \"./server/models/index.ts\");\n\n\n\nvar create_hrcomplex = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(req, res) {\n    var hrcomplex, newHrcomplex;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            hrcomplex = new _models__WEBPACK_IMPORTED_MODULE_2__.HRcomplex(req.body);\n            _context.next = 4;\n            return hrcomplex.save();\n\n          case 4:\n            newHrcomplex = _context.sent;\n            res.status(201).json(newHrcomplex._id);\n            _context.next = 11;\n            break;\n\n          case 8:\n            _context.prev = 8;\n            _context.t0 = _context[\"catch\"](0);\n            res.status(400).json(\"Creating HRcomplex error: \".concat(_context.t0.message));\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 8]]);\n  }));\n\n  return function create_hrcomplex(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar get_hrcomplex = /*#__PURE__*/function () {\n  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(req, res) {\n    var hrcomplex;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            _context2.next = 3;\n            return _models__WEBPACK_IMPORTED_MODULE_2__.HRcomplex.findById(req.body.hrComplex);\n\n          case 3:\n            hrcomplex = _context2.sent;\n            res.status(200).json(hrcomplex);\n            _context2.next = 10;\n            break;\n\n          case 7:\n            _context2.prev = 7;\n            _context2.t0 = _context2[\"catch\"](0);\n            res.status(400).json(\"Getting HRcomplex error: \".concat(_context2.t0.message));\n\n          case 10:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[0, 7]]);\n  }));\n\n  return function get_hrcomplex(_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack://restaurant_complex/./server/controllers/hrcomplex.ts?");

/***/ }),

/***/ "./server/controllers/image.ts":
/*!*************************************!*\
  !*** ./server/controllers/image.ts ***!
  \*************************************/
/*! namespace exports */
/*! export delete_image [provided] [no usage info] [missing usage info prevents renaming] */
/*! export get_images [provided] [no usage info] [missing usage info prevents renaming] */
/*! export update_image [provided] [no usage info] [missing usage info prevents renaming] */
/*! export upload_image [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"upload_image\": () => /* binding */ upload_image,\n/* harmony export */   \"delete_image\": () => /* binding */ delete_image,\n/* harmony export */   \"get_images\": () => /* binding */ get_images,\n/* harmony export */   \"update_image\": () => /* binding */ update_image\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ \"./server/models/index.ts\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n(0,dotenv__WEBPACK_IMPORTED_MODULE_4__.config)();\nvar _process$env = process.env,\n    AWS_ID = _process$env.AWS_ID,\n    AWS_SECRET = _process$env.AWS_SECRET,\n    AWS_BUCKET = _process$env.AWS_BUCKET;\nvar s3 = new (aws_sdk__WEBPACK_IMPORTED_MODULE_3___default().S3)({\n  accessKeyId: AWS_ID,\n  secretAccessKey: AWS_SECRET\n});\nvar upload_image = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(req, res) {\n    var file, _req$body, hrComplex, title, description, imageParts, imageExt, params;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            try {\n              file = req.file;\n              _req$body = req.body, hrComplex = _req$body.hrComplex, title = _req$body.title, description = _req$body.description;\n              imageParts = file.originalname.split(\".\");\n              imageExt = imageParts[imageParts.length - 1];\n              params = {\n                Bucket: AWS_BUCKET,\n                Key: \"\".concat((0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(), \".\").concat(imageExt),\n                Body: file.buffer\n              }; // @ts-ignore\n\n              s3.upload(params, /*#__PURE__*/function () {\n                var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(error, data) {\n                  var image, newImage;\n                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n                    while (1) {\n                      switch (_context.prev = _context.next) {\n                        case 0:\n                          if (!error) {\n                            _context.next = 2;\n                            break;\n                          }\n\n                          return _context.abrupt(\"return\", res.status(400).json(\"Uploading file error: \".concat(error.message)));\n\n                        case 2:\n                          image = new _models__WEBPACK_IMPORTED_MODULE_2__.Image({\n                            path: data.Location,\n                            hrComplex: hrComplex,\n                            title: title,\n                            description: description,\n                            date: new Date()\n                          });\n                          _context.next = 5;\n                          return image.save();\n\n                        case 5:\n                          newImage = _context.sent;\n                          res.status(200).send(newImage);\n\n                        case 7:\n                        case \"end\":\n                          return _context.stop();\n                      }\n                    }\n                  }, _callee);\n                }));\n\n                return function (_x3, _x4) {\n                  return _ref2.apply(this, arguments);\n                };\n              }());\n            } catch (error) {\n              res.json(\"Upload image error: \".concat(error.message));\n            }\n\n          case 1:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function upload_image(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar delete_image = /*#__PURE__*/function () {\n  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(req, res) {\n    var key;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.prev = 0;\n            key = req.params.key; // @ts-ignore\n\n            _context3.next = 4;\n            return s3.deleteObject({\n              Key: key,\n              Bucket: AWS_BUCKET\n            }).promise();\n\n          case 4:\n            return _context3.abrupt(\"return\", {});\n\n          case 7:\n            _context3.prev = 7;\n            _context3.t0 = _context3[\"catch\"](0);\n            res.json(\"Deleting image error: \".concat(_context3.t0.message));\n\n          case 10:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[0, 7]]);\n  }));\n\n  return function delete_image(_x5, _x6) {\n    return _ref3.apply(this, arguments);\n  };\n}();\nvar get_images = /*#__PURE__*/function () {\n  var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(req, res) {\n    var hrComplex, images;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.prev = 0;\n            hrComplex = req.body.hrComplex;\n            _context4.next = 4;\n            return _models__WEBPACK_IMPORTED_MODULE_2__.Image.find({\n              hrComplex: hrComplex\n            }).sort({\n              date: -1\n            });\n\n          case 4:\n            images = _context4.sent;\n            res.json(images);\n            _context4.next = 11;\n            break;\n\n          case 8:\n            _context4.prev = 8;\n            _context4.t0 = _context4[\"catch\"](0);\n            res.json(\"Getting images error: \".concat(_context4.t0.message));\n\n          case 11:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4, null, [[0, 8]]);\n  }));\n\n  return function get_images(_x7, _x8) {\n    return _ref4.apply(this, arguments);\n  };\n}();\nvar update_image = /*#__PURE__*/function () {\n  var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(req, res) {\n    var _req$body2, title, description, imageId, image, updatedImage;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            _context5.prev = 0;\n            _req$body2 = req.body, title = _req$body2.title, description = _req$body2.description;\n            imageId = req.params.imageId;\n            _context5.next = 5;\n            return _models__WEBPACK_IMPORTED_MODULE_2__.Image.updateOne({\n              _id: imageId\n            }, {\n              title: title,\n              description: description\n            });\n\n          case 5:\n            image = _context5.sent;\n            _context5.next = 8;\n            return _models__WEBPACK_IMPORTED_MODULE_2__.Image.findById(imageId);\n\n          case 8:\n            updatedImage = _context5.sent;\n            res.json(updatedImage);\n            _context5.next = 15;\n            break;\n\n          case 12:\n            _context5.prev = 12;\n            _context5.t0 = _context5[\"catch\"](0);\n            res.json(\"Updating image error: \".concat(_context5.t0.message));\n\n          case 15:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5, null, [[0, 12]]);\n  }));\n\n  return function update_image(_x9, _x10) {\n    return _ref5.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack://restaurant_complex/./server/controllers/image.ts?");

/***/ }),

/***/ "./server/controllers/response.ts":
/*!****************************************!*\
  !*** ./server/controllers/response.ts ***!
  \****************************************/
/*! namespace exports */
/*! export create_response [provided] [no usage info] [missing usage info prevents renaming] */
/*! export delete_response [provided] [no usage info] [missing usage info prevents renaming] */
/*! export get_responses [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"create_response\": () => /* binding */ create_response,\n/* harmony export */   \"get_responses\": () => /* binding */ get_responses,\n/* harmony export */   \"delete_response\": () => /* binding */ delete_response\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models */ \"./server/models/index.ts\");\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar create_response = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(req, res) {\n    var userId, _req$body, hrComplex, content, responseId, response, newResponse;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            userId = req.userId;\n            _req$body = req.body, hrComplex = _req$body.hrComplex, content = _req$body.content, responseId = _req$body.response;\n            response = new _models__WEBPACK_IMPORTED_MODULE_4__.Response({\n              hrComplex: hrComplex,\n              owner: userId,\n              content: content,\n              date: new Date(),\n              response: responseId\n            });\n            _context.next = 6;\n            return response.save();\n\n          case 6:\n            newResponse = _context.sent;\n            res.status(201).json(newResponse);\n            _context.next = 13;\n            break;\n\n          case 10:\n            _context.prev = 10;\n            _context.t0 = _context[\"catch\"](0);\n            res.status(400).json(\"Creating response error: \".concat(_context.t0.message));\n\n          case 13:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 10]]);\n  }));\n\n  return function create_response(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar get_responses = /*#__PURE__*/function () {\n  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(req, res) {\n    var hrComplex, responses, responsesCopy, i, answers;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            hrComplex = req.body.hrComplex;\n            _context2.next = 4;\n            return _models__WEBPACK_IMPORTED_MODULE_4__.Response.find({\n              hrComplex: hrComplex,\n              response: null\n            }).populate({\n              path: \"owner\",\n              select: \"username ava role\"\n            }).sort({\n              date: -1\n            });\n\n          case 4:\n            responses = _context2.sent;\n            responsesCopy = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(responses);\n            i = 0;\n\n          case 7:\n            if (!(i < responsesCopy.length)) {\n              _context2.next = 15;\n              break;\n            }\n\n            _context2.next = 10;\n            return _models__WEBPACK_IMPORTED_MODULE_4__.Response.find({\n              response: responsesCopy[i]._id\n            }).populate({\n              path: \"owner\",\n              select: \"username ava role\"\n            }).sort({\n              date: -1\n            });\n\n          case 10:\n            answers = _context2.sent;\n            responsesCopy[i] = _objectSpread(_objectSpread({}, responsesCopy[i]._doc), {}, {\n              answers: answers\n            });\n\n          case 12:\n            i++;\n            _context2.next = 7;\n            break;\n\n          case 15:\n            res.json(responsesCopy);\n            _context2.next = 21;\n            break;\n\n          case 18:\n            _context2.prev = 18;\n            _context2.t0 = _context2[\"catch\"](0);\n            res.status(400).json(\"Getting responses error: \".concat(_context2.t0.message));\n\n          case 21:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[0, 18]]);\n  }));\n\n  return function get_responses(_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}();\nvar delete_response = /*#__PURE__*/function () {\n  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(req, res) {\n    var responseId, userId;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.prev = 0;\n            responseId = req.params.responseId;\n            userId = req.userId;\n            _context3.next = 5;\n            return _models__WEBPACK_IMPORTED_MODULE_4__.Response.findOneAndDelete({\n              _id: responseId,\n              owner: userId\n            });\n\n          case 5:\n            res.json({\n              message: \"Response deleted successfully!\"\n            });\n            _context3.next = 11;\n            break;\n\n          case 8:\n            _context3.prev = 8;\n            _context3.t0 = _context3[\"catch\"](0);\n            res.status(400).json(\"Deleting response error: \".concat(_context3.t0.message));\n\n          case 11:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[0, 8]]);\n  }));\n\n  return function delete_response(_x5, _x6) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack://restaurant_complex/./server/controllers/response.ts?");

/***/ }),

/***/ "./server/controllers/users.ts":
/*!*************************************!*\
  !*** ./server/controllers/users.ts ***!
  \*************************************/
/*! namespace exports */
/*! export change_avatar [provided] [no usage info] [missing usage info prevents renaming] */
/*! export get_user [provided] [no usage info] [missing usage info prevents renaming] */
/*! export get_users [provided] [no usage info] [missing usage info prevents renaming] */
/*! export login_user [provided] [no usage info] [missing usage info prevents renaming] */
/*! export register_user [provided] [no usage info] [missing usage info prevents renaming] */
/*! export update_user [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"register_user\": () => /* binding */ register_user,\n/* harmony export */   \"login_user\": () => /* binding */ login_user,\n/* harmony export */   \"get_user\": () => /* binding */ get_user,\n/* harmony export */   \"update_user\": () => /* binding */ update_user,\n/* harmony export */   \"get_users\": () => /* binding */ get_users,\n/* harmony export */   \"change_avatar\": () => /* binding */ change_avatar\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models */ \"./server/models/index.ts\");\n/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express-validator */ \"express-validator\");\n/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express_validator__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n(0,dotenv__WEBPACK_IMPORTED_MODULE_7__.config)();\nvar _process$env = process.env,\n    AWS_ID = _process$env.AWS_ID,\n    AWS_SECRET = _process$env.AWS_SECRET,\n    AWS_BUCKET = _process$env.AWS_BUCKET,\n    JWT_SECRET = _process$env.JWT_SECRET;\nvar s3 = new (aws_sdk__WEBPACK_IMPORTED_MODULE_8___default().S3)({\n  accessKeyId: AWS_ID,\n  secretAccessKey: AWS_SECRET\n});\n\nvar checkUniqueCred = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(username, email, userId) {\n    var updatingUser,\n        queryUsername,\n        queryEmail,\n        userByUsername,\n        userByemail,\n        isUserByUsername,\n        isUserByEmail,\n        _args = arguments;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            updatingUser = _args.length > 3 && _args[3] !== undefined ? _args[3] : false;\n            queryUsername = updatingUser ? {\n              _id: {\n                $ne: userId\n              },\n              username: username\n            } : {\n              username: username\n            };\n            queryEmail = updatingUser ? {\n              _id: {\n                $ne: userId\n              },\n              email: email\n            } : {\n              email: email\n            };\n            _context.next = 5;\n            return _models__WEBPACK_IMPORTED_MODULE_3__.User.findOne(queryUsername);\n\n          case 5:\n            userByUsername = _context.sent;\n            _context.next = 8;\n            return _models__WEBPACK_IMPORTED_MODULE_3__.User.findOne(queryEmail);\n\n          case 8:\n            userByemail = _context.sent;\n            isUserByUsername = userByUsername && Object.values(userByUsername).length;\n            isUserByEmail = userByemail && Object.values(userByemail).length;\n\n            if (!(isUserByUsername && isUserByEmail)) {\n              _context.next = 15;\n              break;\n            }\n\n            return _context.abrupt(\"return\", {\n              errors: [{\n                msg: \"Ім'я користувача не унікальне!\",\n                param: \"username\"\n              }, {\n                msg: \"Електронна пошта не є унікальною!\",\n                param: \"email\"\n              }]\n            });\n\n          case 15:\n            if (!isUserByUsername) {\n              _context.next = 19;\n              break;\n            }\n\n            return _context.abrupt(\"return\", {\n              errors: [{\n                msg: \"Користувач з цим іменем користувача вже існує!\",\n                param: \"username\"\n              }]\n            });\n\n          case 19:\n            if (!isUserByEmail) {\n              _context.next = 21;\n              break;\n            }\n\n            return _context.abrupt(\"return\", {\n              errors: [{\n                msg: \"Користувач з цією електронною поштою вже існує!\",\n                param: \"email\"\n              }]\n            });\n\n          case 21:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function checkUniqueCred(_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar register_user = /*#__PURE__*/function () {\n  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(req, res) {\n    var errors, _req$body, username, email, password, role, ava, errorMsgs, hashedPassword, user, newUser, token;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            errors = (0,express_validator__WEBPACK_IMPORTED_MODULE_4__.validationResult)(req);\n\n            if (errors.isEmpty()) {\n              _context2.next = 4;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", res.status(400).json({\n              errors: errors.array()\n            }));\n\n          case 4:\n            _req$body = req.body, username = _req$body.username, email = _req$body.email, password = _req$body.password, role = _req$body.role, ava = _req$body.ava;\n            _context2.next = 7;\n            return checkUniqueCred(username, email);\n\n          case 7:\n            errorMsgs = _context2.sent;\n\n            if (errorMsgs && errorMsgs.errors && errorMsgs.errors.length) {\n              res.staus(400).json(errorMsgs);\n            }\n\n            _context2.next = 11;\n            return bcrypt__WEBPACK_IMPORTED_MODULE_5___default().hash(password, 12);\n\n          case 11:\n            hashedPassword = _context2.sent;\n            user = new _models__WEBPACK_IMPORTED_MODULE_3__.User({\n              username: username,\n              email: email,\n              role: role,\n              password: hashedPassword,\n              ava: ava,\n              date: new Date()\n            });\n            _context2.next = 15;\n            return user.save();\n\n          case 15:\n            newUser = _context2.sent;\n            token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_6___default().sign({\n              userId: newUser._id\n            }, JWT_SECRET);\n            res.status(201).json({\n              token: token,\n              user: newUser\n            });\n            _context2.next = 23;\n            break;\n\n          case 20:\n            _context2.prev = 20;\n            _context2.t0 = _context2[\"catch\"](0);\n            res.status(400).json(\"Register user error: \".concat(_context2.t0.message));\n\n          case 23:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[0, 20]]);\n  }));\n\n  return function register_user(_x4, _x5) {\n    return _ref2.apply(this, arguments);\n  };\n}();\nvar login_user = /*#__PURE__*/function () {\n  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(req, res) {\n    var errors, _req$body2, email, password, user, isUser, comparedPassword, token;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.prev = 0;\n            errors = (0,express_validator__WEBPACK_IMPORTED_MODULE_4__.validationResult)(req);\n\n            if (errors.isEmpty()) {\n              _context3.next = 4;\n              break;\n            }\n\n            return _context3.abrupt(\"return\", res.status(400).json({\n              errors: errors.array()\n            }));\n\n          case 4:\n            _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;\n            _context3.next = 7;\n            return _models__WEBPACK_IMPORTED_MODULE_3__.User.findOne({\n              email: email\n            });\n\n          case 7:\n            user = _context3.sent;\n            isUser = user && Object.values(user).length;\n\n            if (isUser) {\n              _context3.next = 11;\n              break;\n            }\n\n            return _context3.abrupt(\"return\", res.status(400).json({\n              errors: [{\n                msg: \"Користувач з цією електронною поштою не існує!\",\n                param: \"email\"\n              }]\n            }));\n\n          case 11:\n            _context3.next = 13;\n            return bcrypt__WEBPACK_IMPORTED_MODULE_5___default().compare(password, user.password);\n\n          case 13:\n            comparedPassword = _context3.sent;\n\n            if (comparedPassword) {\n              _context3.next = 16;\n              break;\n            }\n\n            return _context3.abrupt(\"return\", res.status(400).json({\n              errors: [{\n                msg: \"Пароль не правильний, спробуйте ще раз!\",\n                param: \"password\"\n              }]\n            }));\n\n          case 16:\n            token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_6___default().sign({\n              userId: user._id\n            }, JWT_SECRET);\n            res.status(201).json({\n              token: token,\n              user: user\n            });\n            _context3.next = 23;\n            break;\n\n          case 20:\n            _context3.prev = 20;\n            _context3.t0 = _context3[\"catch\"](0);\n            res.status(400).json(\"Login user error: \".concat(_context3.t0.message));\n\n          case 23:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[0, 20]]);\n  }));\n\n  return function login_user(_x6, _x7) {\n    return _ref3.apply(this, arguments);\n  };\n}();\nvar get_user = /*#__PURE__*/function () {\n  var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(req, res) {\n    var userId, user;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.prev = 0;\n            userId = req.params.userId;\n            _context4.next = 4;\n            return _models__WEBPACK_IMPORTED_MODULE_3__.User.findById(userId).select(\"-password\");\n\n          case 4:\n            user = _context4.sent;\n            res.json(user);\n            _context4.next = 11;\n            break;\n\n          case 8:\n            _context4.prev = 8;\n            _context4.t0 = _context4[\"catch\"](0);\n            res.status(400).json(\"Getting user info error: \".concat(_context4.t0.message));\n\n          case 11:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4, null, [[0, 8]]);\n  }));\n\n  return function get_user(_x8, _x9) {\n    return _ref4.apply(this, arguments);\n  };\n}();\nvar update_user = /*#__PURE__*/function () {\n  var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee5(req, res) {\n    var errors, _req$body3, username, email, firstname, lastname, phone, bio, birth, password, userId, errorMsgs, updateFields, newPassword, updatedUser;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            _context5.prev = 0;\n            errors = (0,express_validator__WEBPACK_IMPORTED_MODULE_4__.validationResult)(req);\n\n            if (errors.isEmpty()) {\n              _context5.next = 4;\n              break;\n            }\n\n            return _context5.abrupt(\"return\", res.status(400).json({\n              errors: errors.array()\n            }));\n\n          case 4:\n            _req$body3 = req.body, username = _req$body3.username, email = _req$body3.email, firstname = _req$body3.firstname, lastname = _req$body3.lastname, phone = _req$body3.phone, bio = _req$body3.bio, birth = _req$body3.birth, password = _req$body3.password;\n            userId = req.userId;\n            _context5.next = 8;\n            return checkUniqueCred(username, email, userId, true);\n\n          case 8:\n            errorMsgs = _context5.sent;\n\n            if (!(errorMsgs && errorMsgs.errors && errorMsgs.errors.length)) {\n              _context5.next = 11;\n              break;\n            }\n\n            return _context5.abrupt(\"return\", res.status(400).json(errorMsgs));\n\n          case 11:\n            updateFields = {\n              username: username,\n              email: email,\n              firstname: firstname,\n              lastname: lastname,\n              phone: phone,\n              bio: bio,\n              birth: birth,\n              date: new Date()\n            };\n\n            if (!(password !== undefined)) {\n              _context5.next = 17;\n              break;\n            }\n\n            _context5.next = 15;\n            return bcrypt__WEBPACK_IMPORTED_MODULE_5___default().hash(password, 12);\n\n          case 15:\n            newPassword = _context5.sent;\n            updateFields = _objectSpread(_objectSpread({}, updateFields), {}, {\n              password: newPassword\n            });\n\n          case 17:\n            _context5.next = 19;\n            return _models__WEBPACK_IMPORTED_MODULE_3__.User.findByIdAndUpdate(userId, _objectSpread({}, updateFields));\n\n          case 19:\n            _context5.next = 21;\n            return _models__WEBPACK_IMPORTED_MODULE_3__.User.findById(userId);\n\n          case 21:\n            updatedUser = _context5.sent;\n            res.json(updatedUser);\n            _context5.next = 28;\n            break;\n\n          case 25:\n            _context5.prev = 25;\n            _context5.t0 = _context5[\"catch\"](0);\n            res.status(400).json(\"Updating user info error: \".concat(_context5.t0.message));\n\n          case 28:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5, null, [[0, 25]]);\n  }));\n\n  return function update_user(_x10, _x11) {\n    return _ref5.apply(this, arguments);\n  };\n}();\nvar get_users = /*#__PURE__*/function () {\n  var _ref6 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee6(req, res) {\n    var users;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee6$(_context6) {\n      while (1) {\n        switch (_context6.prev = _context6.next) {\n          case 0:\n            _context6.prev = 0;\n            _context6.next = 3;\n            return _models__WEBPACK_IMPORTED_MODULE_3__.User.find().select(\"username email ava role date\");\n\n          case 3:\n            users = _context6.sent;\n            res.json(users);\n            _context6.next = 10;\n            break;\n\n          case 7:\n            _context6.prev = 7;\n            _context6.t0 = _context6[\"catch\"](0);\n            res.status(400).json(\"Getting all users error: \".concat(_context6.t0.message));\n\n          case 10:\n          case \"end\":\n            return _context6.stop();\n        }\n      }\n    }, _callee6, null, [[0, 7]]);\n  }));\n\n  return function get_users(_x12, _x13) {\n    return _ref6.apply(this, arguments);\n  };\n}();\nvar change_avatar = /*#__PURE__*/function () {\n  var _ref7 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee8(req, res) {\n    var file, userId, user, userAvaParts, imageParts, imageExt, params;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee8$(_context8) {\n      while (1) {\n        switch (_context8.prev = _context8.next) {\n          case 0:\n            _context8.prev = 0;\n            file = req.file, userId = req.userId;\n\n            if (Object.keys(file).length) {\n              _context8.next = 4;\n              break;\n            }\n\n            return _context8.abrupt(\"return\", res.status(400).json(\"File doesn't exists!\"));\n\n          case 4:\n            _context8.next = 6;\n            return _models__WEBPACK_IMPORTED_MODULE_3__.User.findById(userId);\n\n          case 6:\n            user = _context8.sent;\n\n            if (user && user.ava) {\n              _context8.next = 9;\n              break;\n            }\n\n            return _context8.abrupt(\"return\", res.status(400).json(\"User doesn't exists!\"));\n\n          case 9:\n            userAvaParts = user.ava.split(\"/\");\n            userAvaParts = userAvaParts[userAvaParts.length - 1];\n\n            if (!(userAvaParts !== \"114-1149878_setting-user-avatar-in-specific-size-without-breaking.png\")) {\n              _context8.next = 14;\n              break;\n            }\n\n            _context8.next = 14;\n            return s3.deleteObject({\n              Key: userAvaParts,\n              Bucket: AWS_BUCKET\n            }).promise();\n\n          case 14:\n            imageParts = file.originalname.split(\".\");\n            imageExt = imageParts[imageParts.length - 1];\n            params = {\n              Bucket: AWS_BUCKET,\n              Key: \"\".concat((0,uuid__WEBPACK_IMPORTED_MODULE_9__.v4)(), \".\").concat(imageExt),\n              Body: file.buffer\n            }; // @ts-ignore\n\n            s3.upload(params, /*#__PURE__*/function () {\n              var _ref8 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee7(error, data) {\n                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee7$(_context7) {\n                  while (1) {\n                    switch (_context7.prev = _context7.next) {\n                      case 0:\n                        if (!error) {\n                          _context7.next = 2;\n                          break;\n                        }\n\n                        return _context7.abrupt(\"return\", res.status(400).json(\"Updating user avatar error: \".concat(error.message)));\n\n                      case 2:\n                        _context7.next = 4;\n                        return _models__WEBPACK_IMPORTED_MODULE_3__.User.updateOne({\n                          _id: userId\n                        }, {\n                          ava: data.Location\n                        });\n\n                      case 4:\n                        res.json({\n                          ava: data.Location\n                        });\n\n                      case 5:\n                      case \"end\":\n                        return _context7.stop();\n                    }\n                  }\n                }, _callee7);\n              }));\n\n              return function (_x16, _x17) {\n                return _ref8.apply(this, arguments);\n              };\n            }());\n            _context8.next = 23;\n            break;\n\n          case 20:\n            _context8.prev = 20;\n            _context8.t0 = _context8[\"catch\"](0);\n            res.status(400).json(\"Changing avatar user error: \".concat(_context8.t0.message));\n\n          case 23:\n          case \"end\":\n            return _context8.stop();\n        }\n      }\n    }, _callee8, null, [[0, 20]]);\n  }));\n\n  return function change_avatar(_x14, _x15) {\n    return _ref7.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack://restaurant_complex/./server/controllers/users.ts?");

/***/ }),

/***/ "./server/index.ts":
/*!*************************!*\
  !*** ./server/index.ts ***!
  \*************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _routes_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/users */ \"./server/routes/users.ts\");\n/* harmony import */ var _routes_daterange__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/daterange */ \"./server/routes/daterange.ts\");\n/* harmony import */ var _routes_hrcomplex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/hrcomplex */ \"./server/routes/hrcomplex.ts\");\n/* harmony import */ var _routes_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/image */ \"./server/routes/image.ts\");\n/* harmony import */ var _routes_response__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/response */ \"./server/routes/response.ts\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\n\n\n\n(0,dotenv__WEBPACK_IMPORTED_MODULE_11__.config)();\nvar _process$env = process.env,\n    PORT = _process$env.PORT,\n    MONGO_USER = _process$env.MONGO_USER,\n    MONGO_PASS = _process$env.MONGO_PASS,\n    MONGO_DB = _process$env.MONGO_DB,\n    NODE_ENV = \"development\";\n\n_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n  var app;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          app = express__WEBPACK_IMPORTED_MODULE_2___default()();\n          app.use(cors__WEBPACK_IMPORTED_MODULE_10___default()());\n          app.use(body_parser__WEBPACK_IMPORTED_MODULE_4___default().urlencoded({\n            extended: false\n          }));\n          app.use(body_parser__WEBPACK_IMPORTED_MODULE_4___default().json());\n          _context.next = 7;\n          return mongoose__WEBPACK_IMPORTED_MODULE_3___default().connect(\"mongodb+srv://\".concat(MONGO_USER, \":\").concat(MONGO_PASS, \"@cluster0.osxef.mongodb.net/\").concat(MONGO_DB, \"?retryWrites=true&w=majority\"), {\n            useCreateIndex: true,\n            useNewUrlParser: true,\n            useUnifiedTopology: true,\n            useFindAndModify: false\n          }, function () {\n            return console.log(\"MongoDB successfully connected!\");\n          });\n\n        case 7:\n          app.use(\"/auth\", _routes_users__WEBPACK_IMPORTED_MODULE_5__.default);\n          app.use(\"/daterange\", _routes_daterange__WEBPACK_IMPORTED_MODULE_6__.default);\n          app.use(\"/hrcomplex\", _routes_hrcomplex__WEBPACK_IMPORTED_MODULE_7__.default);\n          app.use(\"/image\", _routes_image__WEBPACK_IMPORTED_MODULE_8__.default);\n          app.use(\"/response\", _routes_response__WEBPACK_IMPORTED_MODULE_9__.default);\n\n          if (NODE_ENV === \"production\") {\n            app.use(express__WEBPACK_IMPORTED_MODULE_2___default().static(\"dist/client\"));\n          }\n\n          app.listen(PORT, function () {\n            return console.log(\"Server started on port: \".concat(PORT));\n          });\n          _context.next = 19;\n          break;\n\n        case 16:\n          _context.prev = 16;\n          _context.t0 = _context[\"catch\"](0);\n          console.error(\"Server error: \".concat(_context.t0.message));\n\n        case 19:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee, null, [[0, 16]]);\n}))();\n\n//# sourceURL=webpack://restaurant_complex/./server/index.ts?");

/***/ }),

/***/ "./server/middlewares/auth.middleware.ts":
/*!***********************************************!*\
  !*** ./server/middlewares/auth.middleware.ts ***!
  \***********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n(0,dotenv__WEBPACK_IMPORTED_MODULE_3__.config)();\nvar JWT_SECRET = process.env.JWT_SECRET;\n\nvar auth = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(req, res, next) {\n    var _auth, token, _jwt$verify, userId;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n\n            if (!(req.method === \"OPTIONS\")) {\n              _context.next = 3;\n              break;\n            }\n\n            return _context.abrupt(\"return\", next());\n\n          case 3:\n            _auth = req.headers.authorization;\n\n            if (_auth) {\n              _context.next = 6;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.status(401).json(\"Access denied!\"));\n\n          case 6:\n            token = _auth.split(\" \")[1];\n\n            if (token) {\n              _context.next = 9;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.status(401).json(\"Access denied!\"));\n\n          case 9:\n            _jwt$verify = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(token, JWT_SECRET), userId = _jwt$verify.userId;\n\n            if (userId) {\n              _context.next = 12;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.status(401).json(\"Access denied!\"));\n\n          case 12:\n            req.userId = userId;\n            next();\n            _context.next = 19;\n            break;\n\n          case 16:\n            _context.prev = 16;\n            _context.t0 = _context[\"catch\"](0);\n            res.status(401).json(\"Access denied, error: \".concat(_context.t0.message));\n\n          case 19:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 16]]);\n  }));\n\n  return function auth(_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);\n\n//# sourceURL=webpack://restaurant_complex/./server/middlewares/auth.middleware.ts?");

/***/ }),

/***/ "./server/models/DateRange.ts":
/*!************************************!*\
  !*** ./server/models/DateRange.ts ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar schema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  settlement: {\n    type: Date,\n    required: true\n  },\n  eviction: {\n    type: Date,\n    required: true\n  },\n  hrComplex: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Types.ObjectId,\n    ref: \"HRcomplex\",\n    required: true\n  },\n  booked: {\n    type: Boolean,\n    required: true,\n    \"default\": false\n  },\n  price: {\n    type: Number,\n    required: true\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"DateRange\", schema));\n\n//# sourceURL=webpack://restaurant_complex/./server/models/DateRange.ts?");

/***/ }),

/***/ "./server/models/HRcomplex.ts":
/*!************************************!*\
  !*** ./server/models/HRcomplex.ts ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar schema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  title: {\n    type: String,\n    required: true\n  },\n  location: {\n    type: String,\n    required: true\n  },\n  description: {\n    type: String,\n    required: true\n  },\n  food: {\n    type: String,\n    required: true\n  },\n  servicesIncluded: {\n    type: String,\n    required: true\n  },\n  services: {\n    type: String,\n    required: true\n  },\n  entertainment: {\n    type: String,\n    required: true\n  },\n  contacts: {\n    type: String,\n    required: true\n  },\n  road: {\n    type: String,\n    required: true\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"HRcomplex\", schema));\n\n//# sourceURL=webpack://restaurant_complex/./server/models/HRcomplex.ts?");

/***/ }),

/***/ "./server/models/Image.ts":
/*!********************************!*\
  !*** ./server/models/Image.ts ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar schema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  path: {\n    type: String,\n    required: true\n  },\n  hrComplex: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Types.ObjectId,\n    ref: \"HRcomplex\",\n    required: true\n  },\n  title: {\n    type: String,\n    \"default\": \"\"\n  },\n  description: {\n    type: String,\n    \"default\": \"\"\n  },\n  date: {\n    type: Date,\n    required: true\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Image\", schema));\n\n//# sourceURL=webpack://restaurant_complex/./server/models/Image.ts?");

/***/ }),

/***/ "./server/models/Order.ts":
/*!********************************!*\
  !*** ./server/models/Order.ts ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar schema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  buyer: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Types.ObjectId,\n    ref: \"User\",\n    required: true\n  },\n  hrComplex: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Types.ObjectId,\n    ref: \"HRcomplex\",\n    required: true\n  },\n  price: {\n    type: Number,\n    required: true\n  },\n  settlement: {\n    type: Date,\n    required: true\n  },\n  eviction: {\n    type: Date,\n    required: true\n  },\n  date: {\n    type: Date,\n    required: true\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Order\", schema));\n\n//# sourceURL=webpack://restaurant_complex/./server/models/Order.ts?");

/***/ }),

/***/ "./server/models/Response.ts":
/*!***********************************!*\
  !*** ./server/models/Response.ts ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar schema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  hrComplex: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Types.ObjectId,\n    ref: \"HRcomplex\",\n    required: true\n  },\n  owner: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Types.ObjectId,\n    ref: \"User\",\n    required: true\n  },\n  content: {\n    type: String,\n    required: true\n  },\n  date: {\n    type: Date,\n    required: true\n  },\n  response: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Types.ObjectId,\n    ref: \"Response\"\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Response\", schema));\n\n//# sourceURL=webpack://restaurant_complex/./server/models/Response.ts?");

/***/ }),

/***/ "./server/models/User.ts":
/*!*******************************!*\
  !*** ./server/models/User.ts ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar schema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  username: {\n    type: String,\n    required: true,\n    unique: true\n  },\n  email: {\n    type: String,\n    required: true,\n    unique: true\n  },\n  password: {\n    type: String,\n    required: true\n  },\n  ava: {\n    type: String,\n    required: true,\n    \"default\": \"https://restaurant-bucket.s3.eu-central-1.amazonaws.com/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png\"\n  },\n  firstname: {\n    type: String,\n    \"default\": \"\"\n  },\n  lastname: {\n    type: String,\n    \"default\": \"\"\n  },\n  phone: {\n    type: String,\n    \"default\": \"\"\n  },\n  bio: {\n    type: String,\n    \"default\": \"\"\n  },\n  birth: {\n    type: Date,\n    \"default\": \"\"\n  },\n  role: {\n    type: String,\n    required: true,\n    \"default\": \"user\",\n    \"enum\": [\"user\", \"admin\"]\n  },\n  date: {\n    type: Date,\n    required: true\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", schema));\n\n//# sourceURL=webpack://restaurant_complex/./server/models/User.ts?");

/***/ }),

/***/ "./server/models/index.ts":
/*!********************************!*\
  !*** ./server/models/index.ts ***!
  \********************************/
/*! namespace exports */
/*! export DateRange [provided] [no usage info] [missing usage info prevents renaming] -> ./server/models/DateRange.ts .default */
/*! export HRcomplex [provided] [no usage info] [missing usage info prevents renaming] -> ./server/models/HRcomplex.ts .default */
/*! export Image [provided] [no usage info] [missing usage info prevents renaming] -> ./server/models/Image.ts .default */
/*! export Order [provided] [no usage info] [missing usage info prevents renaming] -> ./server/models/Order.ts .default */
/*! export Response [provided] [no usage info] [missing usage info prevents renaming] -> ./server/models/Response.ts .default */
/*! export User [provided] [no usage info] [missing usage info prevents renaming] -> ./server/models/User.ts .default */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"User\": () => /* reexport safe */ _User__WEBPACK_IMPORTED_MODULE_0__.default,\n/* harmony export */   \"HRcomplex\": () => /* reexport safe */ _HRcomplex__WEBPACK_IMPORTED_MODULE_1__.default,\n/* harmony export */   \"Image\": () => /* reexport safe */ _Image__WEBPACK_IMPORTED_MODULE_2__.default,\n/* harmony export */   \"DateRange\": () => /* reexport safe */ _DateRange__WEBPACK_IMPORTED_MODULE_3__.default,\n/* harmony export */   \"Order\": () => /* reexport safe */ _Order__WEBPACK_IMPORTED_MODULE_4__.default,\n/* harmony export */   \"Response\": () => /* reexport safe */ _Response__WEBPACK_IMPORTED_MODULE_5__.default\n/* harmony export */ });\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ \"./server/models/User.ts\");\n/* harmony import */ var _HRcomplex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HRcomplex */ \"./server/models/HRcomplex.ts\");\n/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image */ \"./server/models/Image.ts\");\n/* harmony import */ var _DateRange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DateRange */ \"./server/models/DateRange.ts\");\n/* harmony import */ var _Order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Order */ \"./server/models/Order.ts\");\n/* harmony import */ var _Response__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Response */ \"./server/models/Response.ts\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant_complex/./server/models/index.ts?");

/***/ }),

/***/ "./server/routes/daterange.ts":
/*!************************************!*\
  !*** ./server/routes/daterange.ts ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_daterange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/daterange */ \"./server/controllers/daterange.ts\");\n/* harmony import */ var _middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middlewares/auth.middleware */ \"./server/middlewares/auth.middleware.ts\");\n\n\n\nvar router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.post(\"/all\", _controllers_daterange__WEBPACK_IMPORTED_MODULE_1__.get_dateranges);\nrouter.post(\"/create-date-range\", _middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_2__.default, _controllers_daterange__WEBPACK_IMPORTED_MODULE_1__.create_daterange);\nrouter[\"delete\"](\"/delete-date-range/:dateId\", _middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_2__.default, _controllers_daterange__WEBPACK_IMPORTED_MODULE_1__.delete_daterange);\nrouter.post(\"/booking\", _middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_2__.default, _controllers_daterange__WEBPACK_IMPORTED_MODULE_1__.book_dateranges);\nrouter.post(\"/ordered\", _middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_2__.default, _controllers_daterange__WEBPACK_IMPORTED_MODULE_1__.ordered_dateranges);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://restaurant_complex/./server/routes/daterange.ts?");

/***/ }),

/***/ "./server/routes/hrcomplex.ts":
/*!************************************!*\
  !*** ./server/routes/hrcomplex.ts ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_hrcomplex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/hrcomplex */ \"./server/controllers/hrcomplex.ts\");\n\n\nvar router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.post(\"/create-hrc\", _controllers_hrcomplex__WEBPACK_IMPORTED_MODULE_1__.create_hrcomplex);\nrouter.post(\"/get-info\", _controllers_hrcomplex__WEBPACK_IMPORTED_MODULE_1__.get_hrcomplex);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://restaurant_complex/./server/routes/hrcomplex.ts?");

/***/ }),

/***/ "./server/routes/image.ts":
/*!********************************!*\
  !*** ./server/routes/image.ts ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/image */ \"./server/controllers/image.ts\");\n/* harmony import */ var _middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middlewares/auth.middleware */ \"./server/middlewares/auth.middleware.ts\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_3__);\n\n\n // @ts-ignore\n\n\nvar router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nvar storage = multer__WEBPACK_IMPORTED_MODULE_3___default().memoryStorage();\nvar upload = multer__WEBPACK_IMPORTED_MODULE_3___default()({\n  storage: storage\n}).single(\"image\");\nrouter.post(\"/upload-image\", _middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_2__.default, upload, _controllers_image__WEBPACK_IMPORTED_MODULE_1__.upload_image);\nrouter[\"delete\"](\"/delete-image/:key\", _middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_2__.default, _controllers_image__WEBPACK_IMPORTED_MODULE_1__.delete_image);\nrouter.post(\"/all\", _controllers_image__WEBPACK_IMPORTED_MODULE_1__.get_images);\nrouter.post(\"/update-image/:imageId\", _middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_2__.default, _controllers_image__WEBPACK_IMPORTED_MODULE_1__.update_image);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://restaurant_complex/./server/routes/image.ts?");

/***/ }),

/***/ "./server/routes/response.ts":
/*!***********************************!*\
  !*** ./server/routes/response.ts ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/response */ \"./server/controllers/response.ts\");\n/* harmony import */ var _middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middlewares/auth.middleware */ \"./server/middlewares/auth.middleware.ts\");\n\n\n\nvar router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.post(\"/create\", _middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_2__.default, _controllers_response__WEBPACK_IMPORTED_MODULE_1__.create_response);\nrouter.post(\"/get-all\", _controllers_response__WEBPACK_IMPORTED_MODULE_1__.get_responses);\nrouter[\"delete\"](\"/delete/:responseId\", _middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_2__.default, _controllers_response__WEBPACK_IMPORTED_MODULE_1__.delete_response);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://restaurant_complex/./server/routes/response.ts?");

/***/ }),

/***/ "./server/routes/users.ts":
/*!********************************!*\
  !*** ./server/routes/users.ts ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-validator */ \"express-validator\");\n/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_validator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _controllers_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/users */ \"./server/controllers/users.ts\");\n/* harmony import */ var _middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../middlewares/auth.middleware */ \"./server/middlewares/auth.middleware.ts\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n // @ts-ignore\n\n\nvar router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nvar storage = multer__WEBPACK_IMPORTED_MODULE_4___default().memoryStorage();\nvar upload = multer__WEBPACK_IMPORTED_MODULE_4___default()({\n  storage: storage\n}).single(\"avatar\");\nrouter.post(\"/register\", [(0,express_validator__WEBPACK_IMPORTED_MODULE_1__.check)(\"username\").isLength({\n  min: 4,\n  max: 15\n}).withMessage(\"Ім'я користувача має містити щонайменше від 4 до 15 символів!\"), (0,express_validator__WEBPACK_IMPORTED_MODULE_1__.check)(\"email\").isEmail().withMessage(\"Електронна адреса неправильна!\"), (0,express_validator__WEBPACK_IMPORTED_MODULE_1__.check)(\"password\").isLength({\n  min: 3,\n  max: 25\n}).withMessage(\"Пароль повинен містити принаймні від 3 до 25 символів!\")], _controllers_users__WEBPACK_IMPORTED_MODULE_2__.register_user);\nrouter.post(\"/login\", [(0,express_validator__WEBPACK_IMPORTED_MODULE_1__.check)(\"email\").isEmail().withMessage(\"Електронна адреса неправильна!\"), (0,express_validator__WEBPACK_IMPORTED_MODULE_1__.check)(\"password\").isLength({\n  min: 3,\n  max: 25\n}).withMessage(\"Пароль повинен містити принаймні від 3 до 25 символів!\")], _controllers_users__WEBPACK_IMPORTED_MODULE_2__.login_user);\nrouter.get(\"/get-info/:userId\", _controllers_users__WEBPACK_IMPORTED_MODULE_2__.get_user);\nrouter.post(\"/update-user-password\", _middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_3__.default, [(0,express_validator__WEBPACK_IMPORTED_MODULE_1__.check)(\"username\").isLength({\n  min: 4,\n  max: 15\n}).withMessage(\"Ім'я користувача має містити щонайменше від 4 до 15 символів!\"), (0,express_validator__WEBPACK_IMPORTED_MODULE_1__.check)(\"email\").isEmail().withMessage(\"Електронна адреса неправильна!\"), (0,express_validator__WEBPACK_IMPORTED_MODULE_1__.check)(\"password\").isLength({\n  min: 3,\n  max: 25\n}).withMessage(\"Пароль повинен містити принаймні від 3 до 25 символів!\")], _controllers_users__WEBPACK_IMPORTED_MODULE_2__.update_user);\nrouter.post(\"/update-user\", _middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_3__.default, [(0,express_validator__WEBPACK_IMPORTED_MODULE_1__.check)(\"username\").isLength({\n  min: 4,\n  max: 15\n}).withMessage(\"Ім'я користувача має містити щонайменше від 4 до 15 символів!\"), (0,express_validator__WEBPACK_IMPORTED_MODULE_1__.check)(\"email\").isEmail().withMessage(\"Електронна адреса неправильна!\")], _controllers_users__WEBPACK_IMPORTED_MODULE_2__.update_user);\nrouter.get(\"/users\", _controllers_users__WEBPACK_IMPORTED_MODULE_2__.get_users);\nrouter.post(\"/change-avatar\", _middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_3__.default, upload, _controllers_users__WEBPACK_IMPORTED_MODULE_2__.change_avatar);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://restaurant_complex/./server/routes/users.ts?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");;\n\n//# sourceURL=webpack://restaurant_complex/external_%22@babel/runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"@babel/runtime/helpers/defineProperty\");;\n\n//# sourceURL=webpack://restaurant_complex/external_%22@babel/runtime/helpers/defineProperty%22?");

/***/ }),

/***/ "@babel/runtime/helpers/toConsumableArray":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"@babel/runtime/helpers/toConsumableArray\");;\n\n//# sourceURL=webpack://restaurant_complex/external_%22@babel/runtime/helpers/toConsumableArray%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"@babel/runtime/regenerator\");;\n\n//# sourceURL=webpack://restaurant_complex/external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"aws-sdk\");;\n\n//# sourceURL=webpack://restaurant_complex/external_%22aws-sdk%22?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"bcrypt\");;\n\n//# sourceURL=webpack://restaurant_complex/external_%22bcrypt%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"body-parser\");;\n\n//# sourceURL=webpack://restaurant_complex/external_%22body-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"cors\");;\n\n//# sourceURL=webpack://restaurant_complex/external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"dotenv\");;\n\n//# sourceURL=webpack://restaurant_complex/external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"express\");;\n\n//# sourceURL=webpack://restaurant_complex/external_%22express%22?");

/***/ }),

/***/ "express-validator":
/*!************************************!*\
  !*** external "express-validator" ***!
  \************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"express-validator\");;\n\n//# sourceURL=webpack://restaurant_complex/external_%22express-validator%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"jsonwebtoken\");;\n\n//# sourceURL=webpack://restaurant_complex/external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"mongoose\");;\n\n//# sourceURL=webpack://restaurant_complex/external_%22mongoose%22?");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"multer\");;\n\n//# sourceURL=webpack://restaurant_complex/external_%22multer%22?");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"uuid\");;\n\n//# sourceURL=webpack://restaurant_complex/external_%22uuid%22?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./server/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;