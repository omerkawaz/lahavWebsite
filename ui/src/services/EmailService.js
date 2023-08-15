import HttpService from "./HttpService";

class EmailService {
  constructor() {
    this.BASE_URL =
      process.env.REACT_APP_API_URL === "production"
        ? "https://lahavstendel.co.il"
        : "http://localhost:4000";

    this.SEND_EMAIL = `${this.BASE_URL}/services/email/send`;
    this.__phone__regex__ = /^05\d([-]{0,1})\d{7}$/;
  }

  sendEmail(form) {
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     console.log("promise");
    //     resolve(form);
    //   }, 1000);
    // });
    return HttpService.post(this.SEND_EMAIL, form);
  }

  isValid(form) {
    const required_fields = [form.fname, form.phone];
    const isEmpty = required_fields.some((field) => !field);
    const phoneIsValid = this.validPhone(form.phone);

    if (isEmpty) {
      return {
        error: true,
        msg: "INVALID_FORM_FIELDS",
        heb_msg: "יש למלא שם וטלפון",
      };
    }

    if (!phoneIsValid) {
      return {
        error: true,
        msg: "INVALID_PHONE",
        heb_msg: "מספר טלפון לא תקין",
      };
    }

    return {
      error: false,
      msg: "FORM_VALIDATION_SUCCESS",
      heb_msg: " ההודעה נשלחה בהצלחה, אחזור אליכם בהקדם",
    };
  }

  validPhone(phone) {
    return phone.match(this.__phone__regex__);
  }
}

export default new EmailService();
