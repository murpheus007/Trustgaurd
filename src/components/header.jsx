import logo from "../assets/logo.svg";

export default function header() {
  return (
    <div className="flex justify-center mx-auto my-11">
      <img src={logo} alt="" />
    </div>
  );
}
