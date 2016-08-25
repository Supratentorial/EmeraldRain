"use strict";
describe("patientShellService", function () {
    var httpBackend;
    var patientService;
    var patientShellService;
    beforeEach(angular.mock.module("app"));
    beforeEach(angular.mock.module("patient"));
    beforeEach(inject(function (_patientShellService_, $httpBackend, _patientService_) {
        patientShellService = _patientShellService_;
        httpBackend = $httpBackend;
        patientService = _patientService_;
    }));
    it("should return false if there are no open patients", function () {
        expect(patientShellService.isPatientOpen(1)).toBe(false);
    });
});
