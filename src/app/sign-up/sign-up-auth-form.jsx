import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignUpAuthForm = () => {
  return (
    <>
      <div className="grid gap-6 my-5 w-[80%] md:w-1/2">
        <form>
          {/* Name */}
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">
                Name <span className="text-red-600">*</span>
              </Label>
              <Input
                id="name"
                placeholder="John Doe"
                type="text"
                autoCapitalize="none"
                autoComplete="name"
                autoCorrect="off"
              />
            </div>

            {/* Email */}
            <div className="grid gap-2">
              <Label htmlFor="email">
                Email <span className="text-red-600">*</span>
              </Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
              />
            </div>

            {/* Password */}
            <div className="grid gap-2">
              <Label htmlFor="password">
                Password <span className="text-red-600">*</span>
              </Label>
              <Input
                id="password"
                placeholder="****************"
                type="password"
                autoCapitalize="none"
                autoComplete="password"
                autoCorrect="off"
              />
            </div>

            {/* Photo */}
            <div className="grid gap-2">
              <Label htmlFor="photo">
                Picture
              </Label>
              <Input id="photo" type="file" />
            </div>
            <Button>Sign up with Email</Button>
          </div>
        </form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="flex gap-4 mx-auto ">
          <Button variant="outline" className="gap-2">
            <FcGoogle />
            Google
          </Button>
          <Button variant="outline" className="gap-2">
            <FaGithub />
            GitHub
          </Button>
        </div>
      </div>
    </>
  );
};

export default SignUpAuthForm;
