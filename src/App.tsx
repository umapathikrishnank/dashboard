import './App.css'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card'
import { Button } from './components/ui/button'

function App() {
  return (
    <>
    <Card className="max-w-sm shadow-md w-2xs  dark:bg-gray-800 text-white">
      <CardHeader>
        <CardTitle className='text-lg font-bold'>React + Vite + Tailwind CSS</CardTitle>
        <CardDescription className='text-sm text-gray-600 text-left'> A modern stack for building web applications. </CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
      <CardFooter>
        <Button onClick={()=> alert("Button clicked!")} >Click Me</Button>
      </CardFooter>
    </Card>
    </>
  )
}

export default App
