System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var titleCase, truncateString, commaSeperated;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            titleCase = (function () {
                function titleCase() {
                }
                titleCase.prototype.transform = function (value, args) {
                    return value.replace(/\w\S*/g, function (txt) {
                        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                    });
                };
                titleCase = __decorate([
                    core_1.Pipe({ name: 'titleCase' }), 
                    __metadata('design:paramtypes', [])
                ], titleCase);
                return titleCase;
            })();
            exports_1("titleCase", titleCase);
            truncateString = (function () {
                function truncateString() {
                }
                truncateString.prototype.transform = function (value, args) {
                    var value = value;
                    var wordwise = args[0];
                    var max = args[1];
                    var tail = args[3];
                    if (!value)
                        return '';
                    max = parseInt(max, 10);
                    if (!max)
                        return value;
                    if (value.length <= max)
                        return value;
                    value = value.substr(0, max);
                    if (wordwise) {
                        var lastspace = value.lastIndexOf(' ');
                        if (lastspace != -1) {
                            value = value.substr(0, lastspace);
                        }
                    }
                    return value + (tail || ' …');
                };
                truncateString = __decorate([
                    core_1.Pipe({ name: 'truncateString' }), 
                    __metadata('design:paramtypes', [])
                ], truncateString);
                return truncateString;
            })();
            exports_1("truncateString", truncateString);
            commaSeperated = (function () {
                function commaSeperated() {
                }
                commaSeperated.prototype.transform = function (value, args) {
                    return value.join(",");
                };
                commaSeperated = __decorate([
                    core_1.Pipe({ name: 'commaSeperated' }), 
                    __metadata('design:paramtypes', [])
                ], commaSeperated);
                return commaSeperated;
            })();
            exports_1("commaSeperated", commaSeperated);
        }
    }
});
//# sourceMappingURL=String.pipe.js.map