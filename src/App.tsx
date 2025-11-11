import { LoginForm } from "./components/login-form";
import { SocialLogin } from "./components/social-login";
import { bayerSansClasses } from "./lib/bayer-sans";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full mx-auto">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className={`${bayerSansClasses.heading.h1} text-primary-700 mb-2`}>
            Bayer Portal
          </h1>
          <p className="text-gray-600 text-lg">
            Secure access to your account
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Header with Brand */}
          <div className="p-6 bg-primary-600 text-white text-center">
            <div className="flex items-center justify-center mb-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-10 w-10"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h1 className={`${bayerSansClasses.heading.h3} text-white`}>Welcome Back</h1>
            <p className="text-primary-100 mt-1">Sign in to your account</p>
          </div>
          
          {/* Login Form */}
          <div className="p-6 sm:p-8">
            <LoginForm />
            
            <div className="mt-6">
              <SocialLogin />
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          By signing in, you agree to our{" "}
          <a href="#" className="text-primary-600 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-primary-600 hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
