import BottomWarning from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import SignIn from "./SignIn";



function SignUp() {
  return (
   
    <div className="bg-slate-300 h-screen flex justify-center">

      <div className="flex flex-col justify-center">
        <div className="bg-white rounded-lg w-80 h-max text-center px-4 p-2">
         <Heading label={"SignUp"}/>
         <SubHeading label={"Enter your credential to access your account"}/>
         <InputBox label={"Email"} placeholder={"example@gmail.com"}/>
         <InputBox label={"Name"} placeholder={"enter your name"}/>
         <InputBox label={"Password"} placeholder={"123456"}/>
         <div className="pt-4">
          <Button label={"Sign Up"}/>
         </div>
         <BottomWarning label={"already have an account "} buttontext={"Sign In"} to={"/signIn"}/>
        </div>
      </div>
    </div>
   
  );
}


export default SignUp
