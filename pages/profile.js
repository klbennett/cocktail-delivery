import useSWR from "swr";
import Link from "next/link";
import { useUser } from "../utils/auth/useUser";

const fetcher = (url, token) =>
  fetch(url, {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json", token }),
    credentials: "same-origin",
  }).then((res) => res.json());

const Profile = () => {
  const { user, logout } = useUser();

  if (!user) {
    return (
      <>
        <p>Hi there!</p>
        <p>
          You are not signed in.{" "}
          <Link href={"/auth"}>
            <a>Sign in</a>
          </Link>
        </p>
      </>
    );
  }

  return (
    <div>
      <div>
        <p>You're signed in. Email: {user.email}</p>
        <p
          style={{
            display: "inlinelock",
            color: "blue",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={() => logout()}
        >
          Log out
        </p>
      </div>
    </div>
  );
};

export default Profile;
