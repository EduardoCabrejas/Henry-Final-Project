import { FormContainer } from "@/components/formContainer";
import { FourColumsContainer } from "@/components/fourColumsContainer";
import { RegisterForm } from "@/components/registerForm";

const Login: React.FC = () => {
    return (
        <div className="bodyContainer mb-16">
            <RegisterForm />
        </div>
    );
};

export default Login;