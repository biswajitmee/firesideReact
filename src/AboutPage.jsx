import AboutSectionOne from "./component/AboutSectionOne";
import AboutSectionThree from "./component/AboutSectionThree";
import AboutSectionTwo from "./component/AboutSectionTwo";

export default function AboutPage() {
  return (
    <>
      <div>
        <AboutSectionOne />
        <AboutSectionTwo />
        <AboutSectionThree />
        {/* <AboutSectionThree /> */}
      </div>
    </>
  )
}