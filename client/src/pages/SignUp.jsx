import SignUpForm from "../components/SignUpForm";
import SignUpInfo from "../components/SignUpInfo";

export default function SignUp() {
  return (
    <div className="h-[80vh] max-w-[1240px] mx-auto px-8">
      <div className="h-full flex items-center gap-4">
        <SignUpInfo/>
        <SignUpForm/>
      </div>
    </div>
  )
}
