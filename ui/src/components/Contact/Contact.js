import { useEffect, useState } from "react";
import Button from "../../shared/Button";
import Text from "../../shared/Text";
import Input, { TextArea } from "../../shared/Input";
import Icons from "../Header/Icons";
import EmailService from "../../services/EmailService";
import { IoIosLeaf } from "react-icons/io";
import { StyledContainer, StyledImage } from "./Contact.style";
import { useMediaQuery } from "@material-ui/core";

const init_email_message = {
  error: false,
  msg: "",
  heb_msg: "",
};

const initForm = {
  fname: "",
  phone: "",
  email: "",
  text: "",
};

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(initForm);
  const [emailMessage, setEmailMessage] = useState(init_email_message);
  const isMobile = useMediaQuery("(max-width: 1120px)");

  const setField = ({ target }) => {
    setForm((current) => ({ ...current, [target.name]: target.value }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const userSendEmail = (e) => {
    e.preventDefault();
    const form_is_valid = EmailService.isValid(form);

    if (form_is_valid.error) {
      setLoading(false);
      setEmailMessage(form_is_valid);
      return;
    }

    // Send Email
    setLoading(true);

    EmailService.sendEmail(form)
      .then((res) => {
        setLoading(false);
        setEmailMessage(form_is_valid);

        setForm(initForm);

        setTimeout(() => {
          setEmailMessage(init_email_message);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <StyledContainer id="contact">
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "360px",
          textAlign: isMobile ? "center" : "right",
        }}
      >
        <Text bold xxl margin="10px 0">
          דברו איתי
        </Text>
        <Icons isMobile={isMobile} />
        <Text md margin="10px 0">
          לתיאום שיחת היכרות איתי, <br />
          מוזמנים לרשום לי <br /> ואחזור אליכם בהקדם
          <IoIosLeaf
            color="#7ba699"
            size="1em"
            style={{ marginRight: "3px", position: "relative", top: "4px" }}
          />
        </Text>
        <br />
        <Input
          type="text"
          value={form.fname}
          placeholder="שם מלא"
          label="שם"
          name="fname"
          onChange={setField}
        />
        <Input
          type="text"
          value={form.phone}
          label="טלפון"
          placeholder="0501234567"
          name="phone"
          onChange={setField}
        />
        <Input
          type="text"
          value={form.email}
          label="מייל"
          placeholder="אימייל (אופציונלי)"
          name="email"
          onChange={setField}
        />

        <TextArea
          value={form.text}
          onChange={setField}
          name="text"
          label="הודעה"
          placeholder="לחזור אלייך בנושא מסויים?"
        />
        <Button
          width="100%"
          loading={loading}
          disabled={loading}
          onClick={userSendEmail}
          style={{ marginTop: "10px" }}
        >
          שליחה
        </Button>
        {emailMessage.heb_msg && (
          <span
            style={{
              color: emailMessage.error ? "red" : "#7ba699",
              marginTop: "5px",
            }}
          >
            *{emailMessage.heb_msg}
          </span>
        )}
      </form>
      <StyledImage
        src="/assets/undraw_workout_gcgu.svg"
        width="400"
        height="400"
        alt="contact-with-me"
      />
    </StyledContainer>
  );
};

export default Contact;
