import Button from '../components/shared/Button/Button'
import Text from '../components/shared/Text/Text'
import HeroDraw from "../public/assets/hero.svg";
import Image from "next/image";

const index = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign:'center'
      }}
    >
        <Text xxl primary bold style={{margin: '10px 0'}}>
        404 
        </Text>
        <Text   md style={{margin: '10px 0'}}>
            העמוד לא נמצא :( <br/>  לא נורא, <br/> זה זמן טוב לקחת נשימה
        </Text>
        <Button width="200px" style={{ fontSize: '24px' }}>חזרה לאתר</Button>
        <Image src={HeroDraw} width="700" height="700" alt="hero" />

    </div>
  );
};

export default index;
