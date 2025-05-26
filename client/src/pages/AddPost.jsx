import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function AddPost() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const desc = e.target.description.value;
    const img = e.target.image_link.value;
    const data = { title, desc, img };
    fetch("http://localhost:5000/news", {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button className={"cursor-pointer"}>Add Post</Button>
        </DialogTrigger>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Card className="mx-auto w-full max-w-full border-0 shadow-none">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold">
                  Add a new post
                </CardTitle>
                <CardDescription>
                  Enter your email and password to login to your account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      type="title"
                      placeholder="Hello World"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="image_link">Image Link</Label>
                    <Input
                      id="image_link"
                      type="url"
                      placeholder="https://example.com/image.png"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      type="description"
                      placeholder="Enter Blog Description"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full cursor-pointer">
                    Add New Post
                  </Button>
                </div>
              </CardContent>
            </Card>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddPost;
