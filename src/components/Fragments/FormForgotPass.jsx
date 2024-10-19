import Button from "../Elements/Button";
import LabeledInput from "../Elements/LabeledInput";
import Logo from "../Elements/Logo"; // Import the Logo component if it exists

const FormForgotPass = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <form className="text-center w-full max-w-md">
                {/* Logo */}
                <div className="mb-6">
                    <Logo /> {/* Use the Logo component */}
                </div>
                
                {/* Title and description */}
                <h1 className="text-2xl font-bold mb-4">Forgot Password?</h1>
                <p className="text-gray-600 mb-6">
                    Enter your email address to get the password reset link.
                </p>
                
                {/* Email input */}
                <div className="mb-6">
                    <LabeledInput
                        label="Email Address"
                        type="email"
                        placeholder="hello@example.com"
                        name="email"
                    />
                </div>
                
                {/* Submit button */}
                <div className="mb-4">
                    <Button variant="bg-primary w-full text-white" type="submit">
                        Password Reset
                    </Button>
                </div>

                {/* Back to login link */}
                <a href="/login" className="text-gray-600 text-sm underline">
                    Back to login
                </a>
            </form>
        </div>
    );
};

export default FormForgotPass;
