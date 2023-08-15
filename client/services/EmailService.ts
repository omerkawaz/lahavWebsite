import HttpService from "./HttpService";

class EmailService {
  private BASE_URL: string;
  private SEND_EMAIL: string;
  private __phone__regex__: RegExp;

  constructor() {
    this.BASE_URL = "http://68.183.74.230";
    this.SEND_EMAIL = `${this.BASE_URL}/services/email/send`;
    this.__phone__regex__ = /^05\d([-]{0,1})\d{7}$/;
  }

  sendEmail(form: any) {
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     console.log("promise");
    //     resolve(form);
    //   }, 1000);
    // });
    return HttpService.post(this.SEND_EMAIL, form);
  }

  isValid(form:any) {
    const required_fields = [form.fname, form.phone];
    const isEmpty = required_fields.some((field: string) => !field);
    const phoneIsValid = this.validPhone(form.phone);

    if (isEmpty) {
      return {
        error: true,
        msg: "INVALID_FORM_FIELDS",
        heb_msg: "מלאו את השדות בבקשה",
      };
    }

    if (!phoneIsValid) {
      return {
        error: true,
        msg: "INVALID_PHONE",
        heb_msg: "טלפון לא תקין",
      };
    }

    return {
      error: false,
      msg: "FORM_VALIDATION_SUCCESS",
      heb_msg: " נשלח בהצלחה",
    };
  }

  private validPhone(phone: string) {
    return phone.match(this.__phone__regex__);
  }
}

export default new EmailService();
