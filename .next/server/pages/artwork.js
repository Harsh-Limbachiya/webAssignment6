"use strict";
(() => {
var exports = {};
exports.id = 123;
exports.ids = [123];
exports.modules = {

/***/ 3021:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Artwork)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_data_validObjectDList_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9178);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5941);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5566);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ArtworkCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5073);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_4__, _components_ArtworkCard__WEBPACK_IMPORTED_MODULE_6__]);
([swr__WEBPACK_IMPORTED_MODULE_4__, _components_ArtworkCard__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const PER_PAGE = 12;
function Artwork() {
    const [artworkList, setArtworkList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    let finalQuery = router.asPath.split("?")[1];
    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_4__["default"])(`https://collectionapi.metmuseum.org/public/collection/v1/search?${finalQuery}`);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (data) {
            let filteredResults = _public_data_validObjectDList_json__WEBPACK_IMPORTED_MODULE_1__/* .objectIDs.filter */ .l.filter((x)=>data?.objectIDs?.includes(x));
            let results = [];
            for(let i = 0; i < filteredResults.length; i += PER_PAGE){
                const chunk = filteredResults.slice(i, i + PER_PAGE);
                results.push(chunk);
            }
            setArtworkList(()=>results);
            setPage(()=>1);
        }
    }, [
        data
    ]);
    const previousPage = ()=>{
        if (page > 1) {
            setPage((currPage)=>currPage - 1);
        }
    };
    const nextPage = ()=>{
        if (page < artworkList.length) {
            setPage((currPage)=>currPage + 1);
        }
    };
    if (error) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_error__WEBPACK_IMPORTED_MODULE_5___default()), {
        statusCode: 404
    });
    if (!data && !error) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Row, {
        className: "gy-4",
        children: [
            !artworkList.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Card, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Card.Body, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Card.Title, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                children: "Nothing Here"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Card.Text, {
                            children: "Try searching for something else."
                        })
                    ]
                })
            }) : artworkList[page - 1].map((objectID)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Col, {
                    lg: 3,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ArtworkCard__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        objectID: objectID
                    })
                }, objectID)),
            artworkList.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Row, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Col, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Pagination, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Pagination.Prev, {
                                onClick: ()=>previousPage()
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Pagination.Item, {
                                children: page
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Pagination.Next, {
                                onClick: ()=>nextPage()
                            })
                        ]
                    })
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 5566:
/***/ ((module) => {

module.exports = require("next/error");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 1937:
/***/ ((module) => {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ }),

/***/ 9178:
/***/ ((module) => {


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,73], () => (__webpack_exec__(3021)));
module.exports = __webpack_exports__;

})();