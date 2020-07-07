import FirebaseAuth from "../components/FirebaseAuth";
import Link from "next/link";

const Auth = () => {
  return (
    <div>
      <div>
        <FirebaseAuth />
      </div>
    </div>
  );
};

Auth.propTypes = {};

export default Auth;
