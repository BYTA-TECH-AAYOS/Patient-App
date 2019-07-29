/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PageOfTestDate } from '../models/page-of-test-date';
import { AddressLineDTO } from '../models/address-line-dto';
import { CommandResource } from '../models/command-resource';
import { AdditionalInformationRequest } from '../models/additional-information-request';
import { ConsultationDetails } from '../models/consultation-details';
import { PaymentConfirmationRequest } from '../models/payment-confirmation-request';
import { AppointmentRequest } from '../models/appointment-request';
import { ProcessPayment } from '../models/process-payment';
import { PageOfDoctor } from '../models/page-of-doctor';
import { PatientDTO } from '../models/patient-dto';
import { Patient } from '../models/patient';
import { UserRatingDTO } from '../models/user-rating-dto';
import { RatingReview } from '../models/rating-review';
import { ReviewDTO } from '../models/review-dto';

/**
 * Command Resource
 */
@Injectable({
  providedIn: 'root',
})
class CommandResourceService extends __BaseService {
  static readonly searchUsingGETPath = '/api/_search';
  static readonly createAddressLineUsingPOSTPath = '/api/address-lines';
  static readonly updateAddressLineUsingPUTPath = '/api/address-lines';
  static readonly createAdditionalInformationRequestUsingPOSTPath = '/api/appointments/additionalInformationRequest/{taskId}';
  static readonly createCollectAdditionalDetailsUsingPOSTPath = '/api/appointments/collectAdditionalDetails/{taskId}';
  static readonly createConfirmPaymentUsingPOSTPath = '/api/appointments/confirmPayment/{taskId}';
  static readonly createConfirmRegistrationUsingPOSTPath = '/api/appointments/confirmRegistration/{taskId}';
  static readonly createInitiateAppointmentUsingPOSTPath = '/api/appointments/initiateAppointment';
  static readonly createProcessPaymentUsingPOSTPath = '/api/appointments/processPayment/{taskId}';
  static readonly doctorSearchUsingGETPath = '/api/doctorsearch';
  static readonly createPatientUsingPOSTPath = '/api/patients';
  static readonly updatePatientUsingPUTPath = '/api/patients';
  static readonly modelToDtoUsingPOSTPath = '/api/patients/modelToDto';
  static readonly ratedoctorUsingPOSTPath = '/api/rating';
  static readonly createRatingAndReviewUsingPOSTPath = '/api/rating-review';
  static readonly reviewdoctorUsingPOSTPath = '/api/review';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  searchUsingGETResponse(): __Observable<__StrictHttpResponse<PageOfTestDate>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/_search`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageOfTestDate>;
      })
    );
  }
  /**
   * @return OK
   */
  searchUsingGET(): __Observable<PageOfTestDate> {
    return this.searchUsingGETResponse().pipe(
      __map(_r => _r.body as PageOfTestDate)
    );
  }

  /**
   * @param addressLineDTO addressLineDTO
   * @return OK
   */
  createAddressLineUsingPOSTResponse(addressLineDTO: AddressLineDTO): __Observable<__StrictHttpResponse<AddressLineDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = addressLineDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/address-lines`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AddressLineDTO>;
      })
    );
  }
  /**
   * @param addressLineDTO addressLineDTO
   * @return OK
   */
  createAddressLineUsingPOST(addressLineDTO: AddressLineDTO): __Observable<AddressLineDTO> {
    return this.createAddressLineUsingPOSTResponse(addressLineDTO).pipe(
      __map(_r => _r.body as AddressLineDTO)
    );
  }

  /**
   * @param addressLineDTO addressLineDTO
   * @return OK
   */
  updateAddressLineUsingPUTResponse(addressLineDTO: AddressLineDTO): __Observable<__StrictHttpResponse<AddressLineDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = addressLineDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/address-lines`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AddressLineDTO>;
      })
    );
  }
  /**
   * @param addressLineDTO addressLineDTO
   * @return OK
   */
  updateAddressLineUsingPUT(addressLineDTO: AddressLineDTO): __Observable<AddressLineDTO> {
    return this.updateAddressLineUsingPUTResponse(addressLineDTO).pipe(
      __map(_r => _r.body as AddressLineDTO)
    );
  }

  /**
   * @param params The `CommandResourceService.CreateAdditionalInformationRequestUsingPOSTParams` containing the following parameters:
   *
   * - `taskId`: taskId
   *
   * - `additionalInformationRequest`: additionalInformationRequest
   *
   * @return OK
   */
  createAdditionalInformationRequestUsingPOSTResponse(params: CommandResourceService.CreateAdditionalInformationRequestUsingPOSTParams): __Observable<__StrictHttpResponse<CommandResource>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.additionalInformationRequest;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/appointments/additionalInformationRequest/${params.taskId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandResource>;
      })
    );
  }
  /**
   * @param params The `CommandResourceService.CreateAdditionalInformationRequestUsingPOSTParams` containing the following parameters:
   *
   * - `taskId`: taskId
   *
   * - `additionalInformationRequest`: additionalInformationRequest
   *
   * @return OK
   */
  createAdditionalInformationRequestUsingPOST(params: CommandResourceService.CreateAdditionalInformationRequestUsingPOSTParams): __Observable<CommandResource> {
    return this.createAdditionalInformationRequestUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as CommandResource)
    );
  }

  /**
   * @param params The `CommandResourceService.CreateCollectAdditionalDetailsUsingPOSTParams` containing the following parameters:
   *
   * - `taskId`: taskId
   *
   * - `consultationDetails`: consultationDetails
   *
   * @return OK
   */
  createCollectAdditionalDetailsUsingPOSTResponse(params: CommandResourceService.CreateCollectAdditionalDetailsUsingPOSTParams): __Observable<__StrictHttpResponse<CommandResource>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.consultationDetails;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/appointments/collectAdditionalDetails/${params.taskId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandResource>;
      })
    );
  }
  /**
   * @param params The `CommandResourceService.CreateCollectAdditionalDetailsUsingPOSTParams` containing the following parameters:
   *
   * - `taskId`: taskId
   *
   * - `consultationDetails`: consultationDetails
   *
   * @return OK
   */
  createCollectAdditionalDetailsUsingPOST(params: CommandResourceService.CreateCollectAdditionalDetailsUsingPOSTParams): __Observable<CommandResource> {
    return this.createCollectAdditionalDetailsUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as CommandResource)
    );
  }

  /**
   * @param params The `CommandResourceService.CreateConfirmPaymentUsingPOSTParams` containing the following parameters:
   *
   * - `taskId`: taskId
   *
   * - `paymentConfirmationRequest`: paymentConfirmationRequest
   *
   * @return OK
   */
  createConfirmPaymentUsingPOSTResponse(params: CommandResourceService.CreateConfirmPaymentUsingPOSTParams): __Observable<__StrictHttpResponse<CommandResource>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.paymentConfirmationRequest;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/appointments/confirmPayment/${params.taskId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandResource>;
      })
    );
  }
  /**
   * @param params The `CommandResourceService.CreateConfirmPaymentUsingPOSTParams` containing the following parameters:
   *
   * - `taskId`: taskId
   *
   * - `paymentConfirmationRequest`: paymentConfirmationRequest
   *
   * @return OK
   */
  createConfirmPaymentUsingPOST(params: CommandResourceService.CreateConfirmPaymentUsingPOSTParams): __Observable<CommandResource> {
    return this.createConfirmPaymentUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as CommandResource)
    );
  }

  /**
   * @param taskId taskId
   * @return OK
   */
  createConfirmRegistrationUsingPOSTResponse(taskId: string): __Observable<__StrictHttpResponse<CommandResource>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/appointments/confirmRegistration/${taskId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandResource>;
      })
    );
  }
  /**
   * @param taskId taskId
   * @return OK
   */
  createConfirmRegistrationUsingPOST(taskId: string): __Observable<CommandResource> {
    return this.createConfirmRegistrationUsingPOSTResponse(taskId).pipe(
      __map(_r => _r.body as CommandResource)
    );
  }

  /**
   * @param appointmentRequest appointmentRequest
   * @return OK
   */
  createInitiateAppointmentUsingPOSTResponse(appointmentRequest: AppointmentRequest): __Observable<__StrictHttpResponse<CommandResource>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = appointmentRequest;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/appointments/initiateAppointment`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandResource>;
      })
    );
  }
  /**
   * @param appointmentRequest appointmentRequest
   * @return OK
   */
  createInitiateAppointmentUsingPOST(appointmentRequest: AppointmentRequest): __Observable<CommandResource> {
    return this.createInitiateAppointmentUsingPOSTResponse(appointmentRequest).pipe(
      __map(_r => _r.body as CommandResource)
    );
  }

  /**
   * @param params The `CommandResourceService.CreateProcessPaymentUsingPOSTParams` containing the following parameters:
   *
   * - `taskId`: taskId
   *
   * - `processPayment`: processPayment
   *
   * @return OK
   */
  createProcessPaymentUsingPOSTResponse(params: CommandResourceService.CreateProcessPaymentUsingPOSTParams): __Observable<__StrictHttpResponse<CommandResource>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.processPayment;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/appointments/processPayment/${params.taskId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandResource>;
      })
    );
  }
  /**
   * @param params The `CommandResourceService.CreateProcessPaymentUsingPOSTParams` containing the following parameters:
   *
   * - `taskId`: taskId
   *
   * - `processPayment`: processPayment
   *
   * @return OK
   */
  createProcessPaymentUsingPOST(params: CommandResourceService.CreateProcessPaymentUsingPOSTParams): __Observable<CommandResource> {
    return this.createProcessPaymentUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as CommandResource)
    );
  }

  /**
   * @return OK
   */
  doctorSearchUsingGETResponse(): __Observable<__StrictHttpResponse<PageOfDoctor>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/doctorsearch`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageOfDoctor>;
      })
    );
  }
  /**
   * @return OK
   */
  doctorSearchUsingGET(): __Observable<PageOfDoctor> {
    return this.doctorSearchUsingGETResponse().pipe(
      __map(_r => _r.body as PageOfDoctor)
    );
  }

  /**
   * @param patientDTO patientDTO
   * @return OK
   */
  createPatientUsingPOSTResponse(patientDTO: PatientDTO): __Observable<__StrictHttpResponse<PatientDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = patientDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/patients`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PatientDTO>;
      })
    );
  }
  /**
   * @param patientDTO patientDTO
   * @return OK
   */
  createPatientUsingPOST(patientDTO: PatientDTO): __Observable<PatientDTO> {
    return this.createPatientUsingPOSTResponse(patientDTO).pipe(
      __map(_r => _r.body as PatientDTO)
    );
  }

  /**
   * @param patientDTO patientDTO
   * @return OK
   */
  updatePatientUsingPUTResponse(patientDTO: PatientDTO): __Observable<__StrictHttpResponse<PatientDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = patientDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/patients`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PatientDTO>;
      })
    );
  }
  /**
   * @param patientDTO patientDTO
   * @return OK
   */
  updatePatientUsingPUT(patientDTO: PatientDTO): __Observable<PatientDTO> {
    return this.updatePatientUsingPUTResponse(patientDTO).pipe(
      __map(_r => _r.body as PatientDTO)
    );
  }

  /**
   * @param patient patient
   * @return OK
   */
  modelToDtoUsingPOSTResponse(patient: Patient): __Observable<__StrictHttpResponse<PatientDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = patient;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/patients/modelToDto`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PatientDTO>;
      })
    );
  }
  /**
   * @param patient patient
   * @return OK
   */
  modelToDtoUsingPOST(patient: Patient): __Observable<PatientDTO> {
    return this.modelToDtoUsingPOSTResponse(patient).pipe(
      __map(_r => _r.body as PatientDTO)
    );
  }

  /**
   * @param userRatingDTO userRatingDTO
   * @return OK
   */
  ratedoctorUsingPOSTResponse(userRatingDTO: UserRatingDTO): __Observable<__StrictHttpResponse<UserRatingDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = userRatingDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/rating`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserRatingDTO>;
      })
    );
  }
  /**
   * @param userRatingDTO userRatingDTO
   * @return OK
   */
  ratedoctorUsingPOST(userRatingDTO: UserRatingDTO): __Observable<UserRatingDTO> {
    return this.ratedoctorUsingPOSTResponse(userRatingDTO).pipe(
      __map(_r => _r.body as UserRatingDTO)
    );
  }

  /**
   * @param ratingReview ratingReview
   * @return OK
   */
  createRatingAndReviewUsingPOSTResponse(ratingReview: RatingReview): __Observable<__StrictHttpResponse<RatingReview>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = ratingReview;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/rating-review`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RatingReview>;
      })
    );
  }
  /**
   * @param ratingReview ratingReview
   * @return OK
   */
  createRatingAndReviewUsingPOST(ratingReview: RatingReview): __Observable<RatingReview> {
    return this.createRatingAndReviewUsingPOSTResponse(ratingReview).pipe(
      __map(_r => _r.body as RatingReview)
    );
  }

  /**
   * @param reviewDTO reviewDTO
   * @return OK
   */
  reviewdoctorUsingPOSTResponse(reviewDTO: ReviewDTO): __Observable<__StrictHttpResponse<ReviewDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = reviewDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/review`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ReviewDTO>;
      })
    );
  }
  /**
   * @param reviewDTO reviewDTO
   * @return OK
   */
  reviewdoctorUsingPOST(reviewDTO: ReviewDTO): __Observable<ReviewDTO> {
    return this.reviewdoctorUsingPOSTResponse(reviewDTO).pipe(
      __map(_r => _r.body as ReviewDTO)
    );
  }
}

module CommandResourceService {

  /**
   * Parameters for createAdditionalInformationRequestUsingPOST
   */
  export interface CreateAdditionalInformationRequestUsingPOSTParams {

    /**
     * taskId
     */
    taskId: string;

    /**
     * additionalInformationRequest
     */
    additionalInformationRequest: AdditionalInformationRequest;
  }

  /**
   * Parameters for createCollectAdditionalDetailsUsingPOST
   */
  export interface CreateCollectAdditionalDetailsUsingPOSTParams {

    /**
     * taskId
     */
    taskId: string;

    /**
     * consultationDetails
     */
    consultationDetails: ConsultationDetails;
  }

  /**
   * Parameters for createConfirmPaymentUsingPOST
   */
  export interface CreateConfirmPaymentUsingPOSTParams {

    /**
     * taskId
     */
    taskId: string;

    /**
     * paymentConfirmationRequest
     */
    paymentConfirmationRequest: PaymentConfirmationRequest;
  }

  /**
   * Parameters for createProcessPaymentUsingPOST
   */
  export interface CreateProcessPaymentUsingPOSTParams {

    /**
     * taskId
     */
    taskId: string;

    /**
     * processPayment
     */
    processPayment: ProcessPayment;
  }
}

export { CommandResourceService }
