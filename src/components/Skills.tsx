import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

export default function Skills() {
  return (
    <section className="bg-secondary/30">
      <div className="container mx-auto px-6 py-20 space-y-10">
        <div className="">
          <h1 className="text-4xl font-bold">About Me</h1>
          <div className="mt-4 border-b-4 border-black w-20"></div>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
              <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
