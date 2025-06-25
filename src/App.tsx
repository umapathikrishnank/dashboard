import './App.css'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './components/ui/card'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './components/ui/select'
import { Switch } from './components/ui/switch'
import { Checkbox } from './components/ui/checkbox'
import { Label } from './components/ui/label'
import { TableDemo } from './components/tableDemo/tableDemo'
import PaginationDemo from './components/paginationDemo/paginationDemo'

function App() {
  return (
  <>
    <div className="bg-slate-200 rounded-[20px] flex items-center justify-center p-10 h-screen">
      <Card className="w-full max-w-1/2">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-black">
            React + Vite + Tailwind CSS
          </CardTitle>
          <CardDescription className="text-sm text-gray-600 text-left">
            A modern stack for building web applications.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <br />
          <Button variant="default" className='mt-5'>Default</Button>
          <br />
          <Button variant="outline" className='mt-5'>Outline</Button>
          <br />
          <Button variant="destructive" className='mt-5'>Destructive</Button>
          <br />
          <Button variant="link" className='mt-5'>Link Button</Button>
          <br />

          <div className="flex w-30 justify-around items-center mt-5">
            <Label>Switch :</Label> <Switch />
          </div>
          <div className="flex w-30 justify-around items-center mt-5">
            <Label>CheckBox :</Label> <Checkbox />
          </div>
        </CardContent>
      </Card>

      <Card className="w-full max-w-1/2">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Button variant="link">Sign Up</Button>
          </CardAction>
        </CardHeader>

        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </CardFooter>
      </Card>
    </div>
    <br />
    <div className='bg-slate-200 rounded-[20px] flex  items-center justify-center p-1 h-screen w-[100%]'>

<div className="w-[80%] h-[100] bg-white/30 rounded-[40px] border-2 border-white backdrop-blur-[6.92px] p-5">
      <TableDemo />
                    <PaginationDemo/>
      </div>
      </div>

  </>
  )
}

export default App
