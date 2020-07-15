"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var axios_1 = __importDefault(require("axios"));
var router = express_1.Router();
exports.router = router;
//API key
var key = 'fee9133ff87c8385486979a559ff1687';
//Genre List
var genreList = [
    {
        id: 28,
        name: 'Action',
    },
    {
        id: 12,
        name: 'Adventure',
    },
    {
        id: 16,
        name: 'Animation',
    },
    {
        id: 35,
        name: 'Comedy',
    },
    {
        id: 80,
        name: 'Crime',
    },
    {
        id: 99,
        name: 'Documentary',
    },
    {
        id: 18,
        name: 'Drama',
    },
    {
        id: 10751,
        name: 'Family',
    },
    {
        id: 14,
        name: 'Fantasy',
    },
    {
        id: 36,
        name: 'History',
    },
    {
        id: 27,
        name: 'Horror',
    },
    {
        id: 10402,
        name: 'Music',
    },
    {
        id: 9648,
        name: 'Mystery',
    },
    {
        id: 10749,
        name: 'Romance',
    },
    {
        id: 878,
        name: 'Science Fiction',
    },
    {
        id: 10770,
        name: 'TV Movie',
    },
    {
        id: 53,
        name: 'Thriller',
    },
    {
        id: 10752,
        name: 'War',
    },
    {
        id: 37,
        name: 'Western',
    },
];
//filter criteria
var originalLanguage = 'de';
var year = '2018';
var genres = ''; //for example, 18,12 drama & adventure -
//you can leave %2C at the end
//converting genres strings to genres string acceptable for the API call
function convert() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var e = args_1[_a];
        for (var _b = 0, genreList_1 = genreList; _b < genreList_1.length; _b++) {
            var f = genreList_1[_b];
            if (e === f.name) {
                e = f.id.toString();
                genres += e + '%2C';
            }
        }
    }
    return genres;
}
//calling function with sample genres for API call
convert('Drama', 'Adventure');
//filter - external API call
router.get('/moviesData', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, moviesData, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios_1.default.get("https://api.themoviedb.org/3/discover/movie?api_key=" + key + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=" + year + "&with_genres=" + genres + "&with_original_language=" + originalLanguage)];
            case 1:
                response = _a.sent();
                moviesData = response.data;
                res.send(moviesData);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error(error_1.message);
                res.status(500).send('Server Error');
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
