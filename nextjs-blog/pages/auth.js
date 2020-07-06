import FirebaseAuth from "../components/FirebaseAuth";
import { useUser } from "../utils/auth/useUser";
import Link from "next/link";

const Auth = () => {
  const { user, logout } = useUser();

  if (user) {
    return (
      <>
        <p>Hi there!</p>
        <p>
          You are signed in.{" "}
          <Link href={"/profile"}>
            <a>Go to your profile</a>
          </Link>
        </p>
      </>
    );
  }
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
