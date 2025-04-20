import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function AboutUs(){
    return (
        <main className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Kontaktiere uns</h2>
        <form className="space-y-4 max-w-md">
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Button type="submit">Absenden</Button>
        </form>
      </main>
    )
}