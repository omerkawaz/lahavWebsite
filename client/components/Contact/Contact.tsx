import { useState } from "react";
import Image from "next/image";
import Container, { Col } from "../shared/Container/Container";
import Button from "../shared/Button/Button";
import Text from "../shared/Text/Text";
import Input, { TextArea } from "../shared/Input/Input";
import SVG from "../../public/assets/undraw_workout_gcgu.svg";
import Icons from "../Header/Icons";
import EmailService from "../../services/EmailService";
import { IContactForm } from "../../interfaces/form.interface";
import { IoIosLeaf } from "react-icons/io";
import useMediaQuery from "@material-ui/core/useMediaQuery";
interface IContact {
  background?: string;
}

interface IEmailMessage {
  error: boolean;
  msg: string;
  heb_msg: string;
}

const init_email_message = {
  error: false,
  msg: "",
  heb_msg: "",
};

const Contact = ({ background }: IContact) => {
  const matches = useMediaQuery("(min-width: 1024px)");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<IContactForm>({
    fname: "",
    phone: "",
    email: "",
    text: "",
  });

  const [emailMessage, setEmailMessage] =
    useState<IEmailMessage>(init_email_message);

  const setField = ({ target }: any) => {
    setForm((current) => ({ ...current, [target.name]: target.value }));
  };

  const userSendEmail = (e: any) => {
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
      .then((res: any) => {
        setLoading(false);
        setEmailMessage(form_is_valid);

        setTimeout(() => {
          setEmailMessage(init_email_message);
        }, 2000);
      })
      .catch((err: any) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    // <Container
    //   id="contact"
    //   align="center"
    //   justify="space-around"
    //   background={background ? background : "#f5f8f7"}
    //   height="100vh"
    //   style={{ padding: matches ? "25px" :L, width: "100%" }}
    // >

    <div
    id="contact"
      style={{
        display: "flex",
        justifyContent: matches ? "space-between" : "center",
        alignItems: "center",
        flexWrap: "wrap",
        maxWidth: matches ? "1200px" : "100%",
        minHeight: "100vh",
        margin: 'auto',
        padding:  "25px",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: !matches ? "50px" : "0",
          width: "360px",
        }}
      >
        <Text bold xxl margin="10px 0">
          דברו איתי
        </Text>
        <Icons />
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
          placeholder="ישראל ישראלי"
          label="שם"
          name="fname"
          onChange={setField}
        />
        <Input
          type="text"
          label="טלפון"
          placeholder="0501234567"
          name="phone"
          onChange={setField}
        />
        <Input
          type="text"
          label="מייל"
          placeholder="אימייל (אופציונלי)"
          name="email"
          onChange={setField}
        />

        <TextArea
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
      <Image src={SVG} width="500" height="500" alt="contact-with-me" />
    </div>
  );
};

export default Contact;

// <Container
// id="about"
// height={!matches ? "100vh" : "80vh"}
// justify="center"
// align="space-around"
// background={background ? background : "#f5f8f7"}
// style={{
//   // backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1014%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(123%2c 166%2c 153%2c 0.35)'%3e%3c/rect%3e%3cpath d='M1440 0L1125.96 0L1440 53.35z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M1125.96 0L1440 53.35L1440 325.33000000000004L540.38 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M540.3799999999999 0L1440 325.33000000000004L1440 447.32000000000005L492.33999999999986 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M492.3399999999999 0L1440 447.32000000000005L1440 470.63000000000005L290.6499999999999 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M0 560L595.64 560L0 284.58z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M0 284.58L595.64 560L644.38 560L0 183.38z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M0 183.38L644.38 560L652.82 560L0 135.2z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M0 135.2L652.82 560L1030.95 560L0 75.97999999999999z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1014'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");`,
//   backgroundSize: "cover",
//   padding: '0'
// }}
