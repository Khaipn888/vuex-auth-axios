import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase";
import { reactive } from "vue";

let userInfo = reactive({});

onAuthStateChanged(auth, (user) => {
  if (user) {
    userInfo = user;
    console.log(userInfo);
  } else {
    console.log("user signed out!");
  }
});
export function useUser() {
  return userInfo;
}
