import type { Profile } from "@/types";

/**
 * PROFILE
 * -----------------------------------------------------------------------
 * Your core identity information. Edit the values below — nothing else
 * in the app needs to change.
 *
 * profileImage: drop an image file into /public (e.g. /public/me.jpg) and
 * set profileImage to "/me.jpg". Leave it as "" to show initials instead.
 *
 * resumeUrl: once you have a CV/resume, drop the PDF into /public
 * (e.g. /public/resume.pdf) and set resumeUrl to "/resume.pdf". Leave it
 * as "" and the "Download CV" button will stay hidden.
 */
export const profile: Profile = {
  name: "Okpala Chimaobi Samuel",
  title: "Software Developer",
  shortBio:
    "I build with HTML, CSS, JavaScript, React, Node.js, TypeScript, and Go — with some Python and PHP in the mix.",
  location: "Caritas University, Enugu",
  email: "okpalachimaobi55@gmail.com",
  phone: "0807 413 3702",
  profileImage: "",
  resumeUrl: "",
  availability: {
    openToWork: true,
    openToFreelance: true,
  },
};
