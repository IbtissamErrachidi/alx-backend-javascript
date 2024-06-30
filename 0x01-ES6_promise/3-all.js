import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      if (photoResponse && userResponse) {
        console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
      } else {
        console.error("One or more promises were rejected");
      }
    })
    .catch((error) => {
      console.error("Signup system offline");
    });
}

