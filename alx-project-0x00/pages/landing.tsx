import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
    </div>
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">Button Component Showcase</h1>

      <div className="flex flex-col space-y-4 w-full max-w-sm">
        <h2 className="text-2xl font-semibold mt-4">Sizes</h2>
        <Button title="Small Button" styles="bg-blue-500 hover:bg-blue-700 text-sm" />
        <Button title="Medium Button" styles="bg-green-500 hover:bg-green-700 text-base" />
        <Button title="Large Button" styles="bg-red-500 hover:bg-red-700 text-lg" />
      </div>

      <div className="flex flex-col space-y-4 w-full max-w-sm">
        <h2 className="text-2xl font-semibold mt-8">Shapes</h2>
        <Button title="Rounded-sm" styles="bg-purple-500 hover:bg-purple-700 rounded-sm" />
        <Button title="Rounded-md" styles="bg-teal-500 hover:bg-teal-700 rounded-md" />
        <Button title="Rounded-full" styles="bg-orange-500 hover:bg-orange-700 rounded-full" />
      </div>
      
      <div className="flex flex-col space-y-4 w-full max-w-sm">
        <h2 className="text-2xl font-semibold mt-8">Combined</h2>
        <Button title="Large Rounded Button" styles="bg-pink-500 hover:bg-pink-700 text-lg rounded-lg" />
      </div>
    </div>
  )
}
export default Landing
