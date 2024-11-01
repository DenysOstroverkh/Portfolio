import {
  PHONE_NUMBER,
  GMAIL,
  GIT,
  SKYPE,
  TELEGRAM,
  LINKEDIN,
} from "@/libs/const";

/**
 * Function to go to the appreciated URL for every contact
 * @param type string //Type of contact, such as phone-number, gmail and so on
 */
export const nativate = (type: string) => {
  switch (type) {
    case "phone":
      location.href = `tel:${PHONE_NUMBER}`;
      break;
    case "email":
      location.href = `mailto:${GMAIL}`;
      break;
    case "git":
      location.href = `https://github.com/${GIT}`;
      break;
    case "skype":
      location.href = `skype:live:${SKYPE}?call`;
      break;
    case "telegram":
      location.href = `https://t.me/${TELEGRAM}`;
      break;
    case "linkedin":
      location.href = `https://linkedin.com${LINKEDIN}`;
      break;
  }
};